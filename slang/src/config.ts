import { boxConfig } from "./Box/props";
import { typeConfig } from "./Type/props";
import { ComponentConfig } from "./utils";

export type SlangConfig = {
  baseFontFamily: string;
  baseFontSizePx: number;
  baseFontSizeMobilePx: number;
  baseFontLineHeight: number;
  baseFontLineHeightMobile: number;
  spacerPx: number;
  baseContainerSizePx: number;
  baseSpacingPx: number;
  baseSpacingScale: number;
  errorCorrectionTopPx: number;
  errorCorrectionTopScale: number;
  errorCorrectionBottomPx: number;
  errorCorrectionBottomScale: number;
  typeScaleBase: number;
  typeScaleBaseMobile: number;
  inverseTypeScaleLineHeight: number;
  inverseTypeScaleLineHeightMobile: number;
  // This is which header size the font size 0 maps to
  mappingToUserAgentHeaders: number;
  smallestBorderRadiusPx: number;

  fluidMinScreenSizePx: number;
  fluidMaxScreenSizePx: number;
  breakpoints: Record<string, number>;

  // Color stuff
  palette: Record<string, string[]>;
  colors: Record<string, string>;
};

export const defaultConfig: SlangConfig = {
  /* Typography */
  baseFontFamily:
    "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  baseFontSizePx: 18,
  baseFontSizeMobilePx: 16,
  baseFontLineHeight: 1.15,
  baseFontLineHeightMobile: 1.15,

  // Our smallest unit of space
  spacerPx: 4,

  /* No idea where this is used... */
  baseSpacingPx: 16,

  // Container should be declared in smallest units of space
  baseContainerSizePx: 600,
  baseSpacingScale: 1.1,
  errorCorrectionTopPx: 0,
  errorCorrectionTopScale: 1,
  errorCorrectionBottomPx: 0,
  errorCorrectionBottomScale: 1,
  typeScaleBase: 1.16,
  typeScaleBaseMobile: 1.16,
  inverseTypeScaleLineHeight: 1,
  inverseTypeScaleLineHeightMobile: 1,
  mappingToUserAgentHeaders: 4,
  smallestBorderRadiusPx: 3,
  fluidMinScreenSizePx: 375,
  fluidMaxScreenSizePx: 1200,
  palette: {
    black: ["#000000"],
    white: ["#ffffff"],
  },
  colors: {
    background: "var(--palette-white-0)",
    foreground: "var(--palette-black-0)",
  },
  breakpoints: {
    tablet: 768,
    desktop: 1024,
  },
};

export function mergeDefault(userConfig?: Partial<SlangConfig>) {
  return { ...defaultConfig, ...userConfig };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentClassesConfig: Record<string, ComponentConfig<any>[]> = {
  "slang-box": boxConfig,
  "slang-type": typeConfig,
};
