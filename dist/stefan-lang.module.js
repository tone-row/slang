import styled, { css, createGlobalStyle } from 'styled-components';
import React, { Children, cloneElement } from 'react';

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

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

var ericMeyerReset = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"], ["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"])));
var templateObject_1;

var boxSizing = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n"], ["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n"])));
var buttonReset = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    text-align: inherit;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n    cursor: pointer;\n  }\n"], ["\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    text-align: inherit;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n    cursor: pointer;\n  }\n"])));
var Reset = createGlobalStyle(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n"], ["\n\t", "\n\t", "\n\t", "\n"])), ericMeyerReset, buttonReset, boxSizing);
var templateObject_1$1, templateObject_2, templateObject_3;

/**
 * Common Prop Expansion Functions
 */

function xor(x, or) {
  return x === undefined ? or : x;
}

function mergeBool(props, o) {
  return Object.keys(o).reduce(function (acc, key) {
    if (key in props && props[key]) {
      return __assign(__assign({}, acc), o[key]);
    }

    return acc;
  }, {});
}

function padding(_a) {
  var p = _a.p,
      px = _a.px,
      py = _a.py,
      pt = _a.pt,
      pr = _a.pr,
      pb = _a.pb,
      pl = _a.pl;
  var paddingTop = xor(pt, xor(py, p));
  var paddingRight = xor(pr, xor(px, p));
  var paddingBottom = xor(pb, xor(py, p));
  var paddingLeft = xor(pl, xor(px, p));
  return {
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft
  };
}
function margin(_a) {
  var m = _a.m,
      mx = _a.mx,
      my = _a.my,
      mt = _a.mt,
      mr = _a.mr,
      mb = _a.mb,
      ml = _a.ml;
  var marginTop = xor(mt, xor(my, m));
  var marginRight = xor(mr, xor(mx, m));
  var marginBottom = xor(mb, xor(my, m));
  var marginLeft = xor(ml, xor(mx, m));
  return {
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft
  };
}
function layout(props) {
  return mergeBool(props, {
    tall: {
      height: '100%'
    },
    sticky: {
      position: 'sticky',
      top: 0
    }
  });
}
function content(props) {
  return mergeBool(props, {
    scroll: {
      overflow: 'scroll'
    },
    hidden: {
      overflow: 'hidden'
    },
    nowrap: {
      whiteSpace: 'nowrap'
    }
  });
}
function mainAxis(props) {
  return mergeBool(props, {
    between: {
      justifyContent: 'space-between'
    },
    around: {
      justifyContent: 'space-around'
    },
    evenly: {
      justifyContent: 'space-evenly'
    }
  });
}
function crossAxis(props) {
  return mergeBool(props, {
    center: {
      alignItems: 'center'
    },
    start: {
      alignItems: 'flex-start'
    },
    end: {
      alignItems: 'flex-end'
    }
  });
}

var Box = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), padding, margin, layout, content);
Box.displayName = 'Box';
var templateObject_1$2;

var Grow = styled(Box)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
Grow.displayName = 'Grow';
var templateObject_1$3;

var Container = styled(Box)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  max-width: ", ";\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  max-width: ", ";\n  margin-left: auto;\n  margin-right: auto;\n"])), function (_a) {
  var w = _a.w;
  return w;
});
var templateObject_1$4;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var doNotWrap = ['Box', 'Grow'];

var Collection = function Collection(_a) {
  var children = _a.children,
      each = _a.each,
      _b = _a.collectionWrapper,
      CollectionWrapper = _b === void 0 ? Box : _b,
      _c = _a.wrapper,
      Wrapper = _c === void 0 ? Box : _c,
      props = __rest(_a, ["children", "each", "collectionWrapper", "wrapper"]);

  if (!children) return null;
  return React.createElement(CollectionWrapper, __assign({}, props), Children.toArray(children).map(function (child) {
    if (!child) return null; // Don't wrap if matches known collection child type

    if (_typeof(child) === 'object' && 'type' in child && _typeof(child.type) === 'object' && 'displayName' in child.type && doNotWrap.includes(child.type && child.type.displayName)) {
      return cloneElement(child, each);
    }

    return (// <Wrapper key={child.key} {...each}>
      // TODO: fix key
      React.createElement(Wrapper, __assign({
        key: 'anykey'
      }, each), child)
    );
  }).filter(function (child) {
    return child;
  }));
};

var ListWrapper = styled(Box)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n\tdisplay: flex;\n  flex-direction: column;\n\t", "\n\t", "\n  ", "\n"], ["\n\tdisplay: flex;\n  flex-direction: column;\n\t", "\n\t", "\n  ", "\n"])), mainAxis, crossAxis, function (_a) {
  var gap = _a.gap;
  return gap && "\n\t\t& > " + Box + ", & > " + Grow + " {\n\t\t\tmargin-bottom: " + gap + ";\n\t\t\t&:last-child {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t}\n\t";
});
ListWrapper.displayName = 'ListWrapper';

var List = function List(props) {
  return React.createElement(Collection, __assign({
    collectionWrapper: ListWrapper
  }, props));
};
var templateObject_1$5;

var GroupWrapper = styled(Box)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n\t", "\n\t", "\n  ", "\n"], ["\n  display: flex;\n\t", "\n\t", "\n  ", "\n"])), mainAxis, crossAxis, function (_a) {
  var gap = _a.gap;
  return gap && "\n\t\t& > " + Box + ", & > " + Grow + " {\n\t\t\tmargin-right: " + gap + ";\n\t\t\t&:last-child {\n\t\t\t\tmargin-right: 0;\n\t\t\t}\n\t\t}\n\t";
});
GroupWrapper.displayName = 'GroupWrapper';

var Group = function Group(props) {
  return React.createElement(Collection, __assign({
    collectionWrapper: GroupWrapper
  }, props));
};
var templateObject_1$6;

export { Box, Container, Group, Grow, List, Reset };
