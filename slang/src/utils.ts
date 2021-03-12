/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties } from "react";

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

type ResponsiveComponentProperty<X> = {
  /**
   * CSS Custom Property Name
   */
  key: keyof X;

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
  propValueToCssValue?: (x: keyof X) => string | undefined;
};

export type ComponentConfig<X> = {
  [T in keyof X]-?: ResponsiveComponentProperty<X>;
}[keyof X];

export type ResponsifyComponentProps<CProps, Breakpoint extends string> = {
  at?: Partial<Record<Breakpoint, CProps>>;
} & CProps;

/**
 * Returns a function, which takes the component's props
 * and returns the components classes and css custom properties
 *
 * Original Example of returned fn:
 *
 * `const [cssProperties, dynamicClasses] = getComponentClassesProps(props);`
 */
export function produceComponentClassesPropsGetter<ComponentProps, X>(
  toReduce: any[],
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
    const [props, classes] = toReduce.reduce<[CSSProperties, string[]]>(
      (acc, prop) => {
        const [p, c] = getIndividualChildCssProp<ComponentProps, Breakpoint, X>(
          {
            ...prop,
            node,
          },
        );
        acc[0] = { ...acc[0], ...p };
        acc[1] = acc[1].concat(c);
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
}: ComponentConfig<X> & {
  node: ResponsifyComponentProps<ComponentProps, Breakpoint>;
}): [Record<string, string>, string[]] {
  // Setup
  const classes: string[] = [];
  const properties = {} as Record<string, string>;
  let last = defaultValue;

  // Setup default
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const v = propValueToCssValue(node?.[key]);
  if (v) {
    last = v;
    classes.push(key.toString());
    properties[`--${key}`] = last;
  }

  // ~~need all breakpoints~~
  // no longer should need all breakpoints, because
  // going to use compiled classes, to make the breakpoints
  // take effect
  // so we only need to know what is passed
  if (node.at) {
    for (const breakpoint of Object.keys(node.at)) {
      let v = last;
      const value = propValueToCssValue(node.at[breakpoint]?.[key])?.toString();
      if (value) {
        classes.push(breakpoint);
        classes.push(`${key}-${breakpoint}`);
        v = value;
        last = value;
      }
      properties[`--${key}-${breakpoint}`] = v;
    }
  }
  return [properties, classes];
}
