import {
  PaddingProps,
  MarginProps,
  ContentProps,
  MainAxisProps,
  CrossAxisProps,
  LayoutProps
} from './types';
/**
 * Common Prop Expansion Functions
 */

function xor(x?: string, or?: string) {
  return x === undefined ? or : x;
}

function mergeBool<T>(props: Partial<T>, o: { [key in keyof T]: object }) {
  return Object.keys(o).reduce((acc, key) => {
    if (key in props && props[key as keyof T]) {
      return { ...acc, ...o[key as keyof T] };
    }
    return acc;
  }, {});
}

export function padding({ p, px, py, pt, pr, pb, pl }: PaddingProps) {
  let paddingTop = xor(pt, xor(py, p));
  let paddingRight = xor(pr, xor(px, p));
  let paddingBottom = xor(pb, xor(py, p));
  let paddingLeft = xor(pl, xor(px, p));
  return { paddingTop, paddingRight, paddingBottom, paddingLeft };
}

export function margin({ m, mx, my, mt, mr, mb, ml }: MarginProps) {
  let marginTop = xor(mt, xor(my, m));
  let marginRight = xor(mr, xor(mx, m));
  let marginBottom = xor(mb, xor(my, m));
  let marginLeft = xor(ml, xor(mx, m));
  return { marginTop, marginRight, marginBottom, marginLeft };
}

export function layout(props: LayoutProps) {
  return mergeBool<LayoutProps>(props, {
    tall: { height: '100%' },
    sticky: { position: 'sticky', top: 0 }
  });
}

export function content(props: ContentProps) {
  return mergeBool<ContentProps>(props, {
    scroll: { overflow: 'scroll' },
    hidden: { overflow: 'hidden' },
    nowrap: { whiteSpace: 'nowrap' }
  });
}

export function mainAxis(props: MainAxisProps) {
  return mergeBool<MainAxisProps>(props, {
    between: { justifyContent: 'space-between' },
    around: { justifyContent: 'space-around' },
    evenly: { justifyContent: 'space-evenly' }
  });
}

export function crossAxis(props: CrossAxisProps) {
  return mergeBool<CrossAxisProps>(props, {
    center: { alignItems: 'center' },
    start: { alignItems: 'flex-start' },
    end: { alignItems: 'flex-end' }
  });
}
