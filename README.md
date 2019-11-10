# To Do

- ~Figure out how to classify **visual group use-cases** (list, rows, columns) using overflow as a central theme~ The layout component do that. Shown in the walkthrough.
- ~how should you deal with overflow?~ There is a prop chain which affects flow content and includes things like white-space nowrap. overflow hidden. etc
- ~should column be a way to make something full height??? HOw can we help people get things full height that need to be to be effective? Should we use context???~ For now `tall` prop is used and it is explained that it needs to traverse down the three in the component walkthrough
- ~collection _each_ prop should merge with any props passed to the child if they are both objects, AND things passed to the child should override at the finest grain~
- Should we err towards things not inherting from each other because we're going to combine them ourselves? For example when creating the user would stick a Box inside a Container, but we would morph the two together??? Or should we work from inheritance?
- get examples site working in this repository... i think that would be best but I'm still not entirely sure. It certainly would make it easier to work and to view other people's work. I think it's probably best. Even if it adds some overhead. In the future when this supports multiple types of exports... raw css AND styled components then we won't be worried about dist size anyway.
- build aspect ratio component
- build grid
- decide on any typography componnets
- have really helpful error messages. As an example, if you add the grow prop to Box when it's not a direct child of a Collection type
- publish on github package registry for (possibly private?) use
- BAD TYPING – collectionWrapper
- find a way to manage tickets and moving forward that isn't in the rad
- add pull request template
- to find out what is imported how and make sure individual components can be imported without importing everything. make sure things are tree-shaken is also what i'm saying here.

# Measurement

> If I can't find a way to measure the efficacy of this then it will definitely become tangled no matter how much care and attention is given to prop names or which components are built.

Idea for measurement. Come up with the step-through methodology for layout building, and if there is any step that can't be satisfied with one of the components or techniques then there needs to be another... something that effect.

# More on where you fit into the environment

- building a design system and using it... fast!
