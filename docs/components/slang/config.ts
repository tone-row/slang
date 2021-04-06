import { SlangConfig } from "@tone-row/slang";

const config: Partial<SlangConfig> = {
  // Type
  baseFontFamily: "Neue Montreal",
  baseFontSizePx: 20,
  baseFontSizeMobilePx: 16,
  baseFontLineHeight: 1.4,
  baseFontLineHeightMobile: 1.5,
  errorCorrectionTopPx: -1.32,
  errorCorrectionTopScale: 1.5,
  errorCorrectionBottomPx: 1.67,
  errorCorrectionBottomScale: 1.486,

  // Can be removed
  baseContainerSizePx: 700,

  baseSpacingPx: 30,
  spacerPx: 4,
  baseSpacingScale: 1.1,
  typeScaleBase: 1.4,
  typeScaleBaseMobile: 1.16,
  inverseTypeScaleLineHeight: 0.96,
  inverseTypeScaleLineHeightMobile: 0.969,
  mappingToUserAgentHeaders: 4,
  smallestBorderRadiusPx: 3,
  fluidMinScreenSizePx: 375,
  fluidMaxScreenSizePx: 1200,
  palette: {
    white: ["#ffffff", "#f3f2f2", "#dadada", "#e7ebec"],
    black: ["#000000", "#121212", "#333333"],
  },
  colors: {
    background: "var(--palette-white-1)",
    foreground: "var(--palette-black-0)",
  },
};

export default config;

/*

The future of slang might look something like

those functions are explicitly tied to certain things being available on the interface

you more want to declare certain components i guess

like, make me a box component using these settings

make me a type component using these settings



you describe the elements of a component
- the base class name
- the static props
- the psuedo/responsive props

There's also global properties
How do you describe that a property expects a global property – like a palette color or something
👌


We want to convince the compiler to generate something to the tune of:

  export type TypeProps = PropsWithAs<BaseTypeProps<Breakpoints, Colors>>;
  const Type = forwardRefWithAs<TypeProps, "p">(TypeComponent); 

For this site I need two Type components for each of my fonts

I'm using the API of the "slang config", one API to produce two components

2 components = slang(config)

this is weird because slang is kind of both the end result (the components) and the capacity to produce the end result (the generator and the generation schema)

so there's an API over top of an API ;\ THAT'S The part that makes me uneasy

you have a lot of people and flexibility in the generator. And you're not making that power/flexibilty sing; you're putting it in a cage and saying it can only be used in this very specific way.

Okay, dandy

so what are you going to do about it

Or, do you go – shortest path to accomodate two types into 


Do I need to an audit of the concepts in slang?





*/
