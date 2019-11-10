'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);

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

var ericMeyerReset = styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"], ["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"])));
var templateObject_1;

var boxSizing = styled.css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n"], ["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n"])));
var buttonReset = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    text-align: inherit;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n    cursor: pointer;\n  }\n"], ["\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    text-align: inherit;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n    cursor: pointer;\n  }\n"])));
var Reset = styled.createGlobalStyle(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n\t", "\n\t", "\n"], ["\n\t", "\n\t", "\n\t", "\n"])), ericMeyerReset, buttonReset, boxSizing);
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
function collectionItem(props) {
  return mergeBool(props, {
    grow: {
      flex: 1
    }
  });
}

var Box = styled__default.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), padding, margin, layout, content, collectionItem);
Box.displayName = 'Box';
var templateObject_1$2;

var Container = styled__default(Box)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  max-width: ", ";\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  max-width: ", ";\n  margin-left: auto;\n  margin-right: auto;\n"])), function (_a) {
  var w = _a.w;
  return w;
});
var templateObject_1$3;

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

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

var isMergeableObject$1 = function isMergeableObject(value) {
	return isNonNullObject$1(value)
		&& !isSpecial$1(value)
};

function isNonNullObject$1(value) {
	return !!value && typeof value === 'object'
}

function isSpecial$1(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement$1(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol$1 = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE$1 = canUseSymbol$1 ? Symbol.for('react.element') : 0xeac7;

function isReactElement$1(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE$1
}

var _customMerge = {
  className: function className(classNameA, classNameB) {
    return [classNameA, classNameB].join(' ');
  }
};
var mergeOptions = {
  isMergeableObject: function isMergeableObject(value) {
    return isMergeableObject$1(value) || typeof value === 'string';
  },
  customMerge: function customMerge(key) {
    return key in _customMerge ? _customMerge[key] : function (x, y) {
      return cjs(x, y);
    };
  },
  clone: false
};
function wrapChildIf(child, testChild, Wrapper, each) {
  if (each === void 0) {
    each = {};
  }

  if (testChild(child)) {
    return React__default.createElement(Wrapper, __assign({
      key: 'anykey'
    }, each), child);
  }

  var cloneArgs = [child];

  if (each) {
    var childProps = cjs(each, child.props, mergeOptions);
    cloneArgs[1] = childProps;
  }

  return React__default.cloneElement.apply(React__default, cloneArgs);
}
var doNotWrap = ['Box'];
var childIsNotBox = function childIsNotBox(child) {
  return !(child && _typeof(child) === 'object' && 'type' in child && _typeof(child.type) === 'object' && 'displayName' in child.type && doNotWrap.includes(child.type && child.type.displayName));
};

var Collection = function Collection(_a) {
  var children = _a.children,
      each = _a.each,
      _b = _a.collectionWrapper,
      CollectionWrapper = _b === void 0 ? Box : _b,
      _c = _a.wrapper,
      Wrapper = _c === void 0 ? Box : _c,
      props = __rest(_a, ["children", "each", "collectionWrapper", "wrapper"]);

  return React__default.createElement(CollectionWrapper, __assign({}, props), React.Children.toArray(children).map(function (child) {
    if (!child) return null;
    return wrapChildIf(child, childIsNotBox, Wrapper, each);
  }).filter(function (child) {
    return child;
  }));
};

var ListWrapper = styled__default(Box)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n\tdisplay: flex;\n  flex-direction: column;\n\t", "\n\t", "\n  ", "\n"], ["\n\tdisplay: flex;\n  flex-direction: column;\n\t", "\n\t", "\n  ", "\n"])), mainAxis, crossAxis, function (_a) {
  var gap = _a.gap;
  return gap && "\n\t\t& > " + Box + " {\n\t\t\tmargin-bottom: " + gap + ";\n\t\t\t&:last-child {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t}\n\t";
});
ListWrapper.displayName = 'ListWrapper';

var List = function List(props) {
  return React__default.createElement(Collection, __assign({
    collectionWrapper: ListWrapper
  }, props));
};
var templateObject_1$4;

var GroupWrapper = styled__default(Box)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n\t", "\n\t", "\n  ", "\n"], ["\n  display: flex;\n\t", "\n\t", "\n  ", "\n"])), mainAxis, crossAxis, function (_a) {
  var gap = _a.gap;
  return gap && "\n\t\t& > " + Box + " {\n\t\t\tmargin-right: " + gap + ";\n\t\t\t&:last-child {\n\t\t\t\tmargin-right: 0;\n\t\t\t}\n\t\t}\n\t";
});
GroupWrapper.displayName = 'GroupWrapper';

var Group = function Group(props) {
  return React__default.createElement(Collection, __assign({
    collectionWrapper: GroupWrapper
  }, props));
};
var templateObject_1$5;

var ShapeWrapper = styled__default.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  &:before {\n    content: ' ';\n    display: block;\n    padding-bottom: calc(100% * ", ");\n  }\n\n  & > ", " {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  position: relative;\n  &:before {\n    content: ' ';\n    display: block;\n    padding-bottom: calc(100% * ", ");\n  }\n\n  & > ", " {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n"])), function (_a) {
  var _b = _a.ratio,
      ratio = _b === void 0 ? 1 : _b;
  return ratio;
}, Box);
ShapeWrapper.displayName = 'ShapeWrapper';

var Shape = function Shape(_a) {
  var children = _a.children,
      props = __rest(_a, ["children"]);

  var childrenArray = React__default.Children.toArray(children);

  if (childrenArray.length > 1) {
    throw new Error("<Shape> can only have one child.");
  }

  return React__default.createElement(ShapeWrapper, __assign({}, props), React__default.Children.toArray(children).map(function (child) {
    if (!child) return null;
    return wrapChildIf(child, childIsNotBox, Box);
  }).filter(function (child) {
    return child;
  }));
};
var templateObject_1$6;

exports.Box = Box;
exports.Container = Container;
exports.Group = Group;
exports.List = List;
exports.Reset = Reset;
exports.Shape = Shape;
