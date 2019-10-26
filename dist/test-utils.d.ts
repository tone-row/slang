import { ReactElement } from 'react';
declare const customRender: (ui: ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>, options?: any) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/queries")>;
export * from '@testing-library/react';
export { customRender as render };
