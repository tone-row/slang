import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { withLive } from 'react-live';
import { border, color, spacing } from '../utils/theme';

const HEIGHT = 200;
const WIDTH = (4 / 3) * HEIGHT;

const RotatorWrapper = styled.div`
  background: ${color.lowContrast};
  padding: ${spacing.default};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${2 * HEIGHT}px;
  cursor: grab;
  border-radius: ${border.defaultRadius} ${border.defaultRadius} 0 0;
`;

RotatorWrapper.displayName = 'RotatorWrapper';

const RotatorBox = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  position: relative;
  background: white;
  box-shadow: 10px 10px 0 #ccc;
  transition: width 100ms ease-out, height 100ms ease-out;
`;

RotatorBox.displayName = 'RotatorBox';

const Rotator: React.FC = ({ children }) => {
  const box = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentBox = box.current;
    const currentWrapper = wrapper.current;
    function onMouseMove(e: MouseEvent) {
      const { clientX, clientY } = e;
      const clientRect = currentWrapper && currentWrapper.getBoundingClientRect();
      if (clientRect && currentBox) {
        const x = 2 * Math.abs(clientRect.width / 2 - (clientX - clientRect.left));
        const y = 2 * Math.abs(clientRect.height / 2 - (clientY - clientRect.top));
        currentBox.style.width = `${x}px`;
        currentBox.style.height = `${y}px`;
      }
    }
    function onMouseOut(e: MouseEvent) {
      if (currentBox) {
        currentBox.style.width = `${WIDTH}px`;
        currentBox.style.height = `${HEIGHT}px`;
      }
    }
    function onMouseEnter(e: MouseEvent) {
      currentWrapper && currentWrapper.addEventListener('mousemove', onMouseMove);
    }
    function onClick(e: MouseEvent) {
      currentWrapper && currentWrapper.removeEventListener('mousemove', onMouseMove);
    }
    if (currentWrapper) {
      currentWrapper.addEventListener('mouseenter', onMouseEnter);
      currentWrapper.addEventListener('mouseleave', onMouseOut);
      currentWrapper.addEventListener('click', onClick);
      return () => {
        currentWrapper.removeEventListener('mouseenter', onMouseEnter);
        currentWrapper.removeEventListener('mousemove', onMouseMove);
        currentWrapper.removeEventListener('mouseleave', onMouseOut);
        currentWrapper.removeEventListener('click', onClick);
      };
    }
  }, []);
  return (
    <RotatorWrapper ref={wrapper}>
      <RotatorBox ref={box}>{children}</RotatorBox>
    </RotatorWrapper>
  );
};

export default Rotator;

const withLiveRender = ({ live: { element: Element } }: any) => {
  return (
    <Rotator>
      <Element />
    </Rotator>
  );
};

export const LivePreviewRotator = withLive(withLiveRender);

LivePreviewRotator.displayName = 'LivePreviewRotator';
