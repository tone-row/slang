import { BoxComponent, BoxProps, TypeComponent, TypeProps, forwardRefWithAs } from '@tone-row/slang';
  
const Box = forwardRefWithAs<BoxProps<"fun" | "cool">, "div">(BoxComponent);
const Type = forwardRefWithAs<TypeProps, "div">(TypeComponent);
export { Box, Type };
