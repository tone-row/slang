import React from 'react';
import ReactMarkdown from 'react-markdown';
import { spacing, border } from '../utils/theme';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
  line-height: 1.25;

  .markdown > * {
    margin-bottom: ${spacing.small};
    &:last-child {
      margin-bottom: 0;
    }
    
    @media(min-width: 1000px) {
      margin-bottom: ${spacing.default};
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
    color: var(--accent);
    text-decoration: none;
    font-weight: 700;
  }

  &.home {
    h3 {
      font-size: 2rem;
    }
  
    h4 {
      font-size: 1.5rem;
    }
  
    h5 {
      font-size: 1.25rem;
      font-weight: 700;
    }
    h3,h4 {
      text-align: center;
    }
    font-size: 1.25rem;
  }
`;

StyledMarkdown.displayName = 'StyledMarkdown';

type MarkdownProps = {
  children?: string;
  className?: string;
};

const Markdown: React.FC<MarkdownProps> = ({ children, className = '' }) => (
  <StyledMarkdown className={className}>
    <ReactMarkdown source={children} className="markdown" />
  </StyledMarkdown>
);

export default Markdown;
