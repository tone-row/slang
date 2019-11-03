import { PaddingProps, MarginProps, ContentProps, MainAxisProps, CrossAxisProps } from './types';
export declare function padding({ p, px, py, pt, pr, pb, pl }: PaddingProps): {
    paddingTop: string | undefined;
    paddingRight: string | undefined;
    paddingBottom: string | undefined;
    paddingLeft: string | undefined;
};
export declare function margin({ m, mx, my, mt, mr, mb, ml }: MarginProps): {
    marginTop: string | undefined;
    marginRight: string | undefined;
    marginBottom: string | undefined;
    marginLeft: string | undefined;
};
export declare function content(props: ContentProps): {};
export declare function mainAxis(props: MainAxisProps): {};
export declare function crossAxis(props: CrossAxisProps): {};
