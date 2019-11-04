import { BaseComponent, PaddingProps, MarginProps, ContentProps, LayoutProps } from '../../utils/types';
export interface BoxProps extends BaseComponent, PaddingProps, MarginProps, LayoutProps, ContentProps {
}
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export default Box;
