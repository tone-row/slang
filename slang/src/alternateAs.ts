/* eslint-disable @typescript-eslint/no-explicit-any */
export type PropsOfElement<
  E extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any>
    | ComponentWithAs
> = E extends { __PRIVATE_PROPS: any }
  ? E["__PRIVATE_PROPS"]
  : JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export type ComponentWithAs<
  TElementType extends keyof JSX.IntrinsicElements = "div",
  // eslint-disable-next-line @typescript-eslint/ban-types
  TProps = {}
> = (<TExtendedElementType extends React.ElementType = TElementType>(
  props: Omit<PropsOfElement<TExtendedElementType>, "as" | keyof TProps> & {
    as?: TExtendedElementType;
  } & TProps,
) => JSX.Element) & {
  propTypes?: React.WeakValidationMap<TProps> & {
    as: React.Requireable<
      | string
      | ((props: any, context?: any) => any)
      | (new (props: any, context?: any) => any)
    >;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<TProps & { as: TElementType }>;
  displayName?: string;

  /**
   * A hack to simplify the resolution for ComponentWithAs.
   * @see https://github.com/microsoft/fluentui/pull/13841
   */
  readonly __PRIVATE_PROPS?: Omit<
    PropsOfElement<TElementType>,
    "as" | keyof TProps
  > & { as?: TElementType } & TProps;
};
