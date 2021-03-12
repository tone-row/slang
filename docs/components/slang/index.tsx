import {
  BoxComponent,
  TypeComponent,
  forwardRefWithAs,
  PropsWithAs,
  BaseBoxProps,
  BaseTypeProps,
} from "@tone-row/slang";

type Breakpoints = "tablet" | "desktop";
type Colors = 
  | "color-background"
  | "color-foreground"
  | "palette-white-0"
  | "palette-white-1"
  | "palette-white-2"
  | "palette-white-3"
  | "palette-black-0";
export type BoxProps = PropsWithAs<BaseBoxProps<Breakpoints, Colors>>;
export type TypeProps = PropsWithAs<BaseTypeProps<Breakpoints, Colors>>;
const Box = forwardRefWithAs<BoxProps, "div">(BoxComponent);
const Type = forwardRefWithAs<TypeProps, "div">(TypeComponent);
export { Box, Type };
