import { ComponentConfig } from "../utils";

export interface ResponsiveProps {
  weight?: string;
}

export const typeConfig: ComponentConfig<ResponsiveProps>[] = [
  {
    key: "weight",
    defaultValue: "400",
    cssFromVariable: (v) => `font-weight: ${v};`,
  },
];
