import { SlangConfig } from "@tone-row/slang";

const config: Partial<SlangConfig> = {
  baseFontFamily: "Neue Montreal",
  baseFontSizePx: 20,
  baseFontSizeMobilePx: 16,
  baseFontLineHeight: 1.5,
  baseFontLineHeightMobile: 1.5,
  baseContainerSizePx: 700,
  baseSpacingPx: 22.4,
  baseSpacingScale: 1.1,
  errorCorrectionTopPx: -1.32,
  errorCorrectionTopScale: 1.5,
  errorCorrectionBottomPx: 1.67,
  errorCorrectionBottomScale: 1.486,
  typeScaleBase: 1.25,
  typeScaleBaseMobile: 1.16,
  inverseTypeScaleLineHeight: 0.96,
  inverseTypeScaleLineHeightMobile: 0.969,
  mappingToUserAgentHeaders: 4,
  smallestBorderRadiusPx: 3,
  fluidMinScreenSizePx: 375,
  fluidMaxScreenSizePx: 1200,
  palette: {
    white: ["#ffffff", "#f3f2f2", "#dadada", "#e7ebec"],
    black: ["#000000"],
  },
  colors: {
    background: "var(--palette-white-1)",
    foreground: "var(--palette-black-0)",
  },
};

export default config;
