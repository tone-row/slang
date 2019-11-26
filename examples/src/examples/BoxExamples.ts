import { Example } from '../components/Section';

const basic: Example = {
  title: 'Basic',
  code: `<Box style={{background: 'var(--accent)'}}>Hello World</Box>`,
  description: `It's just a div! We've added a background color so we can better see how the box model is affected.`
};

const padding: Example = {
  title: 'Padding',
  code: `<Box p="1rem" style={{background: 'var(--accent)'}}>Hello World</Box>`,
  description: `This example adds padding to all sides using the shorthand property __p__. 
  
  Nearly all Slang component properties accept a string, that way we don't make any assumptions about the nature of your design tokens.`
};

const margin: Example = {
  title: 'Margin',
  code: `<Box m="1rem" style={{background: 'var(--accent)'}}>Hello World</Box>`,
  description: `The shorthand property for margin on all sides is **m**. It works just like padding.`
};

const axis: Example = {
  title: 'Axis',
  code: `<Box my="1rem" px="1rem" style={{background: 'var(--accent)'}}>Hello World</Box>`,
  description: `Margin and padding don't need to be applied to all sides. They can also be on the left and right (the _"x-axis"_) with the shorthands **mx** and **px**, and on the top and bottom (the _"y-axis"_) with **my** and **py**.`
};

const specificSides: Example = {
  title: 'Specific Sides',
  code: `<Box mt="1rem" mr="2rem" pb="1rem" pl="2rem" style={{background: 'var(--accent)'}}>Hello World</Box>`,
  description: `Finally they can be applied to specific sides too: the top (**-t**), right (**-r**), bottom (**-b**), and left (**-l**).`
};

const overrides: Example = {
  title: 'Overrides',
  code: `<Box p="1rem" pt="3rem" style={{background: 'var(--accent)'}}>Hello World</Box>`,
  description: `More specific declarations will override less specific with the order from general to specific being all-sides &rarr; axis, &rarr; specific-sides.`
};

export default [basic, padding, margin, axis, specificSides, overrides];
