/// <reference types="react" />
export declare type TPaddingShorthand = 'p' | 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl';
export declare type TMarginShorthand = 'm' | 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml';
export declare type PaddingProps = {
    [key in TPaddingShorthand]?: string;
};
export declare type MarginProps = {
    [key in TMarginShorthand]?: string;
};
export declare type LayoutProps = {
    tall?: boolean;
    sticky?: boolean;
};
export declare type ContentProps = {
    scroll?: boolean;
    hidden?: boolean;
    nowrap?: boolean;
};
export declare type CrossAxisProps = {
    center?: boolean;
    start?: boolean;
    end?: boolean;
};
export declare type MainAxisProps = {
    between?: boolean;
    around?: boolean;
    evenly?: boolean;
};
export declare type CollectionProps = {
    gap?: string;
    each?: object;
    wrapper?: React.ComponentType;
};
export interface BaseComponent {
    className?: string;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}
