# Slang

A toolkit based on [styled-components](https://www.styled-components.com/) for building design systems in react.

### Versioning Plan

- Feat branches increment the minor 0.x.0
- Fix branches increment the patch 0.0.x
- Move to 1.0.0 when released

### Broad Questions

- Should we err towards things not inherting from each other because we're going to combine them ourselves? For example when creating the user would stick a Box inside a Container, but we would morph the two together??? Or should we work from inheritance?
- how to truly implement quality-control via the step-through method
- should prop chains be more promenant
- is there any way to identify what a prop chain serves to do. how is it separate or the same from a component.
