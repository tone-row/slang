import { createComponentCss } from "./createComponentCss";
import { defaultConfig, SlangConfig } from "./config";

export function makeCSS(config?: Partial<SlangConfig>) {
  const cssProperties = createProperties(config);
  const derivedProperties = createDerivedProperties(config);
  const colorProperties = createColorProperties(config);
  const responsiveCss = createComponentCss(config);
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

const derivedProperties: Record<
  string,
  (config: SlangConfig) => string | number
> = {
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

export function createDerivedProperties(userConfig?: Partial<SlangConfig>) {
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

export function createProperties(userConfig?: Partial<SlangConfig>) {
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

export function createColorProperties(userConfig?: Partial<SlangConfig>) {
  const props = {} as Record<string, string>;
  const config = { ...defaultConfig, ...userConfig };
  const { colors, palette } = config;
  if (!colors["foreground"] || !colors["background"]) {
    throw new Error("foreground and background colors are required");
  }
  for (const [nameOfColor, shades] of Object.entries(palette)) {
    const colorName = kebabize(nameOfColor);
    for (const [index, shade] of Object.entries(shades)) {
      const customPropertyName = getPaletteColorName({ colorName, index });
      props[customPropertyName] = shade;
    }
  }

  for (const [key, link] of Object.entries(colors)) {
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
