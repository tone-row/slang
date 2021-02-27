import { useEffect } from "react";
import "./Global.css";
// Global is the way to write all necessary properties on the client
// We should also be able to generate them with a command (maybe add .bin)
// and that will generate a css file that we import
const ID = "__slang";

export type Colors = {
  palette: Record<string, string[]>;
  colors: Record<string, string>;
};

export type SlangConfig = {
  baseFontFamily: string;
  baseFontSizePx: number;
  baseFontSizeMobilePx: number;
  baseFontLineHeight: number;
  baseFontLineHeightMobile: number;
  baseContainerSizePx: number;
  baseSpacingPx: number;
  baseVerticalSpacingDivisor: number;
  baseHorizontalSpacingDivisor: number;
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
  // Color stuff
  colorStore: Colors;
  fluidMinScreenSizePx: number;
  fluidMaxScreenSizePx: number;
};

export const defaultConfig: SlangConfig = {
  baseFontFamily: "sans-serif",
  baseFontSizePx: 16,
  baseFontSizeMobilePx: 15,
  baseFontLineHeight: 1.2,
  baseFontLineHeightMobile: 1.2,
  baseContainerSizePx: 600,
  baseSpacingPx: 16,
  baseVerticalSpacingDivisor: 2,
  baseHorizontalSpacingDivisor: 60,
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
  colorStore: {
    palette: {
      black: ["#000000"],
      white: ["#ffffff"],
    },
    colors: {
      background: "var(--palette-white-0)",
      foreground: "var(--palette-black-0)",
    },
  },
};

function powerFunctions({
  min,
  max,
  base,
  key,
}: {
  min: number;
  max: number;
  base: keyof SlangConfig;
  key: string;
}): Record<string, (config: SlangConfig) => string | number> {
  const result = {} as Record<string, (config: SlangConfig) => string | number>;
  for (let i = min; i <= max; i++) {
    result[`${key}-${i}`] = (config) => Math.pow(config[base] as number, i);
  }
  return result;
}

const derivedProperties: Record<
  string,
  (config: SlangConfig) => string | number
> = {
  spaceVPx: ({ baseSpacingPx: baseSpacing, baseVerticalSpacingDivisor }) =>
    baseSpacing / baseVerticalSpacingDivisor,
  spaceHPx: ({ baseContainerSizePx, baseHorizontalSpacingDivisor }) =>
    baseContainerSizePx / baseHorizontalSpacingDivisor,
  ...powerFunctions({
    min: -3,
    max: 8,
    key: "multiplier",
    base: "typeScaleBase",
  }),
  ...powerFunctions({
    min: -3,
    max: 8,
    key: "mobileMultiplier",
    base: "typeScaleBaseMobile",
  }),
  ...powerFunctions({
    min: -3,
    max: 8,
    key: "lhMultiplier",
    base: "inverseTypeScaleLineHeight",
  }),
  ...powerFunctions({
    min: -3,
    max: 8,
    key: "lhMobileMultiplier",
    base: "inverseTypeScaleLineHeightMobile",
  }),
  ...powerFunctions({
    min: -3,
    max: 8,
    key: "errorTopMultiplier",
    base: "errorCorrectionTopScale",
  }),
  ...powerFunctions({
    min: -3,
    max: 8,
    key: "errorBottomMultiplier",
    base: "errorCorrectionBottomScale",
  }),
};

export default function Global({
  config,
  update = false,
}: {
  config?: Partial<SlangConfig>;
  update?: boolean;
}) {
  useEffect(() => {
    if (!document) return;
    let element = document.getElementById(ID);
    if (!element || update) {
      if (!element) {
        element = document.createElement("style");
        element.setAttribute("id", ID);
        document.head.appendChild(element);
      }
      element.innerHTML = getThemeCss(config);
    }
  }, [config, update]);
  // I want to setup all the needed CSS custom properties
  // so that my components don't need any context whatsoever
  // but then I want my components to be typed accordingly
  return null;
}

function createDerivedProperties(userConfig?: Partial<SlangConfig>) {
  const props = {} as Record<string, string>;
  const config = { ...defaultConfig, ...userConfig };
  for (const [key, fn] of Object.entries(derivedProperties)) {
    const customPropertyName = `--${kebabize(key)}`;
    const result = fn(config);
    const customPropertyValue =
      typeof result === "string" ? result : result.toString();
    if (customPropertyName.match(/-px$/)) {
      props[customPropertyName] = `${customPropertyValue}px`;
      props[customPropertyName.slice(0, -3)] = customPropertyValue;
    } else {
      props[customPropertyName] = customPropertyValue;
    }
  }
  return props;
}

function createProperties(userConfig?: Partial<SlangConfig>) {
  const props = {} as Record<string, string>;
  const config = { ...defaultConfig, ...userConfig };
  for (const [key, value] of Object.entries(config)) {
    const customPropertyName = `--${kebabize(key)}`;
    let customPropertyValue = "";
    if (typeof value === "string") customPropertyValue = value;
    if (typeof value === "number") customPropertyValue = value.toString();
    if (customPropertyValue) {
      if (customPropertyName.match(/-px$/)) {
        props[customPropertyName] = `${customPropertyValue}px`;
        props[customPropertyName.slice(0, -3)] = customPropertyValue;
      } else {
        props[customPropertyName] = customPropertyValue;
      }
    }
  }
  return props;
}

function createColorProperties(userConfig?: Partial<SlangConfig>) {
  const props = {} as Record<string, string>;
  const config = { ...defaultConfig, ...userConfig };
  const store = config.colorStore;
  if (!store.colors["foreground"] || !store.colors["background"]) {
    throw new Error("foreground and background colors are required");
  }
  for (const [nameOfColor, shades] of Object.entries(store.palette)) {
    const colorName = kebabize(nameOfColor);
    for (const [index, shade] of Object.entries(shades)) {
      const customPropertyName = getPaletteColorName({ colorName, index });
      props[customPropertyName] = shade;
    }
  }

  for (const [key, link] of Object.entries(store.colors)) {
    const customPropertyName = `--color-${key}`;
    props[customPropertyName] = link;
  }

  return props;
}

function kebabize(str: string) {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.match(/[A-Za-z]/) && letter.toLocaleUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
}

export function getPaletteColorName(args: {
  colorName: string;
  index: string;
}) {
  return `--palette-${args.colorName}-${args.index}`;
}

export function getThemeCss(config?: Partial<SlangConfig>) {
  const cssProperties = createProperties(config);
  const derivedProperties = createDerivedProperties(config);
  const colorProperties = createColorProperties(config);
  return [":root {"]
    .concat(
      Object.entries({
        ...cssProperties,
        ...derivedProperties,
        ...colorProperties,
      }).map((property) => `${property.join(":")};`),
    )
    .concat(" }")
    .join("\n");
}
