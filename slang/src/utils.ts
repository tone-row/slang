/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties } from "react";
import { SAFARI_PATCH_KEY } from "./constants";

export type As<Props = any> = React.ElementType<Props>;

export type PropsWithAs<Props = {}, Type extends As = As> = Props &
  Omit<React.ComponentProps<Type>, "as" | keyof Props> & {
    as?: Type;
  };

export type ComponentWithAs<Props, DefaultType extends As> = {
  <Type extends As>(
    props: PropsWithAs<Props, Type> & { as: Type },
  ): JSX.Element;
  (props: PropsWithAs<Props, DefaultType>): JSX.Element;
};

export function forwardRefWithAs<Props, DefaultType extends As>(
  component: React.ForwardRefRenderFunction<any, any>,
) {
  return (React.forwardRef(component) as unknown) as ComponentWithAs<
    Props,
    DefaultType
  >;
}

type ResponsiveComponentProperty<ResponsiveProperties> = {
  /**
   * CSS Custom Property Name
   */
  key: keyof ResponsiveProperties;

  /**
   * Initial value, if prop is passed to component
   * with undefined value
   */
  defaultValue?: string;

  /**
   * A function which takes the custom property (wrapped in `var`),
   * e.g. `var(--p-desktop)`, and returns a css string
   * with one or more propety: value; pairs,
   * like `padding: calc(var(--p-desktop) * var(--spacer-px));`
   */
  cssFromVariable: (customProperty: string) => string;

  /**
   * Custom logic in converting what the user passes
   * into the component, into the value that will be assed to the custom property
   */
  propValueToCssValue?: (x: keyof ResponsiveProperties) => string | undefined;

  /**
   * Declares that a patch needs to be made to make ios safari behavior consistent
   *
   * Adds custom property in the form {key}-{breakpoint}-safari: value
   *
   * The presence of this key causes the classes and custom prop to be rendered
   * This variable takes an object expecting {cssFromVariable, propValueToCssValue}
   */
  iosSafariPatch?: {
    cssFromVariable: (customProperty: string) => string;
    propValueToCssValue?: (x: keyof ResponsiveProperties) => string | undefined;
  };
};

export type ComponentConfig<X> = {
  [T in keyof X]-?: ResponsiveComponentProperty<X>;
}[keyof X];

export type Hoverify<CProps> = {
  hover?: Partial<CProps>;
} & CProps;

export type Responsify<CProps, Breakpoint extends string> = {
  at?: Partial<Record<Breakpoint, CProps>>;
} & CProps;

// A prop accepts an object with pseudo states as well...
export type AllowPseudo<T> = T | { default?: T; hover?: T };

/**
 * Returns a function, which takes the component's props
 * and returns the components classes and css custom properties
 *
 * Original Example of returned fn:
 *
 * `const [cssProperties, dynamicClasses] = getComponentClassesProps(props);`
 */
export function produceComponentClassesPropsGetter<ComponentProps, X>(
  configArray: any[],
) {
  /*
  function getComponentClassesProps(node: PropsWithAs<BoxProps<"tablet" | "desktop">, "div">): [React.CSSProperties, string[]]
  */

  /**
   * does this work?
   */
  return function getComponentClassesProps<Breakpoint extends string>(
    node: ComponentProps,
  ): [CSSProperties, string[]] {
    const [props, classes] = configArray.reduce<[CSSProperties, string[]]>(
      (acc, prop) => {
        const [properties, classes] = getIndividualChildCssProp<
          ComponentProps,
          Breakpoint,
          X
        >({
          ...prop,
          node,
        });
        acc[0] = { ...acc[0], ...properties };
        acc[1] = acc[1].concat(classes);
        return acc;
      },
      [{}, []],
    );

    return [props, Array.from(new Set(classes))];
  };
}

function getIndividualChildCssProp<
  ComponentProps,
  Breakpoint extends string,
  X = {}
>({
  key,
  defaultValue = "0",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  propValueToCssValue = (z: any) => z,

  node,
  iosSafariPatch,
}: ComponentConfig<X> & {
  node: Responsify<Hoverify<ComponentProps>, Breakpoint>;
}): [Record<string, string>, string[]] {
  // Setup
  const classes: string[] = [];
  const properties = {} as Record<string, string>;
  let last = defaultValue;

  // hover classes/properties need to be added at root & breakpoint sizes
  function handleHover(
    cProps: Partial<Hoverify<ComponentProps>>,
    key: string | number | symbol,
    breakpoint?: string,
  ) {
    // add return hover classes/properties or nothing
    if ("hover" in cProps) {
      const value = propValueToCssValue(cProps.hover?.[key]);
      if (value) {
        const thisKey = [key, breakpoint].filter(Boolean).join("-");
        // add the class
        classes.push(`${thisKey}_hover`);
        // which activates the property value
        properties[`--${thisKey}_hover`] = value;
      }
    }
  }

  // Setup default
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const v = propValueToCssValue(node?.[key]);
  if (v) {
    last = v;
    // add the class
    classes.push(key.toString());
    // which activates the property value
    properties[`--${key}`] = last;
  }

  handleHover(node, key);

  if (iosSafariPatch && iosSafariPatch.propValueToCssValue) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const safariValue = iosSafariPatch.propValueToCssValue(node?.[key] as any);
    if (safariValue) {
      classes.push(`${key.toString()}-${SAFARI_PATCH_KEY}`);
      properties[`--${key.toString()}-${SAFARI_PATCH_KEY}`] = safariValue;
    }
  }

  // no longer should need all breakpoints, because
  // going to use compiled classes, to make the breakpoints
  // take effect
  // so we only need to know what is passed
  if (node.at) {
    for (const breakpoint of Object.keys(node.at)) {
      let v = last;
      const rawValue = node.at[breakpoint]?.[key];
      // Don't put classes or properties on the element if not defined at a size
      if (typeof rawValue === "undefined") continue;
      const value = propValueToCssValue(rawValue);
      if (value) {
        classes.push(breakpoint);
        classes.push(`${key}-${breakpoint}`);
        v = value;
        last = value;
      }
      properties[`--${key}-${breakpoint}`] = v;

      handleHover(node.at[breakpoint], key, breakpoint);
    }
  }
  return [properties, classes];
}

export function separateComponentProps<T>(obj: T, componentKeys: string[]) {
  return Object.keys(obj).reduce(
    (acc, key) =>
      componentKeys.includes(key)
        ? [{ ...acc[0], [key]: obj[key] }, acc[1]]
        : [acc[0], { ...acc[1], [key]: obj[key] }],
    [{}, {}],
  );
}
