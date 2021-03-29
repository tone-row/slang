import { SlangConfig, defaultConfig, componentClassesConfig } from "./config";
import { SAFARI_PATCH_KEY } from "./constants";

export function createComponentCss(userConfig?: Partial<SlangConfig>): string {
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

      // add hover
      cssLines = cssLines.concat(
        `.${className}.${prop.key.toString()}_hover:hover {`,
        prop.cssFromVariable(`var(--${prop.key.toString()}_hover)`),
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
              // hover
              `.${className}.${p.key.toString()}-${breakpoint}_hover:hover {`,
              p.cssFromVariable(
                `var(--${p.key.toString()}-${breakpoint}_hover)`,
              ),
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

/*
- root class, classes to apply (replacing properties)
- for each class:
  - 


what is the real point of scoping these classes under a given main class? 
to ensure that they perform their supposed duty. but really maybe it's more of a many-to-many dependency graph
that ensure that a specific class performs its duty.
for instance if you add gap then it will automatically add display grid or flex or whatever is needed

the logic is like

for any given class-property module, it either accomplishes what it sets out to accomplish OR
there is one or more smallest sets which are also needed to accomplish the function of the class-property-module CPM
so it automatically applies the other class

i guess the question is when do we finally apply those styles to a component?
if the CPM is functionally self-contained. can it truly be used on any element?
do we use the CSS types to know if an element can truly perform the task of the type :\ 

there's a class
  and it does two things:
  - its a function of (one or more css properties) => the css to accomplish it
  - and a function that maps from (what you pass to a component) => to what value gets set on the css property value



*/
