import { BoxProps } from '../Box/Box';
interface ContainerProps extends BoxProps {
    w: string;
}
declare const Container: import("styled-components").StyledComponent<"div", any, BoxProps & ContainerProps, never>;
export default Container;
