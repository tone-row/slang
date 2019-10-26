import React from 'react';
import styled from 'styled-components';

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

export { Box };
