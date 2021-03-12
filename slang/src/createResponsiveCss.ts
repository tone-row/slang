import { SlangConfig, defaultConfig, componentClassesConfig } from "./config";

export function createResponsiveCss(userConfig?: Partial<SlangConfig>): string {
  let breakpoints: string[] = [""];
  const config = { ...defaultConfig, ...userConfig };

  for (const [className, configList] of Object.entries(
    componentClassesConfig,
  )) {
    for (const prop of configList) {
      breakpoints = breakpoints.concat(
        `.${className}.${prop.key.toString()} {`,
        prop.cssFromVariable(`var(--${prop.key.toString()})`),
        `}`,
      );
    }

    for (const [breakpoint, size] of Object.entries(config.breakpoints)) {
      breakpoints = breakpoints.concat([
        `@media(min-width: ${size}px) {`,
        ...configList.reduce<string[]>(
          (acc, p) =>
            acc.concat([
              `.${className}.${p.key.toString()}-${breakpoint} {`,
              p.cssFromVariable(`var(--${p.key.toString()}-${breakpoint})`),
              `}`,
            ]),
          [],
        ),
        `}`,
      ]);
    }
  }

  return breakpoints.join("\n");
}
