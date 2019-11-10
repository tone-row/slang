import { Example } from '../components/Section';

const basic: Example = {
  title: 'Basic',
  code: `<Shape ratio={3/4} style={{background: 'palegreen'}}><Box>I'll always be three by four.</Box></Shape>`,
  description: `The \`ratio\` prop. declares the ratio of the height / width to maintain no matter what width the element is.`,
};

const overflowScroll: Example = {
  title: 'Scroll',
  code: `<Shape ratio={3/4} style={{background: 'palegreen'}}><Box scroll>Sometimes you'll want to overflow: scroll these bad boys to make sure that the user can acces whatever is going on! Here some ipsum dude... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Box></Shape>`,
  description: `The \`ratio\` prop. declares the ratio of the height / width to maintain no matter what width the element is.`,
};

const overflowHidden: Example = {
  title: 'Hidden',
  code: `<Shape ratio={3/4} style={{background: 'palegreen'}}><Box hidden>Sometimes you want the overflow hidden! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Box></Shape>`,
  description: `The \`ratio\` prop. declares the ratio of the height / width to maintain no matter what width the element is.`,
};

export default [basic, overflowScroll, overflowHidden];
