import { BaseComponent, PaddingProps, MarginProps, ContentProps } from '../../utils/types';
export interface BoxProps extends BaseComponent, PaddingProps, MarginProps, ContentProps {
}
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export default Box;
