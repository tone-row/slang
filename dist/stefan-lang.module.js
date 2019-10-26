import React, { Children } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function xor(x, or) {
  return x === undefined ? or : x;
}

var StyledBox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
  var paddingTop = _a.paddingTop,
      paddingRight = _a.paddingRight,
      paddingBottom = _a.paddingBottom,
      paddingLeft = _a.paddingLeft,
      marginTop = _a.marginTop,
      marginRight = _a.marginRight,
      marginBottom = _a.marginBottom,
      marginLeft = _a.marginLeft;
  return {
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft
  };
});
/**
 * The box allows for margin or padding
 * @param param0 this does it
 */

var Box = function Box(_a) {
  var p = _a.p,
      px = _a.px,
      py = _a.py,
      pt = _a.pt,
      pr = _a.pr,
      pb = _a.pb,
      pl = _a.pl,
      m = _a.m,
      mx = _a.mx,
      my = _a.my,
      mt = _a.mt,
      mr = _a.mr,
      mb = _a.mb,
      ml = _a.ml,
      props = __rest(_a, ["p", "px", "py", "pt", "pr", "pb", "pl", "m", "mx", "my", "mt", "mr", "mb", "ml"]);

  var paddingTop = xor(pt, xor(py, p));
  var paddingRight = xor(pr, xor(px, p));
  var paddingBottom = xor(pb, xor(py, p));
  var paddingLeft = xor(pl, xor(px, p));
  var marginTop = xor(mt, xor(my, m));
  var marginRight = xor(mr, xor(mx, m));
  var marginBottom = xor(mb, xor(my, m));
  var marginLeft = xor(ml, xor(mx, m));
  return React.createElement(StyledBox, __assign({
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft
  }, props));
};
var templateObject_1;

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

var ericMeyerReset = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"], ["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"])));
var templateObject_1$1;

var boxSizing = css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n"], ["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n"])));
var buttonReset = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    text-align: inherit;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n    cursor: pointer;\n  }\n"], ["\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    text-align: inherit;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n    cursor: pointer;\n  }\n"])));
var Reset = createGlobalStyle(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n"], ["\n\t", "\n\t", "\n\t", "\n"])), ericMeyerReset, buttonReset, boxSizing);
var templateObject_1$2, templateObject_2, templateObject_3;

var ColumnsItem = styled(Box)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  grid-row: 1;\n"], ["\n  grid-row: 1;\n"])));
var StyledColumns = styled('div')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: auto;\n  ", "\n"], ["\n  display: grid;\n  grid-template-columns: auto;\n  ", "\n"])), function (_a) {
  var gutter = _a.gutter;
  return gutter && "grid-gap: " + gutter + ";";
});

var Columns = function Columns(_a) {
  var gutter = _a.gutter,
      _b = _a.itemProps,
      itemProps = _b === void 0 ? {} : _b,
      children = _a.children;
  return React.createElement(StyledColumns, {
    gutter: gutter
  }, Children.toArray(children).filter(function (child) {
    return child;
  }).map(function (child) {
    return React.createElement(ColumnsItem, __assign({
      key: child.key
    }, itemProps), child);
  }));
};
var templateObject_1$3, templateObject_2$1;

var RowsItem = styled(Box)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  grid-column: 1;\n"], ["\n  grid-column: 1;\n"])));
var StyledRows = styled('div')(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-rows: auto;\n  ", "\n"], ["\n  display: grid;\n  grid-template-rows: auto;\n  ", "\n"])), function (_a) {
  var gutter = _a.gutter;
  return gutter && "grid-gap: " + gutter + ";";
});

var Rows = function Rows(_a) {
  var gutter = _a.gutter,
      _b = _a.itemProps,
      itemProps = _b === void 0 ? {} : _b,
      children = _a.children;
  return React.createElement(StyledRows, {
    gutter: gutter
  }, Children.toArray(children).filter(function (child) {
    return child;
  }).map(function (child) {
    return React.createElement(RowsItem, __assign({
      key: child.key
    }, itemProps), child);
  }));
};
var templateObject_1$4, templateObject_2$2;

export { Box, Columns, Reset, Rows };
