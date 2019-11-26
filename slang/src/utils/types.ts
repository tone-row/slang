export interface BaseComponent {
  className?: string;
  as?: any;
}

export type TPaddingShorthand = 'p' | 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl';
export type TMarginShorthand = 'm' | 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml';

export type PaddingProps = {
  [key in TPaddingShorthand]?: string;
};

export type MarginProps = {
  [key in TMarginShorthand]?: string;
};

export type LayoutProps = {
  tall?: boolean;
  sticky?: boolean;
};

export type ContentProps = {
  oScroll?: boolean;
  oHidden?: boolean;
  nowrap?: boolean;
};

export type CrossAxisProps = {
  center?: boolean;
  start?: boolean;
  end?: boolean;
};
export type MainAxisProps = {
  between?: boolean;
  around?: boolean;
  evenly?: boolean;
};

export type CollectionProps = {
  gap?: string;
  each?: object;
  wrapper?: React.ComponentType;
};

export type CollectionItemProps = {
  grow?: boolean;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
};
