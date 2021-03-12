import { BoxComponent, BoxProps, TypeComponent, TypeProps, forwardRefWithAs } from '@tone-row/slang';

type Breakpoints = "tablet" | "desktop";
const Box = forwardRefWithAs<BoxProps<Breakpoints>, "div">(BoxComponent);
const Type = forwardRefWithAs<TypeProps<Breakpoints>, "div">(TypeComponent);
export { Box, Type };  
