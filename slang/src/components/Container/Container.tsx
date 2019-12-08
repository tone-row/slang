import styled from 'styled-components';
import { PaddingProps, MarginProps, LayoutProps, ContentProps } from '../../utils/types';
import { padding, margin, layout, content } from '../../utils/props';

interface ContainerProps extends PaddingProps, MarginProps, LayoutProps, ContentProps {
  w: string;
}

const Container = styled.div<ContainerProps>`
  ${padding}
  ${margin}
  ${layout}
  ${content}
  max-width: ${({ w }): string => w};
  margin-left: auto;
  margin-right: auto;
`;

Container.displayName = 'Container';

export default Container;
