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
  breakpoints: Record<string, number>;
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
  breakpoints: {
    tablet: 768,
    desktop: 1024,
  },
};

export function mergeDefault(userConfig?: Partial<SlangConfig>) {
  return { ...defaultConfig, ...userConfig };
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

export function getThemeCss(config?: Partial<SlangConfig>) {
  const cssProperties = createProperties(config);
  const derivedProperties = createDerivedProperties(config);
  const colorProperties = createColorProperties(config);
  const responsiveCss = createResponsiveCss(config);
  return [":root {"]
    .concat(
      Object.entries({
        ...cssProperties,
        ...derivedProperties,
        ...colorProperties,
      }).map((property) => `\t${property.join(":")};`),
    )
    .concat([" }", responsiveCss])
    .join("\n");
}

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

const boxResponsiveProps = [
  { key: "flow", cssProp: "grid-auto-flow" },
  { key: "place", cssProp: "place-content" },
];
function createResponsiveCss(userConfig?: Partial<SlangConfig>): string {
  let breakpoints: string[] = [""];
  const config = { ...defaultConfig, ...userConfig };
  for (const p of boxResponsiveProps) {
    breakpoints = breakpoints.concat(
      `.slang-box.${p.key} {`,
      `${p.cssProp}: var(--${p.key});`,
      `}`,
    );
  }
  for (const [breakpoint, size] of Object.entries(config.breakpoints)) {
    breakpoints = breakpoints.concat([
      `@media(min-width: ${size}px) {`,
      ...boxResponsiveProps.reduce<string[]>(
        (acc, p) =>
          acc.concat([
            `.slang-box.${p.key}-${breakpoint} {`,
            `${p.cssProp}: var(--${p.key}-${breakpoint});`,
            `}`,
          ]),
        [],
      ),
      `}`,
    ]);
  }
  return breakpoints.join("\n");
}
