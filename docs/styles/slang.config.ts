import { SlangConfig, defaultConfig } from "@tone-row/slang";

const colorStore: SlangConfig["colorStore"] = defaultConfig.colorStore;
colorStore.palette.white.push("#fafafa");
colorStore.palette.white.push("#ccc");

export const config: Partial<SlangConfig> = {
  baseFontFamily: "gt america trial",
  baseFontSizePx: 20,
  baseFontSizeMobilePx: 15.62992125984252,
  baseFontLineHeight: 1.4700787401574804,
  baseFontLineHeightMobile: 1.3267716535433072,
  baseContainerSizePx: 691.3385826771654,
  baseSpacingPx: 20,
  baseVerticalSpacingDivisor: 2,
  baseHorizontalSpacingDivisor: 78,
  baseSpacingScale: 1.1,
  errorCorrectionTopPx: -2.14,
  errorCorrectionTopScale: 1.5,
  errorCorrectionBottomPx: -0.16,
  errorCorrectionBottomScale: 1.026,
  typeScaleBase: 1.4094488188976377,
  typeScaleBaseMobile: 1.2834645669291338,
  inverseTypeScaleLineHeight: 0.96,
  inverseTypeScaleLineHeightMobile: 0.9350393700787402,
  mappingToUserAgentHeaders: 4,
  smallestBorderRadiusPx: 3,
  fluidMinScreenSizePx: 375,
  fluidMaxScreenSizePx: 1200,
  colorStore,
};
