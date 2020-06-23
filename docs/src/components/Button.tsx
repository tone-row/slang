import styled from 'styled-components';
import { Box } from '@tone-row/slang';
import { color, border, spacing } from '../utils/theme';

const Button = styled(Box)<{ secondary?: boolean }>`
  border: ${border.default};
  border-radius: ${border.defaultRadius};
  padding: ${spacing.small};
  width: 100%;
  text-align: center;
  background: white;

  a {
    color: black;
    text-decoration: none;
    display: block;
  }

  ${({ secondary }) =>
    secondary &&
    `
		border-color: ${color.accent};
		background: ${color.accent};
	`}

  &:focus {
    outline: none;
    border-color: var(--accent-dark);
  }
`;

Button.displayName = 'Button';

export default Button;
