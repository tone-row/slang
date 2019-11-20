import React from 'react';
import { render } from '../../test-utils';
import Box from './Box';

describe('<Box/>', () => {
  it('should not apply any style rules not passed', () => {
    const { container } = render(<Box pt="10px" />);
    const { paddingTop, paddingRight, paddingBottom, paddingLeft } = window.getComputedStyle(
      container.firstChild as HTMLElement,
    );

    expect(paddingTop).toBe('10px');
    expect(paddingRight).toBe('');
    expect(paddingBottom).toBe('');
    expect(paddingLeft).toBe('');
  });

  it('should prefer side style to axis', () => {
    const { container } = render(<Box my="10px" mb="20px" />);
    const { marginTop, marginBottom } = window.getComputedStyle(container.firstChild as HTMLElement);

    expect(marginTop).toBe('10px');
    expect(marginBottom).toBe('20px');
  });

  it('should prefer axis style to global', () => {
    const { container } = render(<Box my="10px" m="20px" />);
    const { marginTop, marginLeft } = window.getComputedStyle(container.firstChild as HTMLElement);

    expect(marginTop).toBe('10px');
    expect(marginLeft).toBe('20px');
  });

  it('should apply padding and margin if as prop passed', () => {
    const { container, getByTestId } = render(
      <Box my="10px" m="20px" as={'section' as 'section'} data-testid="Section" />,
    );
    const { marginTop, marginLeft } = window.getComputedStyle(container.firstChild as HTMLElement);

    expect(getByTestId('Section').nodeName).toBe('SECTION');
    expect(marginTop).toBe('10px');
    expect(marginLeft).toBe('20px');
  });
});
