import { SlangConfig, defaultConfig, componentClassesConfig } from "./config";
import { SAFARI_PATCH_KEY } from "./constants";

export function createResponsiveCss(userConfig?: Partial<SlangConfig>): string {
  let cssLines: string[] = [""];
  const config = { ...defaultConfig, ...userConfig };

  // Loop over each component's responsive property list
  for (const [className, configList] of Object.entries(
    componentClassesConfig,
  )) {
    // Loop over each property
    for (const prop of configList) {
      cssLines = cssLines.concat(
        `.${className}.${prop.key.toString()} {`,
        prop.cssFromVariable(`var(--${prop.key.toString()})`),
        `}`,
      );

      // Check for safari patch and do the same
      if ("iosSafariPatch" in prop) {
        cssLines = cssLines.concat(
          "@supports (-webkit-touch-callout: none) {",
          `.${className}.${prop.key.toString()}-${SAFARI_PATCH_KEY} {`,
          prop.cssFromVariable(
            `var(--${prop.key.toString()}-${SAFARI_PATCH_KEY})`,
          ),
          "}",
          "}",
        );
      }
    }

    // Loop over each breakpoint
    for (const [breakpoint, size] of Object.entries(config.breakpoints)) {
      cssLines = cssLines.concat([
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

  return cssLines.join("\n");
}
