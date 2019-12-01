import React from 'react';
import { render } from '../../test-utils';
import Collection from './Collection';
import Item from '../Item/Item';

describe('<Collection />', () => {
  beforeEach(() => {
    global.console.log = jest.fn();
    global.console.warn = jest.fn();
    global.console.debug = jest.fn();
    global.console.error = jest.fn();
  });

  it('should wrap every child in an Item', () => {
    const { getByTestId } = render(
      <Collection data-testid="collection">{['hello', 'world']}</Collection>
    );
    expect(getByTestId('collection').querySelectorAll(':scope > div')).toHaveLength(2);
  });

  it('should not wrap a Item in Item', () => {
    const { container } = render(
      <Collection className="parent">
        {`Hello`}
        <Item className="child">World</Item>
      </Collection>
    );
    expect(container.querySelectorAll(`.parent > .child`)).toHaveLength(1);
  });

  it('should move child keys to the parent box', () => {
    render(
      <Collection className="parent">
        <div key="test1">Hello World</div>
        <div key="test2">Hello World</div>
      </Collection>
    );
    expect(global.console.error).toHaveBeenCalledTimes(0);
  });

  describe('each', () => {
    it('should apply to all children', () => {
      const { container } = render(
        <Collection each={{ className: 'test' }}>{['hello', 'world']}</Collection>
      );
      expect(container.querySelectorAll('.test')).toHaveLength(2);
    });

    it('should merge className correctly', () => {
      const { container } = render(
        <Collection each={{ className: 'a' }}>
          <Item className="b" />
        </Collection>
      );
      expect(container.querySelectorAll('.a.b')).toHaveLength(1);
    });

    it('should merge style correctly, defaulting to child', () => {
      const { getByTestId } = render(
        <Collection each={{ style: { color: 'blue' } }}>
          <Item data-testid="box" style={{ color: 'green' }} />
        </Collection>
      );
      const { color } = window.getComputedStyle(getByTestId('box'));
      expect(color).toEqual('green');
    });
  });
});
