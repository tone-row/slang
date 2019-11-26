const basic = {
  title: 'Basic',
  code: `<Container p="1rem" w="15rem" style={{background: 'var(--accent)'}}>Hello World</Container>`,
  description: `The container accepts all the same props as a Box, but accepts one new prop **w** for a width. Then the container will become a maximum of that width but no more.`
};

const aFewDifferent = {
  title: 'Vertical Alignment',
  code: `<>
  <Container p="1rem" w="10rem" style={{background: 'var(--accent)'}}>Hello World</Container>
  <Container p="2rem" w="14rem" style={{background: 'mediumpurple'}}>My text aligns with the left edge of the others!</Container>
  <Container p="1rem" w="10rem" style={{background: 'var(--accent)'}}>Hello World</Container>
</>`,
  description: `It's important to think about how padding and max-widths effect the vertical alignment of each box and their contents.`
};

export default [basic, aFewDifferent];
