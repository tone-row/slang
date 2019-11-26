import { Example } from '../components/Section';

const basic: Example = {
  title: 'Basic',
  code: `<Shape ratio={3/4} style={{background: 'palegreen'}}><Item>I'll always be three by four.</Item></Shape>`,
  description: `The \`ratio\` prop. declares the ratio of the height / width to maintain no matter what width the element is.`,
};

const overflowScroll: Example = {
  title: 'Scroll',
  code: `<Shape ratio={3/4} style={{background: 'palegreen'}} oScroll><Item>Sometimes you'll want to overflow: scroll these bad boys to make sure that the user can acces whatever is going on! Here some ipsum dude... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Item></Shape>`,
  description: `The \`ratio\` prop. declares the ratio of the height / width to maintain no matter what width the element is.`,
};

const overflowHidden: Example = {
  title: 'Hidden',
  code: `<Shape ratio={3/4} style={{background: 'palegreen'}} oHidden><Item>Sometimes you want the overflow oHidden! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Item></Shape>`,
  description: `The \`ratio\` prop. declares the ratio of the height / width to maintain no matter what width the element is. We use the "o" prefix specifically for this property, because "hidden" is a valid attribute on any dom element which hides it.`,
};

export default [basic, overflowScroll, overflowHidden];
