import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import ericMeyerReset from './ericMeyerReset';
import superFormReset from './superFormReset';

const boxSizing = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const buttonReset = css`
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;
    line-height: normal;
    text-align: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;
  }
`;

const Reset = createGlobalStyle`
  ${superFormReset}
	${ericMeyerReset}
	${buttonReset}
  ${boxSizing}
`;

export default Reset;
