import { SlangConfig, defaultConfig } from "@tone-row/slang";

const colorStore: SlangConfig["colorStore"] = defaultConfig.colorStore;
colorStore.palette.white.push("#fafafa");
colorStore.palette.white.push("#dcdcdc");

export const config: Partial<SlangConfig> = {
  baseFontFamily: "Neue Montreal",
  baseFontSizePx: 19.25,
  baseFontSizeMobilePx: 16.84,
  baseFontLineHeight: 1.29,
  baseFontLineHeightMobile: 1.26,
  baseContainerSizePx: 654,
  baseSpacingPx: 22.4,
  baseVerticalSpacingDivisor: 3,
  baseHorizontalSpacingDivisor: 90,
  baseSpacingScale: 1.1,
  errorCorrectionTopPx: -1.32,
  errorCorrectionTopScale: 1.5,
  errorCorrectionBottomPx: 1.67,
  errorCorrectionBottomScale: 1.486,
  typeScaleBase: 1.421,
  typeScaleBaseMobile: 1.16,
  inverseTypeScaleLineHeight: 0.96,
  inverseTypeScaleLineHeightMobile: 0.969,
  mappingToUserAgentHeaders: 4,
  smallestBorderRadiusPx: 3,
  fluidMinScreenSizePx: 375,
  fluidMaxScreenSizePx: 1200,
  colorStore,
};
