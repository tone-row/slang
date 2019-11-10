import React from 'react';
import ReactMarkdown from 'react-markdown';
import { spacing, border } from '../utils/theme';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
  line-height: 1.33;

  .markdown > * {
    margin-bottom: ${spacing.default};
    &:last-child {
      margin-bottom: 0;
    }
  }

  .markdown > ul {
    list-style: inside;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 900;
  }

  li {
    margin-bottom: ${spacing.small};
    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 2em;
  }

  h4 {
    font-size: 1.5em;
  }

  h5 {
    font-size: 1.25em;
  }

  code {
    background: #eee;
    border-radius: ${border.defaultRadius};
    display: inline-block;
    padding: 0.1em;
    font-family: monospace;
  }

  a {
    color: palegreen;
    text-decoration: none;
    font-weight: 700;
  }
`;

StyledMarkdown.displayName = 'StyledMarkdown';

type MarkdownProps = {
  children?: string;
};

const Markdown: React.FC<MarkdownProps> = ({ children }) => (
  <StyledMarkdown>
    <ReactMarkdown source={children} className="markdown" />
  </StyledMarkdown>
);

export default Markdown;
