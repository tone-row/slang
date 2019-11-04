# To Do

- Find out why rows/columns when passing an as to the subcomponent, doesn't successfully add padding and margin
- Add tests to rows/columns
- Figure out how to classify **visual group use-cases** (list, rows, columns) using overflow as a central theme
- how should you deal with overflow?
- should column be a way to make something full height??? HOw can we help people get things full height that need to be to be effective? Should we use context???
- Should we err towards things not inherting from each other because we're going to combine them ourselves? For example when creating the user would stick a Box inside a Container, but we would morph the two together??? Or should we work from inheritance?
- turn on ESLInt badassness include jsx-a11y
- BAD TYPING – collectionWrapper
- collection _each_ prop should merge with any props passed to the child if they are both objects, AND things passed to the child should override at the finest grain.
- grow should become a shorthand of Box's (collection chidlren) and cease to be a separate component
- build grid
- build aspect ratio component
- decide on any typography componnets
- have really helpful error messages. As an example, if you add the grow prop to Box when it's not a direct child of a Collection type

# Measurement

> If I can't find a way to measure the efficacy of this then it will definitely become tangled no matter how much care and attention is given to prop names or which components are built.

Idea for measurement. Come up with the step-through methodology for layout building, and if there is any step that can't be satisfied with one of the components or techniques then there needs to be another... something that effect.
