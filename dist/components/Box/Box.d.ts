import { BaseComponent, PaddingProps, MarginProps, ContentProps, LayoutProps, CollectionItemProps } from '../../utils/types';
export interface BoxProps extends BaseComponent, PaddingProps, MarginProps, LayoutProps, ContentProps, CollectionItemProps {
}
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export default Box;
