(() => new WebSocket(location.origin.replace('http', 'ws')+"/$events").onmessage = () => location.reload())();function _mergeNamespaces(n2, m2) {
  m2.forEach(function(e2) {
    e2 && typeof e2 !== "string" && !Array.isArray(e2) && Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default" && !(k2 in n2)) {
        var d2 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  });
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
const p$3 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$3();
var style = "";
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$2 && a[z$2] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps)
    for (d2 in g2 = a.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$1, type: a, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$1(a, b2) {
  return { $$typeof: l$1, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
}
function R$1(a, b2, e2, d2, c2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
      return a2;
    })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$1(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = d2 + Q$1(k2, g2);
      h2 += R$1(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$2(a), "function" === typeof f2)
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a, b2, e2) {
  if (null == a)
    return a;
  var d2 = [], c2 = 0;
  R$1(a, d2, "", "", function(a2) {
    return b2.call(e2, a2, c2++);
  });
  return d2;
}
function T$1(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
  S$1(a, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b2 = 0;
  S$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b2, e2) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$1, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b2 = M$1.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$2, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$1, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b2) {
  return U$1.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$1.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e2) {
  return U$1.current.useImperativeHandle(a, b2, e2);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$1.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$1.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$1.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e2) {
  return U$1.current.useReducer(a, b2, e2);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e2) {
  return U$1.current.useSyncExternalStore(a, b2, e2);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var _1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": React
}, [react.exports]);
var reactDom$1 = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (0 < g2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a:
        for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a[d2] = x2, a[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a);
      }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ca = scheduler.exports;
function p$1(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++)
    da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$1(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$1[a] = new v$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$1[b2] = new v$1(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$1[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$1[a] = new v$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$1[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$1[a] = new v$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$1[a] = new v$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$1[a] = new v$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$1[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z$1[b2] = new v$1(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$1[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$1[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$1[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$1[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c2, d2) {
  var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$1 = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
      case Ha:
        b2 = a._payload;
        a = a._init;
        try {
          return Qa(a(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a.value || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function cb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a)
    null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a[e2].disabled || (b2 = a[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$1(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p$1(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$1(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$1(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$1(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$1(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p$1(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c2) {
  if (Ib)
    return a(b2, c2);
  Ib = true;
  try {
    return Gb(a, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c2 = a.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p$1(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$1(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p$1(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2)
      throw Error(p$1(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$1(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$1(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$1(190));
  }
  if (3 !== c2.tag)
    throw Error(p$1(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2)
      return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a.entangledLanes;
  if (0 !== b2)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b2) {
  for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function Ac(a, b2, c2) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c2;
}
function Bc(a, b2) {
  var c2 = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d2 = a.eventTimes;
  for (a = a.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a, b2) {
  var c2 = a.entangledLanes |= b2;
  for (a = a.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
    c2 &= ~e2;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c2, d2, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a;
}
function Uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c2) {
      c2 = a.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c2) {
  Xc(a) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function gd(a, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function fd(a, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a, b2, c2, d2);
    if (null === e2)
      hd(a, b2, d2, id, c2), Sc(a, d2);
    else if (Uc(e2, a, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c2, d2);
        null === f2 && hd(a, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a, b2, c2, d2) {
  id = null;
  a = xb(d2);
  a = Wc(a);
  if (null !== a)
    if (b2 = Vb(a), null === b2)
      a = null;
    else if (c2 = b2.tag, 13 === c2) {
      a = Wb(b2);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a = null;
    } else
      b2 !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A$1({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
}
function ne(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2))
    return a;
}
function ve(a, b2) {
  if ("change" === a)
    return b2;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a, xb(a));
    Jb(re, b2);
  }
}
function Ce(a, b2, c2) {
  "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b2) {
  if ("click" === a)
    return te(b2);
}
function Fe(a, b2) {
  if ("input" === a || "change" === a)
    return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b2) {
  if (He(a, b2))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He(a[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b2) {
  var c2 = Je(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe(a) {
  var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne(c2)) {
      if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
      else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c2; a = a.parentNode; )
      1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b2 = We[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye)
      return Xe[a] = b2[c2];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Ub(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a + "__bubble";
  c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
}
function qf(a, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function hd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a, d3))) {
          ne(g3, na, c2, e3);
          break a;
        }
        xa && xa(a, h3, d3);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c2) : ke(a, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se(g3, b2);
  });
}
function tf(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c2) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c2)
    throw Error(p$1(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a = Mf(a); null !== a; ) {
          if (c2 = a[Of])
            return c2;
          a = Mf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$1(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b2, c2) {
  if (H.current !== Vf)
    throw Error(p$1(168));
  G(H, b2);
  G(Wf, c2);
}
function bg(a, b2, c2) {
  var d2 = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$1(108, Ra(a) || "Unknown", e2));
  return A$1({}, c2, d2);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(p$1(169));
  c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C;
    try {
      var c2 = eg;
      for (C = 1; a < c2.length; a++) {
        var d2 = c2[a];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d2 = rg;
  a = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a, b2)) {
        if (Dg(a))
          throw Error(p$1(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$1(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$1(418));
    for (; b2; )
      Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$1(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$1({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b2 = Mg.current;
  E(Mg);
  a._currentValue = b2;
}
function Sg(a, b2, c2) {
  for (; null !== a; ) {
    var d2 = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a === c2)
      break;
    a = a.return;
  }
}
function Tg(a, b2) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b2 = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$1(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b2;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a, d2);
}
function Zg(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b2, c2) {
  var d2 = a.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a, c2);
}
function eh(a, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
function fh(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A$1({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a.lanes = g2;
    a.memoizedState = q2;
  }
}
function ih(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p$1(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a, f2, e2);
  null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a, f2, e2);
  null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = L(), d2 = lh(a), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a, e2, d2);
  null !== b2 && (mh(b2, a, d2, c2), eh(b2, a, d2));
} };
function oh(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function ph(a, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = jh;
  ah(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b2, f2, c2), e2.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c2, e2, d2), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$1(147, a));
      var e2 = d2, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a)
      throw Error(p$1(284));
    if (!c2._owner)
      throw Error(p$1(290, a));
  }
  return a;
}
function th(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function uh(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function vh(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = wh(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a2, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a2, b3, c3), d3.return = a2, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = sh(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = sh(a2, null, b3), c3.return = a2, c3;
        case wa:
          return b3 = zh(b3, a2.mode, c3), b3.return = a2, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a2, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a2.mode, c3, null), b3.return = a2, b3;
      th(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a2,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a2, b3, c3, d3, null);
      th(a2, c3);
    }
    return null;
  }
  function y2(a2, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
        case wa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a2, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$1(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$1(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function J2(a2, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a2, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a2, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a2, l3, f3);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                }
                c2(a2, l3);
                break;
              } else
                b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a2, d3, f3, h3);
      if (Ka(f3))
        return t2(a2, d3, f3, h3);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = xh(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p$1(174));
  return a;
}
function Ih(a, b2) {
  G(Gh, b2);
  G(Fh, a);
  G(Eh, Dh);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E(Eh);
  G(Eh, b2);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a.type);
  b2 !== c2 && (G(Fh, a), G(Eh, c2));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p$1(321));
}
function Wh(a, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!He(a[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a, b2, c2, d2, e2, f2) {
  Rh = f2;
  N = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$1(301));
      f2 += 1;
      P = O = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b2)
    throw Error(p$1(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b2 = null === P ? N.memoizedState : P.next;
  if (null !== b2)
    P = b2, O = a;
  else {
    if (null === a)
      throw Error(p$1(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function fi(a) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$1(311));
  c2.lastRenderedReducer = a;
  var d2 = O, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a = c2.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$1(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a, b2) {
  var c2 = N, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a), [a]);
  if (d2.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R)
      throw Error(p$1(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a, b2, c2) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c2 };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
}
function mi(a, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a);
}
function ki(a, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a);
  });
}
function oi(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c2 = b2();
    return !He(a, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a) {
  var b2 = Zg(a, 1);
  null !== b2 && mh(b2, a, 1, -1);
}
function qi(a) {
  var b2 = ci();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b2.memoizedState, a];
}
function li(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b2, c2, d2) {
  var e2 = ci();
  N.flags |= a;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O) {
    var g2 = O.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N.flags |= a;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a, b2) {
  return ti(8390656, 8, a, b2);
}
function ji(a, b2) {
  return ui(2048, 8, a, b2);
}
function wi(a, b2) {
  return ui(4, 2, a, b2);
}
function xi(a, b2) {
  return ui(4, 4, a, b2);
}
function yi(a, b2) {
  if ("function" === typeof b2)
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function zi(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b2, a), c2);
}
function Ai() {
}
function Bi(a, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function Ci(a, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function Di(a, b2, c2) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c2;
  He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a.baseState = true);
  return b2;
}
function Ei(a, b2) {
  var c2 = C;
  C = 0 !== c2 && 4 > c2 ? c2 : 4;
  a(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b2();
  } finally {
    C = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b2, c2) {
  var d2 = lh(a);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, c2);
  else if (c2 = Yg(a, b2, c2, d2), null !== c2) {
    var e2 = L();
    mh(c2, a, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a, b2, c2) {
  var d2 = lh(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a, b2, e2, d2);
    null !== c2 && (e2 = L(), mh(c2, a, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a) {
  var b2 = a.alternate;
  return a === N || null !== b2 && b2 === N;
}
function Ii(a, b2) {
  Th = Sh = true;
  var c2 = a.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a.pending = b2;
}
function Ji(a, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b2) {
  ci().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a),
    c2
  );
}, useLayoutEffect: function(a, b2) {
  return ti(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ti(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d2.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d2.memoizedState, a];
}, useRef: function(a) {
  var b2 = ci();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b2 = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c2) {
  var d2 = N, e2 = ci();
  if (I) {
    if (void 0 === c2)
      throw Error(p$1(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R)
      throw Error(p$1(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a
  ), [a]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a = ci(), b2 = R.identifierPrefix;
  if (I) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b2 = di();
    return Di(b2, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b2 = di().memoizedState;
    return [a, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b2 = di();
  return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b2 = di().memoizedState;
  return [a, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2, digest: null };
}
function Li(a, b2, c2) {
  return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a, b2);
  };
  return c2;
}
function Ri(a, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a, b2, c2) {
  var d2 = a.pingCache;
  if (null === d2) {
    d2 = a.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a = Ui.bind(null, a, b2, c2), b2.then(a, a));
}
function Vi(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag)
      b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b2, c2, d2, e2) {
  if (0 === (a.mode & 1))
    return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b2, c2, d2) {
  b2.child = null === a ? Ch(b2, null, c2, d2) : Bh(b2, a.child, c2, d2);
}
function Zi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
  I && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, d2, e2);
  return b2.child;
}
function aj(a, b2, c2, d2, e2) {
  if (null === a) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d2, e2);
    a = yh(c2.type, null, d2, b2, b2.mode, e2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a.ref === b2.ref)
      return $i(a, b2, e2);
  }
  b2.flags |= 1;
  a = wh(f2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function cj(a, b2, c2, d2, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d2) && a.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a.lanes, $i(a, b2, e2);
  }
  return dj(a, b2, c2, d2, e2);
}
function ej(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
  Yi(a, b2, e2, c2);
  return b2.child;
}
function hj(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
  I && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, c2, e2);
  return b2.child;
}
function ij(a, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a, b2, c2, d2, f2, e2);
}
function kj(a, b2, c2, d2, e2, f2) {
  hj(a, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  Ih(a, b2.containerInfo);
}
function mj(a, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = M.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e2 |= 1;
  G(M, e2 & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a = Ah(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a) : rj(b2, g2);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a.child;
  a = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function tj(a, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a.child, null, c2);
  a = rj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function sj(a, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p$1(422))), tj(a, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$1(419));
    d2 = Li(f2, d2, void 0);
    return tj(a, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a.childLanes);
  if (Ug || h2) {
    d2 = R;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d2, a, e2, -1));
    }
    uj();
    d2 = Li(Error(p$1(421)));
    return tj(a, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e2._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a, b2, c2) {
  a.lanes |= b2;
  var d2 = a.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a.return, b2, c2);
}
function xj(a, b2, c2, d2, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a, b2, d2.children, c2);
  d2 = M.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b2.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c2, b2);
          else if (19 === a.tag)
            wj(a, c2, b2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  G(M, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a = c2.alternate, null !== a && null === Mh(a) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === Mh(a)) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a && b2.child !== a.child)
    throw Error(p$1(153));
  if (null !== b2.child) {
    a = b2.child;
    c2 = wh(a, a.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a.sibling; )
      a = a.sibling, c2 = c2.sibling = wh(a, a.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G(M, M.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a, b2, c2);
        G(M, M.current & 1);
        a = $i(a, b2, c2);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d2)
          return yj(a, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(M, M.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a, b2, c2);
  }
  return $i(a, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$1({}, e2, { value: void 0 });
        d2 = A$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a, b2) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function S(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else
    for (e2 = a.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d2;
  a.childLanes = c2;
  return b2;
}
function Fj(a, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b2);
      S(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode)
        Cj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p$1(166));
          S(b2);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D("cancel", d2);
              D("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D(lf[e2], d2);
              break;
            case "source":
              D("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d2
              );
              D("load", d2);
              break;
            case "details":
              D("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[Of] = b2;
          a[Pf] = d2;
          Aj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D(lf[e2], a);
                e2 = d2;
                break;
              case "source":
                D("error", a);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e2 = d2;
                break;
              case "details":
                D("toggle", a);
                e2 = d2;
                break;
              case "input":
                Za(a, d2);
                e2 = Ya(a, d2);
                D("invalid", a);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$1({}, d2, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d2);
                e2 = gb(a, d2);
                D("invalid", a);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a);
                db(a, d2, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode)
        Dj(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p$1(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S(b2);
      return null;
    case 13:
      E(M);
      d2 = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$1(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$1(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S(b2);
      return null;
    case 4:
      return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
    case 10:
      return Rg(b2.type._context), S(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S(b2), null;
    case 19:
      E(M);
      f2 = b2.memoizedState;
      if (null === f2)
        return S(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b2.child; null !== a; ) {
              g2 = Mh(a);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                G(M, M.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a = Mh(g2), null !== a) {
            if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I)
              return S(b2), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M.current, G(M, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$1(156, b2.tag));
}
function Jj(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E(M);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$1(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b2) {
  var c2 = a.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W(a, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W(a, b2, d2);
  }
}
var Oj = false;
function Pj(a, b2) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c2 = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; )
    if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
      a.return = b2, V = a;
    else
      for (; null !== V; ) {
        b2 = V;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$1(163));
            }
        } catch (F2) {
          W(b2, b2.return, F2);
        }
        a = b2.sibling;
        if (null !== a) {
          a.return = b2.return;
          V = a;
          break;
        }
        V = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a) === a) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c2 = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c2;
        break;
      default:
        a = c2;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Tj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Tj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2)
    a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a = a.child, null !== a))
    for (Wj(a, b2, c2), a = a.sibling; null !== a; )
      Wj(a, b2, c2), a = a.sibling;
}
function Xj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2)
    a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a))
    for (Xj(a, b2, c2), a = a.sibling; null !== a; )
      Xj(a, b2, c2), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a, b2, c2), c2 = c2.sibling;
}
function ak(a, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U || Mj(c2, b2);
    case 6:
      var d2 = X, e2 = Yj;
      X = null;
      Zj(a, b2, c2);
      X = d2;
      Yj = e2;
      null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
      break;
    case 4:
      d2 = X;
      e2 = Yj;
      X = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a, b2, c2);
      X = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a, b2, c2);
      break;
    case 1:
      if (!U && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W(c2, b2, h2);
        }
      Zj(a, b2, c2);
      break;
    case 21:
      Zj(a, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Zj(a, b2, c2), U = d2) : Zj(a, b2, c2);
      break;
    default:
      Zj(a, b2, c2);
  }
}
function bk(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X)
          throw Error(p$1(160));
        ak(f2, g2, e2);
        X = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a), b2 = b2.sibling;
}
function ek(a, b2) {
  var c2 = a.alternate, d2 = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a);
      fk(a);
      if (d2 & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a);
      fk(a);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a);
      fk(a);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a);
      fk(a);
      if (d2 & 4) {
        if (null === a.stateNode)
          throw Error(p$1(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a);
      fk(a);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b2, a);
      fk(a);
      break;
    case 13:
      dk(b2, a);
      fk(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
      d2 & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b2, a), U = l2) : dk(b2, a);
      fk(a);
      if (d2 & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a);
      fk(a);
      d2 & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$1(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a);
          Wj(a, h2, g2);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function ik(a, b2, c2) {
  V = a;
  jk(a);
}
function jk(a, b2, c2) {
  for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
        h2 = Kj;
        var l2 = U;
        Kj = g2;
        if ((U = k2) && !l2)
          for (V = e2; null !== V; )
            g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$1(163));
          }
        U || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, g2, k2);
          }
      }
    } catch (k2) {
      W(b2, b2.return, k2);
    }
    if (b2 === a) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$1(185));
  Ac(a, c2, d2);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a, Z)), Ek(a, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b2) {
  var c2 = a.callbackNode;
  wc(a, b2);
  var d2 = uc(a, a === R ? Z : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Hk(a, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$1(327));
  var c2 = a.callbackNode;
  if (Ik() && a.callbackNode !== c2)
    return null;
  var d2 = uc(a, a === R ? Z : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2)
    b2 = Jk(a, d2);
  else {
    b2 = d2;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b2)
      vk = null, Hj = B() + 500, Lk(a, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Ok(a, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
    if (6 === b2)
      Dk(a, d2);
    else {
      e2 = a.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Ok(a, f2))), 1 === b2))
        throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
      a.finishedWork = e2;
      a.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
            if (0 !== uc(a, 0))
              break;
            e2 = a.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c2 ? Hk.bind(null, a) : null;
}
function Ok(a, b2) {
  var c2 = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
  a = Jk(a, b2);
  2 !== a && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p$1(327));
  Ik();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1))
    return Ek(a, B()), null;
  var c2 = Jk(a, b2);
  if (0 !== a.tag && 2 === c2) {
    var d2 = xc(a);
    0 !== d2 && (b2 = d2, c2 = Ok(a, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a, 0), Dk(a, b2), Ek(a, B()), c2;
  if (6 === c2)
    throw Error(p$1(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a(b2);
  } finally {
    K = c2, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b2 = K;
  K |= 1;
  var c2 = pk.transition, d2 = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
  if (null !== Y)
    for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b2;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b2) {
  do {
    var c2 = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T = 1;
        qk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$1(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi(f2, k2, b2);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b2) {
  var c2 = K;
  K |= 2;
  var d2 = Kk();
  if (R !== a || Z !== b2)
    vk = null, Lk(a, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a, e2);
    }
  while (1);
  Qg();
  K = c2;
  nk.current = d2;
  if (null !== Y)
    throw Error(p$1(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b2 = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Tk(a) : Y = b2;
  ok.current = null;
}
function Tk(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (null !== b2);
  0 === T && (T = 5);
}
function Qk(a, b2, c2) {
  var d2 = C, e2 = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b2, c2, d2);
  } finally {
    pk.transition = e2, C = d2;
  }
  return null;
}
function Xk(a, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$1(327));
  c2 = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c2)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(p$1(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C;
    C = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a, c2);
    ek(c2, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c2;
    ik(c2);
    dc();
    K = h2;
    C = g2;
    pk.transition = f2;
  } else
    a.current = c2;
  wk && (wk = false, xk = a, yk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a, B());
  if (null !== b2)
    for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b2 = pk.transition, c2 = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d2 = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$1(331));
        var e2 = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V = g2;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V = u2;
          else
            b:
              for (g2 = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a, b2, 1);
  a = dh(a, b2, 1);
  b2 = L();
  null !== a && (Ac(a, 1, b2), Ek(a, b2));
}
function W(a, b2, c2) {
  if (3 === a.tag)
    Yk(a, a, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a = Ki(c2, a);
          a = Ri(b2, a, 1);
          b2 = dh(b2, a, 1);
          a = L();
          null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L();
  a.pingedLanes |= a.suspendedLanes & c2;
  R === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c2);
  Ek(a, b2);
}
function Zk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L();
  a = Zg(a, b2);
  null !== a && (Ac(a, b2, c2), Ek(a, c2));
}
function vj(a) {
  var b2 = a.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a, c2);
}
function ck(a, b2) {
  var c2 = 0;
  switch (a.tag) {
    case 13:
      var d2 = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a, c2);
}
var Wk;
Wk = function(a, b2, c2) {
  if (null !== a)
    if (a.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a, b2, c2);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a, b2);
      a = b2.pendingProps;
      var e2 = Yf(b2, H.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a, b2);
        a = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a = Lg(d2, a);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a), c2);
            break a;
        }
        throw Error(p$1(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a)
          throw Error(p$1(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p$1(423)), b2);
            b2 = mj(a, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p$1(424)), b2);
            b2 = mj(a, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a, b2, c2);
            break a;
          }
          Yi(a, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return pj(a, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d2, c2) : Yi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a, b2, d2, e2, c2);
    case 7:
      return Yi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$1(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a, b2, d2, e2, c2);
    case 15:
      return cj(a, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a, c2);
    case 19:
      return yj(a, b2, c2);
    case 22:
      return ej(a, b2, c2);
  }
  throw Error(p$1(156, b2.tag));
};
function Gk(a, b2) {
  return ac(a, b2);
}
function al(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c2, d2) {
  return new al(a, b2, c2, d2);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a.flags & 14680064;
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function yh(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a)
    bj(a) && (g2 = 1);
  else if ("string" === typeof a)
    g2 = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$1(130, null == a ? a : typeof a, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a, b2, c2, d2) {
  a = Bg(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function qj(a, b2, c2, d2) {
  a = Bg(22, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b2, c2) {
  a = Bg(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function zh(a, b2, c2) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function bl(a, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = new bl(a, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p$1(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$1(171));
  }
  if (1 === a.tag) {
    var c2 = a.type;
    if (Zf(c2))
      return bg(a, c2, b2);
  }
  return b2;
}
function fl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = cl(c2, d2, true, a, e2, f2, g2, h2, k2);
  a.context = el(null);
  c2 = a.current;
  d2 = L();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d2);
  Ek(a, d2);
  return a;
}
function gl(a, b2, c2, d2) {
  var e2 = b2.current, f2 = L(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a = dh(e2, b2, g2);
  null !== a && (mh(a, e2, g2, f2), eh(a, e2, g2));
  return g2;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a, b2) {
  il(a, b2);
  (a = a.alternate) && il(a, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$1(409));
  gl(a, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a);
    0 === c2 && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a2 = hl(g2);
        f2.call(a2);
      };
    }
    var g2 = fl(b2, d2, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g2;
    a[uf] = g2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g2;
  }
  for (; e2 = a.lastChild; )
    a.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a2 = hl(k2);
      h2.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = hl(g2);
        h2.call(a2);
      };
    }
    gl(b2, g2, a, e2);
  } else
    g2 = rl(c2, b2, a, e2, d2);
  return hl(g2);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a, 1);
        if (null !== b3) {
          var c3 = L();
          mh(b3, a, 1, c3);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = Zg(a, 134217728);
    if (null !== b2) {
      var c2 = L();
      mh(b2, a, 134217728, c2);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = lh(a), c2 = Zg(a, b2);
    if (null !== c2) {
      var d2 = L();
      mh(c2, a, b2, d2);
    }
    jl(a, b2);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b2) {
  var c2 = C;
  try {
    return C = a, b2();
  } finally {
    C = c2;
  }
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      bb(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p$1(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p$1(200));
  return dl(a, b2, null, c2);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!ol(a))
    throw Error(p$1(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a, 1, false, null, null, c2, false, d2, e2);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render)
      throw Error(p$1(188));
    a = Object.keys(a).join(",");
    throw Error(p$1(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!pl(b2))
    throw Error(p$1(200));
  return sl(null, a, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a, b2, c2) {
  if (!ol(a))
    throw Error(p$1(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a[uf] = b2.current;
  sf(a);
  if (d2)
    for (a = 0; a < d2.length; a++)
      c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!pl(b2))
    throw Error(p$1(200));
  return sl(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p$1(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p$1(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$1(38));
  return sl(a, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom$1.exports = reactDom_production_min;
}
var reactDom = reactDom$1.exports;
var _2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": reactDom
}, [reactDom$1.exports]);
var createRoot;
var m$1 = reactDom$1.exports;
{
  createRoot = m$1.createRoot;
  m$1.hydrateRoot;
}
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var __createBinding = Object.create ? function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  var desc = Object.getOwnPropertyDescriptor(m2, k2);
  if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m2[k2];
    } };
  }
  Object.defineProperty(o, k22, desc);
} : function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o[k22] = m2[k2];
};
function __exportStar(m2, o) {
  for (var p2 in m2)
    if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o, p2))
      __createBinding(o, m2, p2);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il2 = arguments.length; i < il2; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il2; i++)
    for (var a = arguments[i], j = 0, jl2 = a.length; j < jl2; j++, k2++)
      r2[k2] = a[j];
  return r2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n2) {
    if (g2[n2])
      i[n2] = function(v2) {
        return new Promise(function(a, b2) {
          q2.push([n2, v2, a, b2]) > 1 || resume(n2, v2);
        });
      };
  }
  function resume(n2, v2) {
    try {
      step(g2[n2](v2));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v2) {
    if (f2(v2), q2.shift(), q2.length)
      resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p2;
  return i = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n2, f2) {
    i[n2] = o[n2] ? function(v2) {
      return (p2 = !p2) ? { value: __await(o[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
    } : f2;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i;
  return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n2) {
    i[n2] = o[n2] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n2](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
var __setModuleDefault = Object.create ? function(o, v2) {
  Object.defineProperty(o, "default", { enumerable: true, value: v2 });
} : function(o, v2) {
  o["default"] = v2;
};
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding(result, mod, k2);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state2, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state2.get(receiver);
}
function __classPrivateFieldSet(receiver, state2, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state2.set(receiver, value), value;
}
function __classPrivateFieldIn(state2, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
}
var _0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __extends,
  get __assign() {
    return __assign;
  },
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
}, Symbol.toStringTag, { value: "Module" }));
(function() {
  function errMsg(errCode, msg) {
    return (msg || "") + " (SystemJS Error#" + errCode + " https://git.io/JvFET#" + errCode + ")";
  }
  var hasSymbol = typeof Symbol !== "undefined";
  var hasSelf = typeof self !== "undefined";
  var hasDocument = typeof document !== "undefined";
  var envGlobal = hasSelf ? self : global;
  var baseUrl;
  if (hasDocument) {
    var baseEl = document.querySelector("base[href]");
    if (baseEl)
      baseUrl = baseEl.href;
  }
  if (!baseUrl && typeof location !== "undefined") {
    baseUrl = location.href.split("#")[0].split("?")[0];
    var lastSepIndex = baseUrl.lastIndexOf("/");
    if (lastSepIndex !== -1)
      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
  }
  var backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl(relUrl, parentUrl) {
    if (relUrl.indexOf("\\") !== -1)
      relUrl = relUrl.replace(backslashRegEx, "/");
    if (relUrl[0] === "/" && relUrl[1] === "/") {
      return parentUrl.slice(0, parentUrl.indexOf(":") + 1) + relUrl;
    } else if (relUrl[0] === "." && (relUrl[1] === "/" || relUrl[1] === "." && (relUrl[2] === "/" || relUrl.length === 2 && (relUrl += "/")) || relUrl.length === 1 && (relUrl += "/")) || relUrl[0] === "/") {
      var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(":") + 1);
      var pathname;
      if (parentUrl[parentProtocol.length + 1] === "/") {
        if (parentProtocol !== "file:") {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf("/") + 1);
        } else {
          pathname = parentUrl.slice(8);
        }
      } else {
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === "/"));
      }
      if (relUrl[0] === "/")
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;
      var segmented = pathname.slice(0, pathname.lastIndexOf("/") + 1) + relUrl;
      var output = [];
      var segmentIndex = -1;
      for (var i = 0; i < segmented.length; i++) {
        if (segmentIndex !== -1) {
          if (segmented[i] === "/") {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        } else if (segmented[i] === ".") {
          if (segmented[i + 1] === "." && (segmented[i + 2] === "/" || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          } else if (segmented[i + 1] === "/" || i + 1 === segmented.length) {
            i += 1;
          } else {
            segmentIndex = i;
          }
        } else {
          segmentIndex = i;
        }
      }
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join("");
    }
  }
  function resolveUrl(relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(":") !== -1 ? relUrl : resolveIfNotPlainOrUrl("./" + relUrl, parentUrl));
  }
  function resolveAndComposePackages(packages, outPackages, baseUrl2, parentMap, parentUrl) {
    for (var p2 in packages) {
      var resolvedLhs = resolveIfNotPlainOrUrl(p2, baseUrl2) || p2;
      var rhs = packages[p2];
      if (typeof rhs !== "string")
        continue;
      var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl2) || rhs, parentUrl);
      if (!mapped) {
        targetWarning("W1", p2, rhs, "bare specifier did not resolve");
      } else
        outPackages[resolvedLhs] = mapped;
    }
  }
  function resolveAndComposeImportMap(json, baseUrl2, outMap) {
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl2, outMap, null);
    var u2;
    for (u2 in json.scopes || {}) {
      var resolvedScope = resolveUrl(u2, baseUrl2);
      resolveAndComposePackages(json.scopes[u2], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl2, outMap, resolvedScope);
    }
    for (u2 in json.depcache || {})
      outMap.depcache[resolveUrl(u2, baseUrl2)] = json.depcache[u2];
    for (u2 in json.integrity || {})
      outMap.integrity[resolveUrl(u2, baseUrl2)] = json.integrity[u2];
  }
  function getMatch(path, matchObj) {
    if (matchObj[path])
      return path;
    var sepIndex = path.length;
    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf("/", sepIndex - 1)) !== -1);
  }
  function applyPackages(id2, packages) {
    var pkgName = getMatch(id2, packages);
    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null)
        return;
      if (id2.length > pkgName.length && pkg[pkg.length - 1] !== "/") {
        targetWarning("W2", pkgName, pkg, "should have a trailing '/'");
      } else
        return pkg + id2.slice(pkgName.length);
    }
  }
  function targetWarning(code, match, target, msg) {
    console.warn(errMsg(code, "Package target " + msg + ", resolving target '" + target + "' for " + match));
  }
  function resolveImportMap(importMap2, resolvedOrPlain, parentUrl) {
    var scopes = importMap2.scopes;
    var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
    while (scopeUrl) {
      var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf("/")), scopes);
    }
    return applyPackages(resolvedOrPlain, importMap2.imports) || resolvedOrPlain.indexOf(":") !== -1 && resolvedOrPlain;
  }
  var toStringTag$1 = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : "@";
  function SystemJS() {
    this[REGISTRY] = {};
  }
  var systemJSPrototype = SystemJS.prototype;
  systemJSPrototype.import = function(id2, parentUrl) {
    var loader2 = this;
    return Promise.resolve(loader2.prepareImport()).then(function() {
      return loader2.resolve(id2, parentUrl);
    }).then(function(id22) {
      var load = getOrCreateLoad(loader2, id22);
      return load.C || topLevelLoad(loader2, load);
    });
  };
  systemJSPrototype.createContext = function(parentId) {
    var loader2 = this;
    return {
      url: parentId,
      resolve: function(id2, parentUrl) {
        return Promise.resolve(loader2.resolve(id2, parentUrl || parentId));
      }
    };
  };
  systemJSPrototype.onload = function() {
  };
  function loadToId(load) {
    return load.id;
  }
  function triggerOnload(loader2, load, err, isErrSource) {
    loader2.onload(err, load.id, load.d && load.d.map(loadToId), !!isErrSource);
    if (err)
      throw err;
  }
  var lastRegister;
  systemJSPrototype.register = function(deps, declare) {
    lastRegister = [deps, declare];
  };
  systemJSPrototype.getRegister = function() {
    var _lastRegister = lastRegister;
    lastRegister = void 0;
    return _lastRegister;
  };
  function getOrCreateLoad(loader2, id2, firstParentUrl) {
    var load = loader2[REGISTRY][id2];
    if (load)
      return load;
    var importerSetters = [];
    var ns = /* @__PURE__ */ Object.create(null);
    if (toStringTag$1)
      Object.defineProperty(ns, toStringTag$1, { value: "Module" });
    var instantiatePromise = Promise.resolve().then(function() {
      return loader2.instantiate(id2, firstParentUrl);
    }).then(function(registration) {
      if (!registration)
        throw Error(errMsg(2, "Module " + id2 + " did not instantiate"));
      function _export(name, value) {
        load.h = true;
        var changed = false;
        if (typeof name === "string") {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        } else {
          for (var p2 in name) {
            var value = name[p2];
            if (!(p2 in ns) || ns[p2] !== value) {
              ns[p2] = value;
              changed = true;
            }
          }
          if (name && name.__esModule) {
            ns.__esModule = name.__esModule;
          }
        }
        if (changed)
          for (var i = 0; i < importerSetters.length; i++) {
            var setter = importerSetters[i];
            if (setter)
              setter(ns);
          }
        return value;
      }
      var declared = registration[1](_export, registration[1].length === 2 ? {
        import: function(importId) {
          return loader2.import(importId, id2);
        },
        meta: loader2.createContext(id2)
      } : void 0);
      load.e = declared.execute || function() {
      };
      return [registration[0], declared.setters || []];
    }, function(err) {
      load.e = null;
      load.er = err;
      triggerOnload(loader2, load, err, true);
      throw err;
    });
    var linkPromise = instantiatePromise.then(function(instantiation) {
      return Promise.all(instantiation[0].map(function(dep, i) {
        var setter = instantiation[1][i];
        return Promise.resolve(loader2.resolve(dep, id2)).then(function(depId) {
          var depLoad = getOrCreateLoad(loader2, depId, id2);
          return Promise.resolve(depLoad.I).then(function() {
            if (setter) {
              depLoad.i.push(setter);
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        });
      })).then(function(depLoads) {
        load.d = depLoads;
      });
    });
    return load = loader2[REGISTRY][id2] = {
      id: id2,
      i: importerSetters,
      n: ns,
      I: instantiatePromise,
      L: linkPromise,
      h: false,
      d: void 0,
      e: void 0,
      er: void 0,
      E: void 0,
      C: void 0,
      p: void 0
    };
  }
  function instantiateAll(loader2, load, parent, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      return Promise.resolve(load.L).then(function() {
        if (!load.p || load.p.e === null)
          load.p = parent;
        return Promise.all(load.d.map(function(dep) {
          return instantiateAll(loader2, dep, parent, loaded);
        }));
      }).catch(function(err) {
        if (load.er)
          throw err;
        load.e = null;
        triggerOnload(loader2, load, err, false);
        throw err;
      });
    }
  }
  function topLevelLoad(loader2, load) {
    return load.C = instantiateAll(loader2, load, load, {}).then(function() {
      return postOrderExec(loader2, load, {});
    }).then(function() {
      return load.n;
    });
  }
  var nullContext = Object.freeze(/* @__PURE__ */ Object.create(null));
  function postOrderExec(loader2, load, seen) {
    if (seen[load.id])
      return;
    seen[load.id] = true;
    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }
    var depLoadPromises;
    load.d.forEach(function(depLoad) {
      try {
        var depLoadPromise = postOrderExec(loader2, depLoad, seen);
        if (depLoadPromise)
          (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
      } catch (err) {
        load.e = null;
        load.er = err;
        triggerOnload(loader2, load, err, false);
        throw err;
      }
    });
    if (depLoadPromises)
      return Promise.all(depLoadPromises).then(doExec);
    return doExec();
    function doExec() {
      try {
        var execPromise = load.e.call(nullContext);
        if (execPromise) {
          execPromise = execPromise.then(function() {
            load.C = load.n;
            load.E = null;
            if (true)
              triggerOnload(loader2, load, null, true);
          }, function(err) {
            load.er = err;
            load.E = null;
            if (true)
              triggerOnload(loader2, load, err, true);
            throw err;
          });
          return load.E = execPromise;
        }
        load.C = load.n;
        load.L = load.I = void 0;
      } catch (err) {
        load.er = err;
        throw err;
      } finally {
        load.e = null;
        triggerOnload(loader2, load, load.er, true);
      }
    }
  }
  envGlobal.System = new SystemJS();
  var importMapPromise = Promise.resolve();
  var importMap = { imports: {}, scopes: {}, depcache: {}, integrity: {} };
  var processFirst = hasDocument;
  systemJSPrototype.prepareImport = function(doProcessScripts) {
    if (processFirst || doProcessScripts) {
      processScripts();
      processFirst = false;
    }
    return importMapPromise;
  };
  if (hasDocument) {
    processScripts();
    window.addEventListener("DOMContentLoaded", processScripts);
  }
  function processScripts() {
    [].forEach.call(document.querySelectorAll("script"), function(script) {
      if (script.sp)
        return;
      if (script.type === "systemjs-module") {
        script.sp = true;
        if (!script.src)
          return;
        System.import(script.src.slice(0, 7) === "import:" ? script.src.slice(7) : resolveUrl(script.src, baseUrl)).catch(function(e2) {
          if (e2.message.indexOf("https://git.io/JvFET#3") > -1) {
            var event = document.createEvent("Event");
            event.initEvent("error", false, false);
            script.dispatchEvent(event);
          }
          return Promise.reject(e2);
        });
      } else if (script.type === "systemjs-importmap") {
        script.sp = true;
        var fetchPromise = script.src ? (System.fetch || fetch)(script.src, { integrity: script.integrity, passThrough: true }).then(function(res) {
          if (!res.ok)
            throw Error("Invalid status code: " + res.status);
          return res.text();
        }).catch(function(err) {
          err.message = errMsg("W4", "Error fetching systemjs-import map " + script.src) + "\n" + err.message;
          console.warn(err);
          if (typeof script.onerror === "function") {
            script.onerror();
          }
          return "{}";
        }) : script.innerHTML;
        importMapPromise = importMapPromise.then(function() {
          return fetchPromise;
        }).then(function(text) {
          extendImportMap(importMap, text, script.src || baseUrl);
        });
      }
    });
  }
  function extendImportMap(importMap2, newMapText, newMapUrl) {
    var newMap = {};
    try {
      newMap = JSON.parse(newMapText);
    } catch (err) {
      console.warn(Error(errMsg("W5", "systemjs-importmap contains invalid JSON") + "\n\n" + newMapText + "\n"));
    }
    resolveAndComposeImportMap(newMap, newMapUrl, importMap2);
  }
  if (hasDocument) {
    window.addEventListener("error", function(evt) {
      lastWindowErrorUrl = evt.filename;
      lastWindowError = evt.error;
    });
    var baseOrigin = location.origin;
  }
  systemJSPrototype.createScript = function(url) {
    var script = document.createElement("script");
    script.async = true;
    if (url.indexOf(baseOrigin + "/"))
      script.crossOrigin = "anonymous";
    var integrity = importMap.integrity[url];
    if (integrity)
      script.integrity = integrity;
    script.src = url;
    return script;
  };
  var lastAutoImportDeps, lastAutoImportTimeout;
  var autoImportCandidates = {};
  var systemRegister2 = systemJSPrototype.register;
  systemJSPrototype.register = function(deps, declare) {
    if (hasDocument && document.readyState === "loading" && typeof deps !== "string") {
      var scripts = document.querySelectorAll("script[src]");
      var lastScript = scripts[scripts.length - 1];
      if (lastScript) {
        lastAutoImportDeps = deps;
        var loader2 = this;
        lastAutoImportTimeout = setTimeout(function() {
          autoImportCandidates[lastScript.src] = [deps, declare];
          loader2.import(lastScript.src);
        });
      }
    } else {
      lastAutoImportDeps = void 0;
    }
    return systemRegister2.call(this, deps, declare);
  };
  var lastWindowErrorUrl, lastWindowError;
  systemJSPrototype.instantiate = function(url, firstParentUrl) {
    var autoImportRegistration = autoImportCandidates[url];
    if (autoImportRegistration) {
      delete autoImportCandidates[url];
      return autoImportRegistration;
    }
    var loader2 = this;
    return Promise.resolve(systemJSPrototype.createScript(url)).then(function(script) {
      return new Promise(function(resolve, reject) {
        script.addEventListener("error", function() {
          reject(Error(errMsg(3, "Error loading " + url + (firstParentUrl ? " from " + firstParentUrl : ""))));
        });
        script.addEventListener("load", function() {
          document.head.removeChild(script);
          if (lastWindowErrorUrl === url) {
            reject(lastWindowError);
          } else {
            var register = loader2.getRegister(url);
            if (register && register[0] === lastAutoImportDeps)
              clearTimeout(lastAutoImportTimeout);
            resolve(register);
          }
        });
        document.head.appendChild(script);
      });
    });
  };
  systemJSPrototype.shouldFetch = function() {
    return false;
  };
  if (typeof fetch !== "undefined")
    systemJSPrototype.fetch = fetch;
  var instantiate = systemJSPrototype.instantiate;
  var jsContentTypeRegEx = /^(text|application)\/(x-)?javascript(;|$)/;
  systemJSPrototype.instantiate = function(url, parent) {
    var loader2 = this;
    if (!this.shouldFetch(url))
      return instantiate.apply(this, arguments);
    return this.fetch(url, {
      credentials: "same-origin",
      integrity: importMap.integrity[url]
    }).then(function(res) {
      if (!res.ok)
        throw Error(errMsg(7, res.status + " " + res.statusText + ", loading " + url + (parent ? " from " + parent : "")));
      var contentType = res.headers.get("content-type");
      if (!contentType || !jsContentTypeRegEx.test(contentType))
        throw Error(errMsg(4, 'Unknown Content-Type "' + contentType + '", loading ' + url + (parent ? " from " + parent : "")));
      return res.text().then(function(source) {
        if (source.indexOf("//# sourceURL=") < 0)
          source += "\n//# sourceURL=" + url;
        (0, eval)(source);
        return loader2.getRegister(url);
      });
    });
  };
  systemJSPrototype.resolve = function(id2, parentUrl) {
    parentUrl = parentUrl || false || baseUrl;
    return resolveImportMap(importMap, resolveIfNotPlainOrUrl(id2, parentUrl) || id2, parentUrl) || throwUnresolved(id2, parentUrl);
  };
  function throwUnresolved(id2, parentUrl) {
    throw Error(errMsg(8, "Unable to resolve bare specifier '" + id2 + (parentUrl ? "' from " + parentUrl : "'")));
  }
  var systemInstantiate = systemJSPrototype.instantiate;
  systemJSPrototype.instantiate = function(url, firstParentUrl) {
    var preloads = importMap.depcache[url];
    if (preloads) {
      for (var i = 0; i < preloads.length; i++)
        getOrCreateLoad(this, this.resolve(preloads[i], url), url);
    }
    return systemInstantiate.call(this, url, firstParentUrl);
  };
  if (hasSelf && typeof importScripts === "function")
    systemJSPrototype.instantiate = function(url) {
      var loader2 = this;
      return Promise.resolve().then(function() {
        importScripts(url);
        return loader2.getRegister(url);
      });
    };
  (function(global2) {
    var systemJSPrototype2 = global2.System.constructor.prototype;
    var firstGlobalProp, secondGlobalProp, lastGlobalProp;
    function getGlobalProp(useFirstGlobalProp) {
      var cnt = 0;
      var foundLastProp, result;
      for (var p2 in global2) {
        if (shouldSkipProperty(p2))
          continue;
        if (cnt === 0 && p2 !== firstGlobalProp || cnt === 1 && p2 !== secondGlobalProp)
          return p2;
        if (foundLastProp) {
          lastGlobalProp = p2;
          result = useFirstGlobalProp && result || p2;
        } else {
          foundLastProp = p2 === lastGlobalProp;
        }
        cnt++;
      }
      return result;
    }
    function noteGlobalProps() {
      firstGlobalProp = secondGlobalProp = void 0;
      for (var p2 in global2) {
        if (shouldSkipProperty(p2))
          continue;
        if (!firstGlobalProp)
          firstGlobalProp = p2;
        else if (!secondGlobalProp)
          secondGlobalProp = p2;
        lastGlobalProp = p2;
      }
      return lastGlobalProp;
    }
    var impt = systemJSPrototype2.import;
    systemJSPrototype2.import = function(id2, parentUrl) {
      noteGlobalProps();
      return impt.call(this, id2, parentUrl);
    };
    var emptyInstantiation = [[], function() {
      return {};
    }];
    var getRegister = systemJSPrototype2.getRegister;
    systemJSPrototype2.getRegister = function() {
      var lastRegister2 = getRegister.call(this);
      if (lastRegister2)
        return lastRegister2;
      var globalProp = getGlobalProp(this.firstGlobalProp);
      if (!globalProp)
        return emptyInstantiation;
      var globalExport;
      try {
        globalExport = global2[globalProp];
      } catch (e2) {
        return emptyInstantiation;
      }
      return [[], function(_export) {
        return {
          execute: function() {
            _export(globalExport);
            _export({ default: globalExport, __useDefault: true });
          }
        };
      }];
    };
    var isIE11 = typeof navigator !== "undefined" && navigator.userAgent.indexOf("Trident") !== -1;
    function shouldSkipProperty(p2) {
      return !global2.hasOwnProperty(p2) || !isNaN(p2) && p2 < global2.length || isIE11 && global2[p2] && typeof window !== "undefined" && global2[p2].parent === window;
    }
  })(typeof self !== "undefined" ? self : global);
  (function(global2) {
    var systemJSPrototype2 = global2.System.constructor.prototype;
    var moduleTypesRegEx = /^[^#?]+\.(css|html|json|wasm)([?#].*)?$/;
    systemJSPrototype2.shouldFetch = function(url) {
      return moduleTypesRegEx.test(url);
    };
    var jsonContentType = /^application\/json(;|$)/;
    var cssContentType = /^text\/css(;|$)/;
    var wasmContentType = /^application\/wasm(;|$)/;
    var fetch2 = systemJSPrototype2.fetch;
    systemJSPrototype2.fetch = function(url, options) {
      return fetch2(url, options).then(function(res) {
        if (options.passThrough)
          return res;
        if (!res.ok)
          return res;
        var contentType = res.headers.get("content-type");
        if (jsonContentType.test(contentType))
          return res.json().then(function(json) {
            return new Response(new Blob([
              'System.register([],function(e){return{execute:function(){e("default",' + JSON.stringify(json) + ")}}})"
            ], {
              type: "application/javascript"
            }));
          });
        if (cssContentType.test(contentType))
          return res.text().then(function(source) {
            source = source.replace(/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g, function(match, quotes, relUrl1, relUrl2) {
              return "url(" + quotes + resolveUrl(relUrl1 || relUrl2, url) + quotes + ")";
            });
            return new Response(new Blob([
              "System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync(" + JSON.stringify(source) + ');e("default",s)}}})'
            ], {
              type: "application/javascript"
            }));
          });
        if (wasmContentType.test(contentType))
          return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(res) : res.arrayBuffer().then(WebAssembly.compile)).then(function(module) {
            if (!global2.System.wasmModules)
              global2.System.wasmModules = /* @__PURE__ */ Object.create(null);
            global2.System.wasmModules[url] = module;
            var deps = [];
            var setterSources = [];
            if (WebAssembly.Module.imports)
              WebAssembly.Module.imports(module).forEach(function(impt) {
                var key = JSON.stringify(impt.module);
                if (deps.indexOf(key) === -1) {
                  deps.push(key);
                  setterSources.push("function(m){i[" + key + "]=m}");
                }
              });
            return new Response(new Blob([
              "System.register([" + deps.join(",") + "],function(e){var i={};return{setters:[" + setterSources.join(",") + "],execute:function(){return WebAssembly.instantiate(System.wasmModules[" + JSON.stringify(url) + "],i).then(function(m){e(m.exports)})}}})"
            ], {
              type: "application/javascript"
            }));
          });
        return res;
      });
    };
  })(typeof self !== "undefined" ? self : global);
  var toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag;
  systemJSPrototype.get = function(id2) {
    var load = this[REGISTRY][id2];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };
  systemJSPrototype.set = function(id2, module) {
    {
      try {
        new URL(id2);
      } catch (err) {
        console.warn(Error(errMsg("W3", '"' + id2 + '" is not a valid URL to set in the module registry')));
      }
    }
    var ns;
    if (toStringTag && module[toStringTag] === "Module") {
      ns = module;
    } else {
      ns = Object.assign(/* @__PURE__ */ Object.create(null), module);
      if (toStringTag)
        Object.defineProperty(ns, toStringTag, { value: "Module" });
    }
    var done = Promise.resolve(ns);
    var load = this[REGISTRY][id2] || (this[REGISTRY][id2] = {
      id: id2,
      i: [],
      h: false,
      d: [],
      e: null,
      er: void 0,
      E: void 0
    });
    if (load.e || load.E)
      return false;
    Object.assign(load, {
      n: ns,
      I: void 0,
      L: void 0,
      C: done
    });
    return ns;
  };
  systemJSPrototype.has = function(id2) {
    var load = this[REGISTRY][id2];
    return !!load;
  };
  systemJSPrototype.delete = function(id2) {
    var registry = this[REGISTRY];
    var load = registry[id2];
    if (!load || load.p && load.p.e !== null || load.E)
      return false;
    var importerSetters = load.i;
    if (load.d)
      load.d.forEach(function(depLoad) {
        var importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    delete registry[id2];
    return function() {
      var load2 = registry[id2];
      if (!load2 || !importerSetters || load2.e !== null || load2.E)
        return false;
      importerSetters.forEach(function(setter) {
        load2.i.push(setter);
        setter(load2.n);
      });
      importerSetters = null;
    };
  };
  var iterator = typeof Symbol !== "undefined" && Symbol.iterator;
  systemJSPrototype.entries = function() {
    var loader2 = this, keys = Object.keys(loader2[REGISTRY]);
    var index = 0, ns, key;
    var result = {
      next: function() {
        while ((key = keys[index++]) !== void 0 && (ns = loader2.get(key)) === void 0)
          ;
        return {
          done: key === void 0,
          value: key !== void 0 && [key, ns]
        };
      }
    };
    result[iterator] = function() {
      return this;
    };
    return result;
  };
})();
(function() {
  (function(global2) {
    var System2 = global2.System;
    setRegisterRegistry(System2);
    var systemJSPrototype = System2.constructor.prototype;
    var constructor = System2.constructor;
    var SystemJS = function() {
      constructor.call(this);
      setRegisterRegistry(this);
    };
    SystemJS.prototype = systemJSPrototype;
    System2.constructor = SystemJS;
    var firstNamedDefine, firstName;
    function setRegisterRegistry(systemInstance) {
      systemInstance.registerRegistry = /* @__PURE__ */ Object.create(null);
      systemInstance.namedRegisterAliases = /* @__PURE__ */ Object.create(null);
    }
    var register = systemJSPrototype.register;
    systemJSPrototype.register = function(name, deps, declare) {
      if (typeof name !== "string")
        return register.apply(this, arguments);
      var define = [deps, declare];
      this.registerRegistry[name] = define;
      if (!firstNamedDefine) {
        firstNamedDefine = define;
        firstName = name;
      }
      Promise.resolve().then(function() {
        firstNamedDefine = null;
        firstName = null;
      });
      return register.apply(this, [deps, declare]);
    };
    var resolve = systemJSPrototype.resolve;
    systemJSPrototype.resolve = function(id2, parentURL) {
      try {
        return resolve.call(this, id2, parentURL);
      } catch (err) {
        if (id2 in this.registerRegistry) {
          return this.namedRegisterAliases[id2] || id2;
        }
        throw err;
      }
    };
    var instantiate = systemJSPrototype.instantiate;
    systemJSPrototype.instantiate = function(url, firstParentUrl) {
      var result = this.registerRegistry[url];
      if (result) {
        this.registerRegistry[url] = null;
        return result;
      } else {
        return instantiate.call(this, url, firstParentUrl);
      }
    };
    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function(url) {
      var register2 = getRegister.call(this, url);
      if (firstName && url) {
        this.namedRegisterAliases[firstName] = url;
      }
      var result = firstNamedDefine || register2;
      firstNamedDefine = null;
      firstName = null;
      return result;
    };
  })(typeof self !== "undefined" ? self : global);
})();
var semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
var acceptsAll = ["*", "x", ">=0"];
var operatorResMap = {
  ">": [1],
  ">=": [0, 1],
  "=": [0],
  "<=": [-1, 0],
  "<": [-1]
};
function indexOrEnd(str, q2) {
  return str.indexOf(q2) === -1 ? str.length : str.indexOf(q2);
}
function splitVersion(v2) {
  const c2 = v2.replace(/^v/, "").replace(/\+.*$/, "");
  const patchIndex = indexOrEnd(c2, "-");
  const arr = c2.substring(0, patchIndex).split(".");
  arr.push(c2.substring(patchIndex + 1));
  return arr;
}
function parseSegment(v2) {
  const n2 = parseInt(v2, 10);
  return isNaN(n2) ? v2 : n2;
}
function validateAndParse(v2) {
  const match = v2.match(semver);
  match.shift();
  return match;
}
function compareStrings(a, b2) {
  const ap = parseSegment(a);
  const bp = parseSegment(b2);
  if (ap > bp) {
    return 1;
  } else if (ap < bp) {
    return -1;
  } else {
    return 0;
  }
}
function compareSegments(a, b2) {
  for (let i = 0; i < 2; i++) {
    const r2 = compareStrings(a[i] || "0", b2[i] || "0");
    if (r2 !== 0) {
      return r2;
    }
  }
  return 0;
}
function compareVersions(v1, v2) {
  const s1 = splitVersion(v1);
  const s2 = splitVersion(v2);
  const len = Math.max(s1.length - 1, s2.length - 1);
  for (let i = 0; i < len; i++) {
    const n1 = parseInt(s1[i] || "0", 10);
    const n2 = parseInt(s2[i] || "0", 10);
    if (n1 > n2) {
      return 1;
    } else if (n2 > n1) {
      return -1;
    }
  }
  const sp1 = s1[s1.length - 1];
  const sp2 = s2[s2.length - 1];
  if (sp1 && sp2) {
    const p1 = sp1.split(".").map(parseSegment);
    const p2 = sp2.split(".").map(parseSegment);
    const len2 = Math.max(p1.length, p2.length);
    for (let i = 0; i < len2; i++) {
      if (p1[i] === void 0 || typeof p2[i] === "string" && typeof p1[i] === "number") {
        return -1;
      } else if (p2[i] === void 0 || typeof p1[i] === "string" && typeof p2[i] === "number") {
        return 1;
      } else if (p1[i] > p2[i]) {
        return 1;
      } else if (p2[i] > p1[i]) {
        return -1;
      }
    }
  } else if (sp1 || sp2) {
    return sp1 ? -1 : 1;
  }
  return 0;
}
function compare(v1, v2, operator) {
  const res = compareVersions(v1, v2);
  return operatorResMap[operator].indexOf(res) > -1;
}
function validate(version) {
  return acceptsAll.includes(version) || semver.test(version);
}
function satisfies(v2, r2) {
  if (!acceptsAll.includes(r2)) {
    const match = r2.match(/^([<>=~^]+)/);
    const op = match ? match[1] : "=";
    if (op !== "^" && op !== "~") {
      return compare(v2, r2, op);
    }
    const [v1, v22, v3] = validateAndParse(v2);
    const [m1, m2, m3] = validateAndParse(r2);
    if (compareStrings(v1, m1) !== 0) {
      return false;
    } else if (op === "^") {
      return compareSegments([v22, v3], [m2, m3]) >= 0;
    } else if (compareStrings(v22, m2) !== 0) {
      return false;
    }
    return compareStrings(v3, m3) >= 0;
  }
  return true;
}
var systemResolve = System.constructor.prototype.resolve;
var systemRegister = System.constructor.prototype.register;
function getLoadedVersions(prefix2) {
  return [...System.entries()].filter(([name]) => name.startsWith(prefix2)).map(([name]) => name.substring(prefix2.length));
}
function findMatchingPackage(id2) {
  const sep = id2.indexOf("@", 1);
  if (sep > 1) {
    const available = Object.keys(System.registerRegistry);
    const name = id2.substring(0, sep + 1);
    const versionSpec = id2.substring(sep + 1);
    if (validate(versionSpec)) {
      const loadedVersions = getLoadedVersions(name);
      const allVersions = available.filter((m2) => m2.startsWith(name)).map((m2) => m2.substring(name.length));
      const availableVersions = [...loadedVersions, ...allVersions.filter((m2) => !loadedVersions.includes(m2))];
      for (const availableVersion of availableVersions) {
        if (validate(availableVersion) && satisfies(availableVersion, versionSpec)) {
          return name + availableVersion;
        }
      }
    }
  }
  return void 0;
}
function isPrimitiveExport(content) {
  const type = typeof content;
  return type === "number" || type === "boolean" || type === "symbol" || type === "string" || type === "bigint" || Array.isArray(content);
}
System.constructor.prototype.resolve = function(id2, parentUrl) {
  try {
    return systemResolve.call(this, id2, parentUrl);
  } catch (ex) {
    const result = findMatchingPackage(id2);
    if (!result) {
      throw ex;
    }
    return result;
  }
};
System.constructor.prototype.register = function(...args) {
  const getContent = args.pop();
  args.push((_export, ctx) => {
    const exp = (...p2) => {
      if (p2.length === 1) {
        const content = p2[0];
        if (content instanceof Promise) {
          return content.then(exp);
        } else if (typeof content === "function") {
          _export("__esModule", true);
          Object.keys(content).forEach((prop) => {
            _export(prop, content[prop]);
          });
          _export("default", content);
        } else if (isPrimitiveExport(content)) {
          _export("__esModule", true);
          _export("default", content);
        } else if (content) {
          _export(content);
          if (typeof content === "object" && !("default" in content)) {
            _export("default", content);
          }
        }
      } else {
        _export(...p2);
      }
    };
    return getContent(exp, ctx);
  });
  return systemRegister.apply(this, args);
};
function tryResolve(name, parent) {
  try {
    return System.resolve(name, parent);
  } catch (e2) {
    return void 0;
  }
}
function registerDependencies(modules) {
  const moduleNames = Object.keys(modules);
  moduleNames.forEach((name) => registerModule(name, () => modules[name]));
  return Promise.all(moduleNames.map((name) => System.import(name)));
}
function registerModule(name, resolve) {
  System.register(name, [], (_exports) => ({
    execute() {
      const content = resolve();
      if (content instanceof Promise) {
        return content.then(_exports);
      } else {
        _exports(content);
      }
    }
  }));
}
function unregisterModules(baseUrl, dependencies) {
  [...System.entries()].map(([name]) => name).filter((name) => name.startsWith(baseUrl) && !dependencies.includes(name)).forEach((name) => System.delete(name));
}
function requireModule(name, parent) {
  const moduleId = tryResolve(name, parent);
  const dependency = moduleId && System.get(moduleId);
  if (!dependency) {
    const error = new Error(`Cannot find module '${name}'`);
    error.code = "MODULE_NOT_FOUND";
    throw error;
  }
  return dependency;
}
function isfunc(f2) {
  return typeof f2 === "function";
}
function callfunc(f2, ...args) {
  isfunc(f2) && f2(...args);
}
function promisify(value) {
  return Promise.resolve(value);
}
function getBasePath(link) {
  if (link) {
    const idx = link.lastIndexOf("/");
    return link.substring(0, idx + 1);
  }
  return link;
}
const emptyApp = {
  setup() {
  }
};
function createEvaluatedPilet(meta, mod) {
  const basePath = getBasePath(meta.link);
  const app = checkPiletApp(meta.name, mod);
  return Object.assign(Object.assign(Object.assign({}, meta), app), { basePath });
}
function checkCreateApi(createApi) {
  if (!isfunc(createApi)) {
    console.warn("Invalid `createApi` function. Skipping pilet installation.");
    return false;
  }
  return true;
}
function checkPiletApp(name, app) {
  if (!app) {
    console.error("Invalid module found.", name);
  } else if (typeof app.setup !== "function") {
    console.warn("Setup function is missing.", name);
  } else {
    return app;
  }
  return emptyApp;
}
function includeScript(depName, link, integrity, crossOrigin) {
  window[depName] = (moduleId) => requireModule(moduleId, link);
  return includeScriptDependency(link, integrity, crossOrigin).then((s) => s.app);
}
function includeScriptDependency(link, integrity, crossOrigin) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.async = true;
    s.src = link;
    if (integrity) {
      s.crossOrigin = crossOrigin || "anonymous";
      s.integrity = integrity;
    } else if (crossOrigin) {
      s.crossOrigin = crossOrigin;
    }
    s.onload = () => resolve(s);
    s.onerror = (e2) => reject(e2);
    document.body.appendChild(s);
  });
}
const depContext = {};
function loadSharedDependencies(dependencies) {
  if (dependencies) {
    const names = Object.keys(dependencies);
    return Promise.all(names.map((name) => {
      return depContext[name] || (depContext[name] = includeScriptDependency(dependencies[name]));
    }));
  }
  return promisify();
}
function handleFailure$1(error, name) {
  console.error("Failed to load pilet", name, error);
  return emptyApp;
}
function loadFrom(meta, loadPilet) {
  return loadSharedDependencies(meta.dependencies).then(loadPilet).catch((error) => handleFailure$1(error, meta.name)).then((app) => createEvaluatedPilet(meta, app));
}
const evtName = "unload-pilet";
function runCleanup(app, api, hooks) {
  const css = document.querySelector(`link[data-origin=${JSON.stringify(app.name)}]`);
  const url = app.basePath;
  css === null || css === void 0 ? void 0 : css.remove();
  callfunc(app.teardown, api);
  callfunc(hooks.cleanupPilet, app);
  if ("requireRef" in app) {
    const depName = app.requireRef;
    delete window[depName];
  }
  if (url) {
    const dependencies = Object.keys(app.dependencies || {}).map((m2) => app.dependencies[m2]);
    unregisterModules(url, dependencies);
  }
}
function prepareCleanup(app, api, hooks) {
  const handler = (e2) => {
    if (e2.name === app.name) {
      api.off(evtName, handler);
      runCleanup(app, api, hooks);
    }
  };
  api.on(evtName, handler);
}
function logError(name, e2) {
  console.error(`Error while setting up ${name}.`, e2);
}
function withCatch(result, name) {
  if (result instanceof Promise) {
    return result.catch((e2) => logError(name, e2));
  }
  return promisify(result);
}
function setupSinglePilet(app, apiFactory, hooks) {
  const name = app === null || app === void 0 ? void 0 : app.name;
  try {
    const api = apiFactory(app);
    callfunc(hooks.setupPilet, app);
    const result = app.setup(api);
    prepareCleanup(app, api, hooks);
    return withCatch(result, name);
  } catch (e2) {
    logError(name, e2);
  }
  return promisify();
}
function setupPiletBundle(app, apiFactory, hooks) {
  const name = (app === null || app === void 0 ? void 0 : app.name) || "pilet bundle";
  try {
    callfunc(hooks.setupPilet, app);
    const result = app.setup(apiFactory);
    return withCatch(result, name);
  } catch (e2) {
    logError(name, e2);
  }
  return promisify();
}
function inspectPilet(meta) {
  const inBrowser = typeof document !== "undefined";
  if (inBrowser && "link" in meta && meta.spec === "v2") {
    return ["v2", meta, setupSinglePilet];
  } else if (inBrowser && "requireRef" in meta && meta.spec !== "v2") {
    return ["v1", meta, setupSinglePilet];
  } else if (inBrowser && "bundle" in meta && meta.bundle) {
    return ["bundle", meta, setupPiletBundle];
  } else if ("hash" in meta) {
    return ["v0", meta, setupSinglePilet];
  } else {
    return ["unknown", meta, setupSinglePilet];
  }
}
function runPilets(createApi, pilets, hooks = {}) {
  const promises = [];
  if (Array.isArray(pilets)) {
    for (const pilet of pilets) {
      const [, , setupPilet] = inspectPilet(pilet);
      const wait = setupPilet(pilet, createApi, hooks);
      promises.push(wait);
    }
  }
  return Promise.all(promises).then(() => pilets);
}
function runPilet(createApi, pilet, hooks = {}) {
  const [, , setupPilet] = inspectPilet(pilet);
  const wait = setupPilet(pilet, createApi, hooks);
  return wait.then(() => pilet);
}
function initializeApi(target, events) {
  return {
    on: events.on,
    off: events.off,
    emit: events.emit,
    meta: __assign({}, target)
  };
}
function mergeApis(api, extenders, target) {
  const frags = extenders.map((extender) => extender(api, target));
  __assign(api, ...frags);
  return api;
}
function checkFetchPilets(fetchPilets) {
  if (!isfunc(fetchPilets)) {
    console.error("Could not get the pilets. Provide a valid `fetchPilets` function.");
    return false;
  }
  return true;
}
function loadMetadata(fetchPilets) {
  if (checkFetchPilets(fetchPilets)) {
    return fetchPilets().then((pilets) => {
      if (!Array.isArray(pilets)) {
        throw new Error("The fetched pilets metadata is not an array.");
      }
      return pilets.map((meta) => Object.assign({}, meta));
    });
  }
  return promisify([]);
}
function loadPilets(fetchPilets, loadPilet) {
  return loadMetadata(fetchPilets).then((pilets) => Promise.all(pilets.map(loadPilet)));
}
function includeBundle(meta, crossOrigin) {
  return includeScript(meta.bundle, meta.link, meta.integrity, crossOrigin);
}
function loader$4(entry, config) {
  const { dependencies = {}, spec = "v1", name = `[bundle] ${entry.link}` } = entry, rest = __rest(entry, ["dependencies", "spec", "name"]);
  const meta = Object.assign({
    name,
    version: "",
    config: {},
    spec,
    dependencies
  }, rest);
  return loadFrom(meta, () => includeBundle(entry, config.crossOrigin));
}
function loader$3(entry, _config) {
  const { name, spec = "vx", dependencies = {} } = entry, rest = __rest(entry, ["name", "spec", "dependencies"]);
  const meta = Object.assign({
    name,
    version: "",
    spec,
    dependencies,
    config: {},
    link: "",
    basePath: ""
  }, rest);
  console.warn("Empty pilet found!", name);
  return promisify(Object.assign(Object.assign({}, meta), emptyApp));
}
function fetchDependency(url) {
  return fetch(url, {
    method: "GET",
    cache: "force-cache"
  }).then((m2) => m2.text());
}
function evalDependency(name, content, link = "") {
  const mod = {
    exports: {}
  };
  try {
    const sourceUrl = link && `
//# sourceURL=${link}`;
    const importer = new Function("module", "exports", "require", content + sourceUrl);
    const parent = link || name;
    const require = (moduleId) => requireModule(moduleId, parent);
    importer(mod, mod.exports, require);
  } catch (e2) {
    console.error(`Error while evaluating ${name}.`, e2);
  }
  return mod.exports;
}
function loader$2(entry, _config) {
  const { name, config = {}, dependencies = {}, spec = "v0" } = entry;
  const meta = Object.assign({
    name,
    config,
    dependencies,
    spec,
    link: ""
  }, entry);
  if ("link" in entry && entry.link) {
    return loadFrom(meta, () => fetchDependency(entry.link).then((content) => evalDependency(name, content, entry.link)));
  } else {
    const content = "content" in entry && entry.content || "";
    return loadFrom(meta, () => evalDependency(name, content, void 0));
  }
}
function includeDependency(entry, crossOrigin) {
  return includeScript(entry.requireRef, entry.link, entry.integrity, crossOrigin);
}
function loader$1(entry, config) {
  const { dependencies = {}, spec = "v1" } = entry, rest = __rest(entry, ["dependencies", "spec"]);
  const meta = Object.assign({ dependencies, config: {}, spec }, rest);
  return loadFrom(meta, () => includeDependency(entry, config.crossOrigin));
}
function extendSharedDependencies(dependencies) {
  for (const name of Object.keys(dependencies)) {
    if (!System.has(name)) {
      const dependency = dependencies[name];
      registerModule(name, () => System.import(dependency));
    }
  }
}
function handleFailure(error, link) {
  console.error("Failed to load SystemJS module", link, error);
  return emptyApp;
}
function loader(entry, _config) {
  const { dependencies = {}, config = {}, link } = entry, rest = __rest(entry, ["dependencies", "config", "link"]);
  const meta = Object.assign({
    dependencies,
    config,
    link
  }, rest);
  extendSharedDependencies(dependencies);
  return System.import(link).catch((error) => handleFailure(error, link)).then((app) => createEvaluatedPilet(meta, app));
}
function extendLoader(fallback, specLoaders) {
  if (typeof specLoaders === "object" && specLoaders) {
    return (meta) => {
      if (typeof meta.spec === "string") {
        const loaderOverride = specLoaders[meta.spec];
        if (isfunc(loaderOverride)) {
          return loaderOverride(meta);
        }
      }
      return fallback(meta);
    };
  }
  return fallback;
}
function getDefaultLoader(config = {}) {
  return (result) => {
    const r2 = inspectPilet(result);
    switch (r2[0]) {
      case "v2":
        return loader(r2[1]);
      case "v1":
        return loader$1(r2[1], config);
      case "v0":
        return loader$2(r2[1]);
      case "bundle":
        return loader$4(r2[1], config);
      default:
        return loader$3(r2[1]);
    }
  };
}
function runAll(createApi, existingPilets, additionalPilets, hooks) {
  if (!Array.isArray(existingPilets)) {
    return Promise.reject(`The existing pilets must be passed as an array.`);
  }
  if (!checkCreateApi(createApi)) {
    return Promise.resolve([]);
  }
  try {
    for (const existing of existingPilets) {
      const { name } = existing;
      const [newPilet] = additionalPilets.filter((pilet) => pilet.name === name);
      if (newPilet) {
        additionalPilets.splice(additionalPilets.indexOf(newPilet), 1);
      }
    }
    const pilets = [...existingPilets, ...additionalPilets];
    return runPilets(createApi, pilets, hooks);
  } catch (err) {
    return Promise.reject(err);
  }
}
function createProgressiveStrategy(async) {
  return (options, cb2) => {
    const { fetchPilets, dependencies = {}, createApi, config, pilets = [], loadPilet = getDefaultLoader(config), loaders, hooks } = options;
    const loadingAll = loadMetadata(fetchPilets);
    const loadSingle = extendLoader(loadPilet, loaders);
    return registerDependencies(dependencies).then(() => {
      if (!checkCreateApi(createApi)) {
        cb2(void 0, []);
        return Promise.resolve();
      }
      return runPilets(createApi, pilets, hooks).then((integratedPilets) => {
        if (async && integratedPilets.length > 0) {
          cb2(void 0, [...integratedPilets]);
        }
        const followUp = loadingAll.then((metadata) => {
          const promises = metadata.map((m2) => loadSingle(m2).then((app) => {
            const available = pilets.filter((m3) => m3.name === app.name).length === 0;
            if (available) {
              return runPilet(createApi, app, hooks).then((additionalPilet) => {
                integratedPilets.push(additionalPilet);
                if (async) {
                  cb2(void 0, [...integratedPilets]);
                }
              });
            }
          }));
          return Promise.all(promises).then(() => {
            if (!async) {
              cb2(void 0, integratedPilets);
            }
          });
        });
        return async ? loadingAll.then() : followUp.then();
      });
    });
  };
}
function blazingStrategy(options, cb2) {
  const strategy = createProgressiveStrategy(true);
  return strategy(options, cb2);
}
function standardStrategy(options, cb2) {
  const { fetchPilets, dependencies = {}, createApi, config, pilets = [], loadPilet = getDefaultLoader(config), loaders, hooks } = options;
  const loadSingle = extendLoader(loadPilet, loaders);
  return registerDependencies(dependencies).then(() => loadPilets(fetchPilets, loadSingle)).then((additionalPilets) => runAll(createApi, pilets, additionalPilets, hooks)).then((integratedPilets) => cb2(void 0, integratedPilets)).catch((error) => cb2(error, []));
}
function startLoadingPilets(options) {
  const state2 = {
    loaded: false,
    pilets: [],
    error: void 0
  };
  const notifiers = [];
  const call = (notifier) => notifier(state2.error, state2.pilets, state2.loaded);
  const notify = () => notifiers.forEach(call);
  const setPilets = (error, pilets) => {
    state2.error = error;
    state2.pilets = pilets;
    notify();
  };
  const setLoaded = () => {
    state2.loaded = true;
    notify();
  };
  const { strategy = standardStrategy } = options;
  strategy(options, setPilets).then(setLoaded, setLoaded);
  return {
    connect(notifier) {
      if (isfunc(notifier)) {
        notifiers.push(notifier);
        call(notifier);
      }
    },
    disconnect(notifier) {
      const index = notifiers.indexOf(notifier);
      index !== -1 && notifiers.splice(index, 1);
    }
  };
}
function nameOf(type) {
  return `piral-${type}`;
}
function createListener(state2 = {}) {
  const eventListeners = [];
  return {
    on(type, callback) {
      const listener = ({ detail }) => detail && detail.state === state2 && callback(detail.arg);
      document.body.addEventListener(nameOf(type), listener);
      eventListeners.push([callback, listener]);
      return this;
    },
    off(type, callback) {
      const [listener] = eventListeners.filter((m2) => m2[0] === callback);
      if (listener) {
        document.body.removeEventListener(nameOf(type), listener[1]);
        eventListeners.splice(eventListeners.indexOf(listener), 1);
      }
      return this;
    },
    emit(type, arg) {
      const ce2 = document.createEvent("CustomEvent");
      ce2.initCustomEvent(nameOf(type), false, false, {
        arg,
        state: state2
      });
      document.body.dispatchEvent(ce2);
      return this;
    }
  };
}
const StateContext = react.exports.createContext(void 0);
function useGlobalStateContext() {
  return react.exports.useContext(StateContext);
}
function useGlobalState(select) {
  const { state: useState } = useGlobalStateContext();
  return useState(select);
}
function useAction(action) {
  const ctx = useGlobalStateContext();
  return ctx[action];
}
const removeIndicator = null;
const none = [];
const noop$2 = () => {
};
function prependItem(items, item) {
  return [item, ...items || none];
}
function appendItem(items, item) {
  return [...items || none, item];
}
function excludeItem(items, item) {
  return (items || none).filter((m2) => m2 !== item);
}
function includeItem(items, item) {
  return appendItem(excludeItem(items, item), item);
}
function replaceOrAddItem(items, item, predicate) {
  const newItems = [...items || none];
  for (let i = 0; i < newItems.length; i++) {
    if (predicate(newItems[i])) {
      newItems[i] = item;
      return newItems;
    }
  }
  newItems.push(item);
  return newItems;
}
function removeNested(obj, predicate) {
  return Object.keys(obj).reduce((entries, key) => {
    const item = obj[key];
    entries[key] = Object.keys(item).reduce((all, key2) => {
      const value = item[key2];
      if (Array.isArray(value)) {
        all[key2] = excludeOn(value, predicate);
      } else if (!value || !predicate(value)) {
        all[key2] = value;
      }
      return all;
    }, {});
    return entries;
  }, {});
}
function excludeOn(items, predicate) {
  return (items || none).filter((m2) => !predicate(m2));
}
function updateKey(obj, key, value) {
  return value === removeIndicator ? withoutKey(obj, key) : withKey(obj, key, value);
}
function withKey(obj, key, value) {
  return Object.assign(Object.assign({}, obj), { [key]: value });
}
function withoutKey(obj, key) {
  const _a = obj || {}, _b = key;
  _a[_b];
  const newObj = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
  return newObj;
}
function tryParseJson(content) {
  try {
    return JSON.parse(content);
  } catch (_a) {
    return {};
  }
}
const defaultLayouts = ["desktop", "tablet", "mobile"];
const defaultBreakpoints = ["(min-width: 991px)", "(min-width: 481px)", "(max-width: 480px)"];
const mm = typeof window === "undefined" || !isfunc(window.matchMedia) ? () => ({ matches: void 0 }) : (q2) => window.matchMedia(q2);
function getCurrentLayout(breakpoints = defaultBreakpoints, layouts, defaultLayout) {
  const query = breakpoints.findIndex((q2) => mm(q2).matches);
  const layout2 = layouts[query];
  return layout2 !== void 0 ? layout2 : defaultLayout;
}
function useMedia(queries, values, defaultValue) {
  const match = () => getCurrentLayout(queries, values, defaultValue);
  const [value, update] = react.exports.useState(match);
  react.exports.useEffect(() => {
    if (typeof document !== "undefined") {
      const handler = () => update(match);
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }
  }, none);
  return value;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location2, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function isAbsolute(pathname) {
  return pathname.charAt(0) === "/";
}
function spliceOne(list, index) {
  for (var i = index, k2 = i + 1, n2 = list.length; k2 < n2; i += 1, k2 += 1) {
    list[i] = list[k2];
  }
  list.pop();
}
function resolvePathname(to, from) {
  if (from === void 0)
    from = "";
  var toParts = to && to.split("/") || [];
  var fromParts = from && from.split("/") || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;
  if (to && isAbsolute(to)) {
    fromParts = toParts;
  } else if (toParts.length) {
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }
  if (!fromParts.length)
    return "/";
  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === "." || last === ".." || last === "";
  } else {
    hasTrailingSlash = false;
  }
  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];
    if (part === ".") {
      spliceOne(fromParts, i);
    } else if (part === "..") {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }
  if (!mustEndAbs)
    for (; up--; up)
      fromParts.unshift("..");
  if (mustEndAbs && fromParts[0] !== "" && (!fromParts[0] || !isAbsolute(fromParts[0])))
    fromParts.unshift("");
  var result = fromParts.join("/");
  if (hasTrailingSlash && result.substr(-1) !== "/")
    result += "/";
  return result;
}
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}
function valueEqual(a, b2) {
  if (a === b2)
    return true;
  if (a == null || b2 == null)
    return false;
  if (Array.isArray(a)) {
    return Array.isArray(b2) && a.length === b2.length && a.every(function(item, index) {
      return valueEqual(item, b2[index]);
    });
  }
  if (typeof a === "object" || typeof b2 === "object") {
    var aValue = valueOf(a);
    var bValue = valueOf(b2);
    if (aValue !== a || bValue !== b2)
      return valueEqual(aValue, bValue);
    return Object.keys(Object.assign({}, a, b2)).every(function(key) {
      return valueEqual(a[key], b2[key]);
    });
  }
  return false;
}
var isProduction = true;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}
function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
function hasBasename(path, prefix2) {
  return path.toLowerCase().indexOf(prefix2.toLowerCase()) === 0 && "/?#".indexOf(path.charAt(prefix2.length)) !== -1;
}
function stripBasename$1(path, prefix2) {
  return hasBasename(path, prefix2) ? path.substr(prefix2.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}
function createPath(location2) {
  var pathname = location2.pathname, search = location2.search, hash = location2.hash;
  var path = pathname || "/";
  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    path += hash.charAt(0) === "#" ? hash : "#" + hash;
  return path;
}
function createLocation(path, state2, key, currentLocation) {
  var location2;
  if (typeof path === "string") {
    location2 = parsePath(path);
    location2.state = state2;
  } else {
    location2 = _extends({}, path);
    if (location2.pathname === void 0)
      location2.pathname = "";
    if (location2.search) {
      if (location2.search.charAt(0) !== "?")
        location2.search = "?" + location2.search;
    } else {
      location2.search = "";
    }
    if (location2.hash) {
      if (location2.hash.charAt(0) !== "#")
        location2.hash = "#" + location2.hash;
    } else {
      location2.hash = "";
    }
    if (state2 !== void 0 && location2.state === void 0)
      location2.state = state2;
  }
  try {
    location2.pathname = decodeURI(location2.pathname);
  } catch (e2) {
    if (e2 instanceof URIError) {
      throw new URIError('Pathname "' + location2.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e2;
    }
  }
  if (key)
    location2.key = key;
  if (currentLocation) {
    if (!location2.pathname) {
      location2.pathname = currentLocation.pathname;
    } else if (location2.pathname.charAt(0) !== "/") {
      location2.pathname = resolvePathname(location2.pathname, currentLocation.pathname);
    }
  } else {
    if (!location2.pathname) {
      location2.pathname = "/";
    }
  }
  return location2;
}
function locationsAreEqual(a, b2) {
  return a.pathname === b2.pathname && a.search === b2.search && a.hash === b2.hash && a.key === b2.key && valueEqual(a.state, b2.state);
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function() {
      if (prompt === nextPrompt)
        prompt = null;
    };
  }
  function confirmTransitionTo(location2, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location2, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners2 = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners2.push(listener);
    return function() {
      isActive = false;
      listeners2 = listeners2.filter(function(item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners2.forEach(function(listener) {
      return listener.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners
  };
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message));
}
function supportsHistory() {
  var ua2 = window.navigator.userAgent;
  if ((ua2.indexOf("Android 2.") !== -1 || ua2.indexOf("Android 4.0") !== -1) && ua2.indexOf("Mobile Safari") !== -1 && ua2.indexOf("Chrome") === -1 && ua2.indexOf("Windows Phone") === -1)
    return false;
  return window.history && "pushState" in window.history;
}
function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function isExtraneousPopstateEvent(event) {
  return event.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var PopStateEvent = "popstate";
var HashChangeEvent = "hashchange";
function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e2) {
    return {};
  }
}
function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref = historyState || {}, key = _ref.key, state2 = _ref.state;
    var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var path = pathname + search + hash;
    if (basename)
      path = stripBasename$1(path, basename);
    return createLocation(path, state2, key);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var transitionManager = createTransitionManager();
  function setState2(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function handlePopState(event) {
    if (isExtraneousPopstateEvent(event))
      return;
    handlePop(getDOMLocation(event.state));
  }
  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }
  var forceNextPop = false;
  function handlePop(location2) {
    if (forceNextPop) {
      forceNextPop = false;
      setState2();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState2({
            action,
            location: location2
          });
        } else {
          revertPop(location2);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];
  function createHref(location2) {
    return basename + createPath(location2);
  }
  function push(path, state2) {
    var action = "PUSH";
    var location2 = createLocation(path, state2, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location2);
      var key = location2.key, state3 = location2.state;
      if (canUseHistory) {
        globalHistory.pushState({
          key,
          state: state3
        }, null, href);
        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location2.key);
          allKeys = nextKeys;
          setState2({
            action,
            location: location2
          });
        }
      } else {
        window.location.href = href;
      }
    });
  }
  function replace(path, state2) {
    var action = "REPLACE";
    var location2 = createLocation(path, state2, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location2);
      var key = location2.key, state3 = location2.state;
      if (canUseHistory) {
        globalHistory.replaceState({
          key,
          state: state3
        }, null, href);
        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1)
            allKeys[prevIndex] = location2.key;
          setState2({
            action,
            location: location2
          });
        }
      } else {
        window.location.replace(href);
      }
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
var HashChangeEvent$1 = "hashchange";
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === "!" ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash$1
  },
  slash: {
    encodePath: addLeadingSlash$1,
    decodePath: addLeadingSlash$1
  }
};
function stripHash(url) {
  var hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}
function getHashPath() {
  var href = window.location.href;
  var hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}
function pushHashPath(path) {
  window.location.hash = path;
}
function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + "#" + path);
}
function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  supportsGoWithoutReloadUsingHash();
  var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    if (basename)
      path2 = stripBasename$1(path2, basename);
    return createLocation(path2);
  }
  var transitionManager = createTransitionManager();
  function setState2(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  var forceNextPop = false;
  var ignorePath = null;
  function locationsAreEqual$$1(a, b2) {
    return a.pathname === b2.pathname && a.search === b2.search && a.hash === b2.hash;
  }
  function handleHashChange() {
    var path2 = getHashPath();
    var encodedPath2 = encodePath2(path2);
    if (path2 !== encodedPath2) {
      replaceHashPath(encodedPath2);
    } else {
      var location2 = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location2))
        return;
      if (ignorePath === createPath(location2))
        return;
      ignorePath = null;
      handlePop(location2);
    }
  }
  function handlePop(location2) {
    if (forceNextPop) {
      forceNextPop = false;
      setState2();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState2({
            action,
            location: location2
          });
        } else {
          revertPop(location2);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var path = getHashPath();
  var encodedPath = encodePath2(path);
  if (path !== encodedPath)
    replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];
  function createHref(location2) {
    var baseTag = document.querySelector("base");
    var href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath2(basename + createPath(location2));
  }
  function push(path2, state2) {
    var action = "PUSH";
    var location2 = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        pushHashPath(encodedPath2);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path3);
        allPaths = nextPaths;
        setState2({
          action,
          location: location2
        });
      } else {
        setState2();
      }
    });
  }
  function replace(path2, state2) {
    var action = "REPLACE";
    var location2 = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        replaceHashPath(encodedPath2);
      }
      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1)
        allPaths[prevIndex] = path3;
      setState2({
        action,
        location: location2
      });
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
function clamp(n2, lowerBound, upperBound) {
  return Math.min(Math.max(n2, lowerBound), upperBound);
}
function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, getUserConfirmation = _props.getUserConfirmation, _props$initialEntries = _props.initialEntries, initialEntries = _props$initialEntries === void 0 ? ["/"] : _props$initialEntries, _props$initialIndex = _props.initialIndex, initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();
  function setState2(nextState) {
    _extends(history, nextState);
    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function(entry) {
    return typeof entry === "string" ? createLocation(entry, void 0, createKey()) : createLocation(entry, void 0, entry.key || createKey());
  });
  var createHref = createPath;
  function push(path, state2) {
    var action = "PUSH";
    var location2 = createLocation(path, state2, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location2);
      } else {
        nextEntries.push(location2);
      }
      setState2({
        action,
        location: location2,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }
  function replace(path, state2) {
    var action = "REPLACE";
    var location2 = createLocation(path, state2, createKey(), history.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      history.entries[history.index] = location2;
      setState2({
        action,
        location: location2
      });
    });
  }
  function go(n2) {
    var nextIndex = clamp(history.index + n2, 0, history.entries.length - 1);
    var action = "POP";
    var location2 = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok2) {
      if (ok2) {
        setState2({
          action,
          location: location2,
          index: nextIndex
        });
      } else {
        setState2();
      }
    });
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  function canGo(n2) {
    var nextIndex = history.index + n2;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    return transitionManager.setPrompt(prompt);
  }
  function listen(listener) {
    return transitionManager.appendListener(listener);
  }
  var history = {
    length: entries.length,
    action: "POP",
    location: entries[index],
    index,
    entries,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen
  };
  return history;
}
var pathToRegexp$2 = { exports: {} };
var isarray$1 = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var isarray = isarray$1;
pathToRegexp$2.exports = pathToRegexp;
pathToRegexp$2.exports.parse = parse;
pathToRegexp$2.exports.compile = compile;
pathToRegexp$2.exports.tokensToFunction = tokensToFunction;
pathToRegexp$2.exports.tokensToRegExp = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = "";
  var defaultDelimiter = options && options.delimiter || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m2 = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m2.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index];
    var prefix2 = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    var partial = prefix2 != null && next != null && next !== prefix2;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix2 || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index < str.length) {
    path += str.substr(index);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(tokens, options) {
  var matches = new Array(tokens.length);
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === "object") {
      matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
    }
  }
  return function(obj, opts) {
    var path = "";
    var data = obj || {};
    var options2 = opts || {};
    var encode = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i2].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i2].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(re2, keys) {
  re2.keys = keys;
  return re2;
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys);
}
function arrayToRegexp(path, keys, options) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }
  var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
  return attachKeys(regexp, keys);
}
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = "";
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var prefix2 = escapeString(token.prefix);
      var capture = "(?:" + token.pattern + ")";
      keys.push(token);
      if (token.repeat) {
        capture += "(?:" + prefix2 + capture + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture = "(?:" + prefix2 + "(" + capture + "))?";
        } else {
          capture = prefix2 + "(" + capture + ")?";
        }
      } else {
        capture = prefix2 + "(" + capture + ")";
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options.delimiter || "/");
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
  }
  if (end) {
    route += "$";
  } else {
    route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
  }
  return attachKeys(new RegExp("^" + route, flags(options)), keys);
}
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }
  if (isarray(path)) {
    return arrayToRegexp(path, keys, options);
  }
  return stringToRegexp(path, keys, options);
}
var pathToRegexp$1 = pathToRegexp$2.exports;
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function(a) {
  return z(a) === h;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z(a) === n;
};
reactIs_production_min.isFragment = function(a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z(a) === t;
};
reactIs_production_min.isMemo = function(a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z(a) === g;
};
reactIs_production_min.isStrictMode = function(a) {
  return z(a) === f;
};
reactIs_production_min.isSuspense = function(a) {
  return z(a) === p;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs = reactIs$1.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}
function objectIs(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function(h2) {
        return h2 !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function(handler) {
        return handler(value, changedBits);
      });
    }
  };
}
function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;
  var contextProp = "__create-react-context-" + getUniqueId() + "__";
  var Provider = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(Provider2, _React$Component);
    function Provider2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }
    var _proto = Provider2.prototype;
    _proto.getChildContext = function getChildContext() {
      var _ref;
      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };
    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;
        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          changedBits |= 0;
          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };
    _proto.render = function render() {
      return this.props.children;
    };
    return Provider2;
  }(React.Component);
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = PropTypes.object.isRequired, _Provider$childContex);
  var Consumer = /* @__PURE__ */ function(_React$Component2) {
    _inheritsLoose(Consumer2, _React$Component2);
    function Consumer2() {
      var _this2;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
      _this2.observedBits = void 0;
      _this2.state = {
        value: _this2.getValue()
      };
      _this2.onUpdate = function(newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };
      return _this2;
    }
    var _proto2 = Consumer2.prototype;
    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };
    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };
    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };
    return Consumer2;
  }(React.Component);
  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = PropTypes.object, _Consumer$contextType);
  return {
    Provider,
    Consumer
  };
}
var createContext$1 = React.createContext || createReactContext;
var createNamedContext = function createNamedContext2(name) {
  var context2 = createContext$1();
  context2.displayName = name;
  return context2;
};
var historyContext = /* @__PURE__ */ createNamedContext("Router-History");
var context = /* @__PURE__ */ createNamedContext("Router");
var Router = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Router2, _React$Component);
  Router2.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };
  function Router2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    };
    _this._isMounted = false;
    _this._pendingLocation = null;
    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function(location2) {
        _this._pendingLocation = location2;
      });
    }
    return _this;
  }
  var _proto = Router2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    this._isMounted = true;
    if (this.unlisten) {
      this.unlisten();
    }
    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function(location2) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location2
          });
        }
      });
    }
    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };
  _proto.render = function render() {
    return /* @__PURE__ */ React.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router2.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /* @__PURE__ */ React.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };
  return Router2;
}(React.Component);
var MemoryRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(MemoryRouter2, _React$Component);
  function MemoryRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }
  var _proto = MemoryRouter2.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ React.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return MemoryRouter2;
}(React.Component);
var Lifecycle = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Lifecycle2, _React$Component);
  function Lifecycle2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Lifecycle2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount)
      this.props.onMount.call(this, this);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate)
      this.props.onUpdate.call(this, this, prevProps);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount)
      this.props.onUnmount.call(this, this);
  };
  _proto.render = function render() {
    return null;
  };
  return Lifecycle2;
}(React.Component);
function Prompt(_ref) {
  var message = _ref.message, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  return /* @__PURE__ */ React.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    if (!when || context2.staticContext)
      return null;
    var method = context2.history.block;
    return /* @__PURE__ */ React.createElement(Lifecycle, {
      onMount: function onMount(self2) {
        self2.release = method(message);
      },
      onUpdate: function onUpdate(self2, prevProps) {
        if (prevProps.message !== message) {
          self2.release();
          self2.release = method(message);
        }
      },
      onUnmount: function onUnmount(self2) {
        self2.release();
      },
      message
    });
  });
}
var cache = {};
var cacheLimit = 1e4;
var cacheCount = 0;
function compilePath(path) {
  if (cache[path])
    return cache[path];
  var generator = pathToRegexp$1.compile(path);
  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }
  return generator;
}
function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }
  if (params === void 0) {
    params = {};
  }
  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}
function Redirect(_ref) {
  var computedMatch = _ref.computedMatch, to = _ref.to, _ref$push = _ref.push, push = _ref$push === void 0 ? false : _ref$push;
  return /* @__PURE__ */ React.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history, staticContext = context2.staticContext;
    var method = push ? history.push : history.replace;
    var location2 = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to);
    if (staticContext) {
      method(location2);
      return null;
    }
    return /* @__PURE__ */ React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location2);
      },
      onUpdate: function onUpdate(self2, prevProps) {
        var prevLocation = createLocation(prevProps.to);
        if (!locationsAreEqual(prevLocation, _extends({}, location2, {
          key: prevLocation.key
        }))) {
          method(location2);
        }
      },
      to
    });
  });
}
var cache$1 = {};
var cacheLimit$1 = 1e4;
var cacheCount$1 = 0;
function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path])
    return pathCache[path];
  var keys = [];
  var regexp = pathToRegexp$1(path, keys, options);
  var result = {
    regexp,
    keys
  };
  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }
  return result;
}
function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }
  var _options = options, path = _options.path, _options$exact = _options.exact, exact = _options$exact === void 0 ? false : _options$exact, _options$strict = _options.strict, strict = _options$strict === void 0 ? false : _options$strict, _options$sensitive = _options.sensitive, sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function(matched, path2) {
    if (!path2 && path2 !== "")
      return null;
    if (matched)
      return matched;
    var _compilePath = compilePath$1(path2, {
      end: exact,
      strict,
      sensitive
    }), regexp = _compilePath.regexp, keys = _compilePath.keys;
    var match = regexp.exec(pathname);
    if (!match)
      return null;
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact)
      return null;
    return {
      path: path2,
      url: path2 === "/" && url === "" ? "/" : url,
      isExact,
      params: keys.reduce(function(memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}
function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}
var Route = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Route2, _React$Component);
  function Route2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Route2.prototype;
  _proto.render = function render() {
    var _this = this;
    return /* @__PURE__ */ React.createElement(context.Consumer, null, function(context$1) {
      !context$1 ? invariant(false) : void 0;
      var location2 = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch : _this.props.path ? matchPath(location2.pathname, _this.props) : context$1.match;
      var props = _extends({}, context$1, {
        location: location2,
        match
      });
      var _this$props = _this.props, children = _this$props.children, component = _this$props.component, render2 = _this$props.render;
      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }
      return /* @__PURE__ */ React.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? /* @__PURE__ */ React.createElement(component, props) : render2 ? render2(props) : null : typeof children === "function" ? children(props) : null);
    });
  };
  return Route2;
}(React.Component);
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function addBasename(basename, location2) {
  if (!basename)
    return location2;
  return _extends({}, location2, {
    pathname: addLeadingSlash(basename) + location2.pathname
  });
}
function stripBasename(basename, location2) {
  if (!basename)
    return location2;
  var base = addLeadingSlash(basename);
  if (location2.pathname.indexOf(base) !== 0)
    return location2;
  return _extends({}, location2, {
    pathname: location2.pathname.substr(base.length)
  });
}
function createURL(location2) {
  return typeof location2 === "string" ? location2 : createPath(location2);
}
function staticHandler(methodName) {
  return function() {
    invariant(false);
  };
}
function noop$1() {
}
var StaticRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(StaticRouter2, _React$Component);
  function StaticRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handlePush = function(location2) {
      return _this.navigateTo(location2, "PUSH");
    };
    _this.handleReplace = function(location2) {
      return _this.navigateTo(location2, "REPLACE");
    };
    _this.handleListen = function() {
      return noop$1;
    };
    _this.handleBlock = function() {
      return noop$1;
    };
    return _this;
  }
  var _proto = StaticRouter2.prototype;
  _proto.navigateTo = function navigateTo(location2, action) {
    var _this$props = this.props, _this$props$basename = _this$props.basename, basename = _this$props$basename === void 0 ? "" : _this$props$basename, _this$props$context = _this$props.context, context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename, createLocation(location2));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render() {
    var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename = _this$props2$basename === void 0 ? "" : _this$props2$basename, _this$props2$context = _this$props2.context, context2 = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location2 = _this$props2$location === void 0 ? "/" : _this$props2$location, rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, createLocation(location2)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /* @__PURE__ */ React.createElement(Router, _extends({}, rest, {
      history,
      staticContext: context2
    }));
  };
  return StaticRouter2;
}(React.Component);
var Switch = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Switch2, _React$Component);
  function Switch2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Switch2.prototype;
  _proto.render = function render() {
    var _this = this;
    return /* @__PURE__ */ React.createElement(context.Consumer, null, function(context2) {
      !context2 ? invariant(false) : void 0;
      var location2 = _this.props.location || context2.location;
      var element, match;
      React.Children.forEach(_this.props.children, function(child) {
        if (match == null && /* @__PURE__ */ React.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location2.pathname, _extends({}, child.props, {
            path
          })) : context2.match;
        }
      });
      return match ? /* @__PURE__ */ React.cloneElement(element, {
        location: location2,
        computedMatch: match
      }) : null;
    });
  };
  return Switch2;
}(React.Component);
function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  var C2 = function C3(props) {
    var wrappedComponentRef = props.wrappedComponentRef, remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);
    return /* @__PURE__ */ React.createElement(context.Consumer, null, function(context2) {
      !context2 ? invariant(false) : void 0;
      return /* @__PURE__ */ React.createElement(Component, _extends({}, remainingProps, context2, {
        ref: wrappedComponentRef
      }));
    });
  };
  C2.displayName = displayName;
  C2.WrappedComponent = Component;
  return hoistNonReactStatics_cjs(C2, Component);
}
var useContext = React.useContext;
function useHistory() {
  return useContext(historyContext);
}
function useLocation() {
  return useContext(context).location;
}
function useParams() {
  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  var location2 = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location2.pathname, path) : match;
}
var _3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MemoryRouter,
  Prompt,
  Redirect,
  Route,
  Router,
  StaticRouter,
  Switch,
  __HistoryContext: historyContext,
  __RouterContext: context,
  generatePath,
  matchPath,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  withRouter
}, Symbol.toStringTag, { value: "Module" }));
var BrowserRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(BrowserRouter2, _React$Component);
  function BrowserRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }
  var _proto = BrowserRouter2.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ React.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return BrowserRouter2;
}(React.Component);
var HashRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(HashRouter2, _React$Component);
  function HashRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }
  var _proto = HashRouter2.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ React.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return HashRouter2;
}(React.Component);
var resolveToLocation = function resolveToLocation2(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation2(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};
var forwardRefShim = function forwardRefShim2(C2) {
  return C2;
};
var forwardRef = React.forwardRef;
if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var LinkAnchor = forwardRef(function(_ref, forwardedRef) {
  var innerRef = _ref.innerRef, navigate2 = _ref.navigate, _onClick = _ref.onClick, rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);
  var target = rest.target;
  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick)
          _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (!event.defaultPrevented && event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
        event.preventDefault();
        navigate2();
      }
    }
  });
  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  return /* @__PURE__ */ React.createElement("a", props);
});
var Link = forwardRef(function(_ref2, forwardedRef) {
  var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);
  return /* @__PURE__ */ React.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history;
    var location2 = normalizeToLocation(resolveToLocation(to, context2.location), context2.location);
    var href = location2 ? history.createHref(location2) : "";
    var props = _extends({}, rest, {
      href,
      navigate: function navigate2() {
        var location3 = resolveToLocation(to, context2.location);
        var isDuplicateNavigation = createPath(context2.location) === createPath(normalizeToLocation(location3));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location3);
      }
    });
    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ React.createElement(component, props);
  });
});
var forwardRefShim$1 = function forwardRefShim3(C2) {
  return C2;
};
var forwardRef$1 = React.forwardRef;
if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}
function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }
  return classnames.filter(function(i) {
    return i;
  }).join(" ");
}
var NavLink = forwardRef$1(function(_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"], ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent, _ref$activeClassName = _ref.activeClassName, activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName, activeStyle = _ref.activeStyle, classNameProp = _ref.className, exact = _ref.exact, isActiveProp = _ref.isActive, locationProp = _ref.location, sensitive = _ref.sensitive, strict = _ref.strict, styleProp = _ref.style, to = _ref.to, innerRef = _ref.innerRef, rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return /* @__PURE__ */ React.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var currentLocation = locationProp || context2.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname;
    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact,
      sensitive,
      strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style2 = typeof styleProp === "function" ? styleProp(isActive) : styleProp;
    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style2 = _extends({}, style2, activeStyle);
    }
    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className,
      style: style2,
      to: toLocation
    }, rest);
    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ React.createElement(Link, props);
  });
});
var _4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  MemoryRouter,
  Prompt,
  Redirect,
  Route,
  Router,
  StaticRouter,
  Switch,
  generatePath,
  matchPath,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  withRouter
}, Symbol.toStringTag, { value: "Module" }));
const DefaultErrorInfo = (props) => react.exports.createElement(ExtensionSlot, { name: "error", params: props, empty: () => react.exports.createElement(SwitchErrorInfo, Object.assign({}, props)) });
DefaultErrorInfo.displayName = "DefaultErrorInfo";
const DefaultLoadingIndicator = () => react.exports.createElement("div", null, "Loading");
DefaultLoadingIndicator.displayName = "DefaultLoadingIndicator";
function compareObjects(a, b2) {
  for (const i in a) {
    if (!(i in b2)) {
      return false;
    }
  }
  for (const i in b2) {
    if (!isSame(a[i], b2[i])) {
      return false;
    }
  }
  return true;
}
function compareArrays(a, b2) {
  const l2 = a.length;
  if (l2 === b2.length) {
    for (let i = 0; i < l2; i++) {
      if (!isSame(a[i], b2[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
function isSame(a, b2) {
  if (a !== b2) {
    const ta2 = typeof a;
    const tb2 = typeof b2;
    if (ta2 === tb2 && ta2 === "object" && a && b2) {
      if (Array.isArray(a) && Array.isArray(b2)) {
        return compareArrays(a, b2);
      } else {
        return compareObjects(a, b2);
      }
    }
    return false;
  }
  return true;
}
const defaultTarget = "memory";
function createDataOptions(options = defaultTarget) {
  if (typeof options === "string") {
    return {
      target: options
    };
  } else if (options && typeof options === "object" && !Array.isArray(options)) {
    return options;
  } else {
    return {
      target: defaultTarget
    };
  }
}
function getDataExpiration(expires) {
  if (typeof expires === "number") {
    return expires;
  } else if (expires instanceof Date) {
    return expires.valueOf();
  }
  return -1;
}
function removeAll(nodes) {
  nodes.forEach((node) => node.remove());
}
const SlotCarrier = ({ nodes }) => {
  const host = react.exports.useRef();
  react.exports.useEffect(() => {
    var _a;
    (_a = host.current) === null || _a === void 0 ? void 0 : _a.append(...nodes);
    return () => removeAll(nodes);
  }, [nodes]);
  if (nodes.length) {
    return react.exports.createElement("piral-slot", { ref: host });
  }
  return null;
};
function toExtension(Component) {
  return (props) => react.exports.createElement(Component, Object.assign({}, props.params));
}
function reactifyContent(childNodes) {
  const nodes = Array.prototype.filter.call(childNodes, Boolean);
  removeAll(nodes);
  return react.exports.createElement(SlotCarrier, { nodes });
}
const extensionName = "piral-extension";
const portalName = "piral-portal";
const slotName = "piral-slot";
function attachDomPortal(id2, context2, element, component, props) {
  const portal = reactDom$1.exports.createPortal(react.exports.createElement(component, props), element);
  context2.showPortal(id2, portal);
  return [id2, portal];
}
function changeDomPortal(id2, current, context2, element, component, props) {
  const next = reactDom$1.exports.createPortal(react.exports.createElement(component, props), element);
  context2.updatePortal(id2, current, next);
  return [id2, next];
}
function convertComponent(converter, component) {
  if (typeof converter !== "function") {
    throw new Error(`No converter for component of type "${component.type}" registered.`);
  }
  return converter(component);
}
function renderInDom(context2, element, component, props) {
  const portalId = "pid";
  let parent = element;
  while (parent) {
    if (parent instanceof Element && parent.localName === portalName && parent.hasAttribute(portalId)) {
      const id2 = parent.getAttribute(portalId);
      return attachDomPortal(id2, context2, element, component, props);
    }
    parent = parent.parentNode || parent.host;
  }
  return attachDomPortal("root", context2, element, component, props);
}
function rand(c2) {
  const r2 = Math.random() * 16 | 0;
  const v2 = c2 === "x" ? r2 : r2 & 3 | 8;
  return v2.toString(16);
}
function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, rand);
}
function buildName(prefix2, name) {
  return `${prefix2}://${name}`;
}
function defaultRender(children, key) {
  return react.exports.createElement(react.exports.Fragment, { key }, children);
}
function withAll(...dispatchers) {
  return (state2) => {
    for (const dispatcher of dispatchers) {
      state2 = dispatcher(state2);
    }
    return state2;
  };
}
function withPage(name, value) {
  return (state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { pages: withKey(state2.registry.pages, name, value) }) });
}
function withoutPage(name) {
  return (state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { pages: withoutKey(state2.registry.pages, name) }) });
}
function withExtension(name, value) {
  return (state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { extensions: withKey(state2.registry.extensions, name, appendItem(state2.registry.extensions[name], value)) }) });
}
function withoutExtension(name, reference) {
  return (state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { extensions: withKey(state2.registry.extensions, name, excludeOn(state2.registry.extensions[name], (m2) => m2.reference === reference)) }) });
}
function withRootExtension(name, component) {
  return withExtension(name, {
    component: toExtension(component),
    defaults: {},
    pilet: "",
    reference: component
  });
}
function withProvider(provider) {
  const wrapper2 = (props) => react.exports.cloneElement(provider, props);
  return (state2) => Object.assign(Object.assign({}, state2), { provider: !state2.provider ? wrapper2 : (props) => react.exports.createElement(state2.provider, void 0, wrapper2(props)) });
}
function withRoute(path, component) {
  return (state2) => Object.assign(Object.assign({}, state2), { routes: withKey(state2.routes, path, component) });
}
const DefaultLayout = ({ children }) => defaultRender(children);
DefaultLayout.displayName = "DefaultLayout";
const DefaultRouter = ({ children, publicPath: publicPath2 }) => {
  return react.exports.createElement(BrowserRouter, { basename: publicPath2 }, children);
};
DefaultRouter.displayName = "DefaultRouter";
const DefaultRouteSwitch = (_a) => {
  var { paths, NotFound: NotFound2 } = _a, props = __rest(_a, ["paths", "NotFound"]);
  return react.exports.createElement(
    Switch,
    Object.assign({}, props),
    paths.map(({ path, Component }) => react.exports.createElement(Route, { exact: true, key: path, path, component: Component })),
    react.exports.createElement(Route, { component: NotFound2 })
  );
};
DefaultRouteSwitch.displayName = "DefaultRouteSwitch";
let _nav;
const _noop = () => {
};
function useRouterContext() {
  return react.exports.useContext(context);
}
function useCurrentNavigation() {
  const ctx = useRouterContext();
  const location2 = useLocation();
  react.exports.useEffect(() => {
    if (_nav) {
      window.dispatchEvent(new CustomEvent("piral-navigate", {
        detail: {
          location: location2
        }
      }));
    }
  }, [location2]);
  react.exports.useEffect(() => {
    _nav = ctx.history;
    return () => {
      _nav = void 0;
    };
  }, []);
}
function createNavigation() {
  const enhance = (location2, action) => ({
    action,
    location: Object.assign({ get href() {
      return _nav.createHref(location2);
    } }, location2)
  });
  return {
    get path() {
      const loc = _nav ? _nav.location : location;
      return loc.pathname;
    },
    get url() {
      const loc = _nav ? _nav.location : location;
      return `${loc.pathname}${loc.search}${loc.hash}`;
    },
    push(target, state2) {
      if (_nav) {
        _nav.push(target, state2);
      }
    },
    replace(target, state2) {
      if (_nav) {
        _nav.replace(target, state2);
      }
    },
    go(n2) {
      if (_nav) {
        _nav.go(n2);
      }
    },
    block(blocker) {
      if (!_nav) {
        return _noop;
      }
      return _nav.block((location2, action) => blocker(enhance(location2, action)));
    },
    listen(listener) {
      const handler = (e2) => listener(enhance(e2.detail.location, _nav.action));
      window.addEventListener("piral-navigate", handler);
      return () => {
        window.removeEventListener("piral-navigate", handler);
      };
    },
    router: {
      get history() {
        return _nav;
      }
    }
  };
}
const settingsKeys = {
  viewState: "dbg:view-state",
  loadPilets: "dbg:load-pilets",
  hardRefresh: "dbg:hard-refresh",
  viewOrigins: "dbg:view-origins",
  extensionCatalogue: "dbg:extension-catalogue",
  clearConsole: "dbg:clear-console",
  persistSettings: "dbg:persist-settings-data"
};
const persistKey = settingsKeys.persistSettings;
const persistSettings = !!localStorage.getItem(persistKey);
const defaultSetter = (name, value) => {
  sessionStorage.setItem(name, value);
};
const persistentSetter = (name, value) => {
  defaultSetter(name, value);
  const data = JSON.parse(localStorage.getItem(persistKey));
  data[name] = value;
  localStorage.setItem(persistKey, JSON.stringify(data));
};
if (persistSettings) {
  try {
    const settings = JSON.parse(localStorage.getItem(persistKey));
    Object.keys(settings).forEach((name) => {
      const value = settings[name];
      sessionStorage.setItem(name, value);
    });
  } catch (_a) {
    localStorage.setItem(persistKey, "{}");
  }
}
function enablePersistance() {
  const data = {};
  const validKeys = Object.keys(settingsKeys).map((m2) => settingsKeys[m2]);
  for (let i = 0; i < sessionStorage.length; i++) {
    const name = sessionStorage.key(i);
    if (validKeys.includes(name)) {
      const value = sessionStorage.getItem(name);
      data[name] = value;
    }
  }
  localStorage.setItem(persistKey, JSON.stringify(data));
  return persistentSetter;
}
function disablePersistance() {
  localStorage.removeItem(persistKey);
  return defaultSetter;
}
const initialSetter = persistSettings ? persistentSetter : defaultSetter;
const initialSettings = {
  viewState: sessionStorage.getItem(settingsKeys.viewState) !== "off",
  loadPilets: sessionStorage.getItem(settingsKeys.loadPilets) === "on",
  hardRefresh: sessionStorage.getItem(settingsKeys.hardRefresh) === "on",
  viewOrigins: sessionStorage.getItem(settingsKeys.viewOrigins) === "on",
  extensionCatalogue: sessionStorage.getItem(settingsKeys.extensionCatalogue) !== "off",
  clearConsole: sessionStorage.getItem(settingsKeys.clearConsole) === "on",
  persistSettings,
  cataloguePath: "/$debug-extension-catalogue"
};
const listeners = [];
let _navigate = void 0;
function setNavigate(navigate2) {
  _navigate = navigate2;
}
function navigate(path, state2) {
  _navigate === null || _navigate === void 0 ? void 0 : _navigate(path, state2);
}
let state = {
  visualize: {
    active: initialSettings.viewOrigins,
    force: false
  },
  catalogue: {
    active: initialSettings.extensionCatalogue,
    path: initialSettings.cataloguePath
  },
  route: void 0
};
function setState(dispatch2) {
  const newState = dispatch2(state);
  if (newState !== state) {
    state = newState;
    listeners.forEach((listener) => listener());
  }
}
function getState() {
  return state;
}
function subscribe(select, notify) {
  let prevState = select(state);
  const cb2 = () => {
    const nextState = select(state);
    if (prevState !== nextState) {
      prevState = nextState;
      notify(nextState);
    }
  };
  const unsubscribe = () => {
    const idx = listeners.indexOf(cb2);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  };
  listeners.push(cb2);
  return unsubscribe;
}
function useDebugState(select) {
  const [state2, setState2] = react.exports.useState(() => select(getState()));
  react.exports.useEffect(() => subscribe(select, setState2), []);
  return state2;
}
const DebugTracker = () => {
  const route = useDebugState((s) => s.route);
  react.exports.useEffect(() => {
    if (route) {
      navigate(route.path, route.state);
    }
  }, [route]);
  return null;
};
const moduleColor = {};
const Visualizer = ({ pilet, force, active }) => {
  const colors = [
    "#001F3F",
    "#0074D9",
    "#7FDBFF",
    "#39CCCC",
    "#3D9970",
    "#2ECC40",
    "#01FF70",
    "#FFDC00",
    "#FF851B",
    "#FF4136",
    "#85144B",
    "#F012BE",
    "#B10DC9"
  ];
  const container = react.exports.useRef();
  const color = react.exports.useMemo(() => moduleColor[pilet] || (moduleColor[pilet] = colors[Object.keys(moduleColor).length % colors.length]), [pilet]);
  react.exports.useEffect(() => {
    let sibling = container.current && container.current.nextElementSibling;
    if (sibling && active) {
      const target = container.current.parentNode;
      const mouseIn = () => {
        if (container.current && sibling) {
          const style2 = container.current.style;
          style2.display = "block";
          style2.left = "0px";
          style2.top = "0px";
          style2.bottom = "0px";
          style2.right = "0px";
          const targetRect = sibling.getBoundingClientRect();
          const sourceRect = container.current.getBoundingClientRect();
          style2.left = targetRect.left - sourceRect.left + "px";
          style2.top = targetRect.top - sourceRect.top + "px";
          style2.bottom = -(targetRect.bottom - sourceRect.bottom) + "px";
          style2.right = -(targetRect.right - sourceRect.right) + "px";
        }
      };
      const mouseOut = () => {
        if (container.current) {
          const style2 = container.current.style;
          style2.display = "none";
        }
      };
      const append = () => {
        if (force) {
          mouseIn();
        } else if (sibling) {
          sibling.addEventListener("mouseover", mouseIn);
          sibling.addEventListener("mouseout", mouseOut);
        }
      };
      const remove = () => {
        if (force) {
          mouseOut();
        } else if (sibling) {
          sibling.removeEventListener("mouseover", mouseIn);
          sibling.removeEventListener("mouseout", mouseOut);
        }
      };
      const observer = new MutationObserver(() => {
        var _a;
        const newSibling = (_a = container.current) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        if (newSibling !== sibling) {
          remove();
          sibling = newSibling;
          append();
        }
      });
      append();
      observer.observe(target, { childList: true });
      return () => {
        remove();
        observer.disconnect();
      };
    }
  }, [active, force]);
  if (active) {
    const rect = {
      border: "1px solid red",
      display: "none",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 99999999999,
      pointerEvents: "none",
      borderColor: color
    };
    const info = {
      color: "white",
      position: "absolute",
      right: 0,
      top: 0,
      fontSize: "8px",
      background: color
    };
    return react.exports.createElement(
      "div",
      { style: rect, ref: container },
      react.exports.createElement("div", { style: info }, pilet)
    );
  }
  return null;
};
const VisualizationWrapper = ({ piral, children }) => {
  const { active, force } = useDebugState((m2) => m2.visualize);
  return react.exports.createElement(
    react.exports.Fragment,
    null,
    react.exports.createElement(Visualizer, { pilet: piral.meta.name, force, active }),
    children
  );
};
const ExtensionCatalogue = () => {
  const { state: state2 } = useLocation();
  if (state2) {
    const { name = "", params = {} } = state2;
    return react.exports.createElement("piral-extension", { name, params: JSON.stringify(params) });
  }
  return null;
};
function decycle(obj) {
  const objects = [];
  const paths = [];
  const derez = (value, path) => {
    const _value = value && value.toJSON instanceof Function ? value.toJSON() : value;
    if (_value === null || _value === void 0) {
      return void 0;
    } else if (typeof _value === "function") {
      return `<function>`;
    } else if (_value instanceof Error) {
      return `<error>`;
    } else if (_value instanceof Node) {
      return `<node>`;
    } else if (typeof _value === "object") {
      for (let i = 0; i < objects.length; i++) {
        if (objects[i] === _value) {
          return { $ref: paths[i] };
        }
      }
      objects.push(_value);
      paths.push(path);
      if (Array.isArray(_value)) {
        const nu = [];
        for (let i = 0; i < _value.length; i += 1) {
          nu[i] = derez(_value[i], `${path}[${i}]`);
        }
        return nu;
      } else {
        const nu = {};
        for (const name in _value) {
          if (Object.prototype.hasOwnProperty.call(_value, name)) {
            nu[name] = derez(_value[name], `${path}[${JSON.stringify(name)}]`);
          }
        }
        return nu;
      }
    } else if (typeof _value === "symbol") {
      return "<symbol>";
    } else if (typeof _value === "bigint") {
      return "<bigint>";
    }
    return _value;
  };
  return derez(obj, "$");
}
function installPiralDebug(options) {
  const { getGlobalState, getExtensions, getDependencies, getRoutes, getPilets, fireEvent, integrate, removePilet: removePilet2, updatePilet, addPilet: addPilet2, navigate: navigate2, customSettings = {} } = options;
  const events = [];
  const legacyBrowser = !new Error().stack;
  const excludedRoutes = [initialSettings.cataloguePath];
  const selfSource = "piral-debug-api";
  const debugApiVersion = "v1";
  let setValue = initialSetter;
  const settings = Object.assign(Object.assign({}, customSettings), { viewState: {
    value: initialSettings.viewState,
    type: "boolean",
    label: "State container logging",
    onChange(value) {
      setValue(settingsKeys.viewState, value ? "on" : "off");
    }
  }, loadPilets: {
    value: initialSettings.loadPilets,
    type: "boolean",
    label: "Load available pilets",
    onChange(value) {
      setValue(settingsKeys.loadPilets, value ? "on" : "off");
    }
  }, hardRefresh: {
    value: initialSettings.hardRefresh,
    type: "boolean",
    label: "Full refresh on change",
    onChange(value) {
      setValue(settingsKeys.hardRefresh, value ? "on" : "off");
    }
  }, viewOrigins: {
    value: initialSettings.viewOrigins,
    type: "boolean",
    label: "Visualize component origins",
    onChange(value, prev) {
      setValue(settingsKeys.viewOrigins, value ? "on" : "off");
      if (prev !== value) {
        updateVisualize(value);
      }
    }
  }, extensionCatalogue: {
    value: initialSettings.extensionCatalogue,
    type: "boolean",
    label: "Enable extension catalogue",
    onChange(value) {
      setValue(settingsKeys.extensionCatalogue, value ? "on" : "off");
    }
  }, clearConsole: {
    value: initialSettings.clearConsole,
    type: "boolean",
    label: "Clear console during HMR",
    onChange(value) {
      setValue(settingsKeys.clearConsole, value ? "on" : "off");
    }
  }, persistSettings: {
    value: initialSettings.persistSettings,
    type: "boolean",
    label: "Persist settings",
    onChange(value) {
      setValue = value ? enablePersistance() : disablePersistance();
    }
  } });
  const sendMessage = (content) => {
    window.postMessage({
      content,
      source: selfSource,
      version: debugApiVersion
    }, "*");
  };
  const getSettings2 = () => {
    return Object.keys(settings).reduce((obj, key) => {
      const setting = settings[key];
      if (setting && typeof setting === "object" && typeof setting.label === "string" && typeof setting.type === "string" && ["boolean", "string", "number"].includes(typeof setting.value)) {
        obj[key] = {
          label: setting.label,
          value: setting.value,
          type: setting.type
        };
      }
      return obj;
    }, {});
  };
  const updateSettings = (values) => {
    Object.keys(values).forEach((key) => {
      const setting = settings[key];
      switch (setting.type) {
        case "boolean": {
          const prev = setting.value;
          const value = values[key];
          setting.value = value;
          setting.onChange(value, prev);
          break;
        }
        case "number": {
          const prev = setting.value;
          const value = values[key];
          setting.value = value;
          setting.onChange(value, prev);
          break;
        }
        case "string": {
          const prev = setting.value;
          const value = values[key];
          setting.value = value;
          setting.onChange(value, prev);
          break;
        }
      }
    });
    sendMessage({
      settings: getSettings2(),
      type: "settings"
    });
  };
  const togglePilet = (name) => {
    const pilet = getPilets().find((m2) => m2.name === name);
    if (!pilet)
      ;
    else if (pilet.disabled) {
      if (pilet.original) {
        updatePilet(pilet.original);
      } else {
        updatePilet(Object.assign(Object.assign({}, pilet), { disabled: false }));
      }
    } else {
      updatePilet({ name, disabled: true, original: pilet });
    }
  };
  const toggleVisualize = () => {
    setState((s) => Object.assign(Object.assign({}, s), { visualize: Object.assign(Object.assign({}, s.visualize), { force: !s.visualize.force }) }));
  };
  const updateVisualize = (active) => {
    setState((s) => Object.assign(Object.assign({}, s), { visualize: Object.assign(Object.assign({}, s.visualize), { active }) }));
  };
  const goToRoute = (path, state2) => {
    setState((s) => Object.assign(Object.assign({}, s), { route: {
      path,
      state: state2
    } }));
  };
  const eventDispatcher = document.body.dispatchEvent;
  const systemResolve2 = System.constructor.prototype.resolve;
  const depMap = {};
  const subDeps = {};
  const findAncestor = (parent) => {
    while (subDeps[parent]) {
      parent = subDeps[parent];
    }
    return parent;
  };
  System.constructor.prototype.resolve = function(...args) {
    const [url, parent] = args;
    const result = systemResolve2.call(this, ...args);
    if (!parent) {
      return result;
    }
    const ancestor = findAncestor(parent);
    if (url.startsWith("./")) {
      subDeps[result] = ancestor;
    } else {
      const deps = depMap[ancestor] || {};
      deps[url] = result;
      depMap[ancestor] = deps;
    }
    return result;
  };
  const debugApi = {
    debug: debugApiVersion,
    instance: {
      name: "shell",
      version: "1.0.0",
      dependencies: "tslib,react,react-dom,react-router,react-router-dom"
    },
    build: {
      date: "2022-11-17T17:29:59.508Z",
      cli: "0.15.0",
      compat: "0.15"
    }
  };
  const details = {
    name: debugApi.instance.name,
    version: debugApi.instance.version,
    kind: debugApiVersion,
    mode: "production",
    capabilities: [
      "events",
      "container",
      "routes",
      "pilets",
      "settings",
      "extensions",
      "dependencies",
      "dependency-map"
    ]
  };
  const start = () => {
    const container = decycle(getGlobalState());
    const routes = getRoutes().filter((r2) => !excludedRoutes.includes(r2));
    const extensions = getExtensions();
    const settings2 = getSettings2();
    const dependencies = getDependencies();
    const pilets = getPilets().map((pilet) => ({
      name: pilet.name,
      version: pilet.version,
      disabled: pilet.disabled
    }));
    sendMessage(Object.assign(Object.assign({ type: "available" }, details), { state: {
      routes,
      pilets,
      container,
      settings: settings2,
      events,
      extensions,
      dependencies
    } }));
  };
  const check = () => {
    sendMessage(Object.assign({ type: "info" }, details));
  };
  const getDependencyMap = () => {
    const dependencyMap = {};
    const addDeps = (pilet, dependencies) => {
      const deps = dependencyMap[pilet] || [];
      for (const depName of Object.keys(dependencies)) {
        if (!deps.some((m2) => m2.demanded === depName)) {
          deps.push({
            demanded: depName,
            resolved: dependencies[depName]
          });
        }
      }
      dependencyMap[pilet] = deps;
    };
    const pilets = getPilets().map((pilet) => ({
      name: pilet.name,
      link: pilet.link,
      base: pilet.base
    })).filter((m2) => m2.link);
    Object.keys(depMap).forEach((url) => {
      const dependencies = depMap[url];
      const pilet = pilets.find((p2) => p2.link === url);
      if (pilet) {
        addDeps(pilet.name, dependencies);
      } else if (!pilet) {
        const parent = pilets.find((p2) => url.startsWith(p2.base));
        if (parent) {
          addDeps(parent.name, dependencies);
        }
      }
    });
    sendMessage({
      type: "dependency-map",
      dependencyMap
    });
  };
  document.body.dispatchEvent = function(ev) {
    if (ev.type.startsWith("piral-")) {
      events.unshift({
        id: events.length.toString(),
        name: ev.type.replace("piral-", ""),
        args: decycle(ev.detail.arg),
        time: Date.now()
      });
      sendMessage({
        events,
        type: "events"
      });
    }
    return eventDispatcher.call(this, ev);
  };
  window.addEventListener("storage", (event) => {
    if (!legacyBrowser && event.storageArea === sessionStorage) {
      updateSettings({
        viewState: sessionStorage.getItem(settingsKeys.viewState) !== "off",
        loadPilets: sessionStorage.getItem(settingsKeys.loadPilets) === "on",
        hardRefresh: sessionStorage.getItem(settingsKeys.hardRefresh) === "on",
        viewOrigins: sessionStorage.getItem(settingsKeys.viewOrigins) === "on",
        extensionCatalogue: sessionStorage.getItem(settingsKeys.extensionCatalogue) !== "off",
        clearConsole: sessionStorage.getItem(settingsKeys.clearConsole) === "on"
      });
    }
  });
  window.addEventListener("message", (event) => {
    const { source, version, content } = event.data;
    if (source !== selfSource && version === debugApiVersion) {
      switch (content.type) {
        case "init":
          return start();
        case "check-piral":
          return check();
        case "get-dependency-map":
          return getDependencyMap();
        case "update-settings":
          return updateSettings(content.settings);
        case "append-pilet":
          return addPilet2(content.meta);
        case "remove-pilet":
          return removePilet2(content.name);
        case "toggle-pilet":
          return togglePilet(content.name);
        case "emit-event":
          return fireEvent(content.name, content.args);
        case "goto-route":
          return goToRoute(content.route, content.state);
        case "visualize-all":
          return toggleVisualize();
      }
    }
  });
  setNavigate(navigate2);
  integrate({
    components: {
      Debug: DebugTracker
    },
    routes: {
      [initialSettings.cataloguePath]: ExtensionCatalogue
    },
    wrappers: {
      "*": VisualizationWrapper
    },
    onChange(previous, current, changed) {
      if (changed.state) {
        if (settings.viewState.value) {
          if (!legacyBrowser) {
            const err = new Error();
            const lastLine = err.stack.split("\n")[6];
            if (lastLine) {
              const action = lastLine.replace(/^\s+at\s+(Atom\.|Object\.)?/, "");
              console.group(`%c Piral State Change %c ${new Date().toLocaleTimeString()}`, "color: gray; font-weight: lighter;", "color: black; font-weight: bold;");
              console.log("%c Previous", `color: #9E9E9E; font-weight: bold`, previous);
              console.log("%c Action", `color: #03A9F4; font-weight: bold`, action);
              console.log("%c Next", `color: #4CAF50; font-weight: bold`, current);
              console.groupEnd();
            }
          } else {
            console.log("Changed state", previous, current);
          }
        }
        sendMessage({
          type: "container",
          container: decycle(getGlobalState())
        });
      }
      if (changed.pilets) {
        sendMessage({
          type: "pilets",
          pilets: getPilets().map((pilet) => ({
            name: pilet.name,
            version: pilet.version,
            disabled: !!pilet.disabled
          }))
        });
      }
      if (changed.pages) {
        sendMessage({
          type: "routes",
          routes: getRoutes().filter((r2) => !excludedRoutes.includes(r2))
        });
      }
      if (changed.extensions) {
        sendMessage({
          type: "extensions",
          extensions: getExtensions()
        });
      }
      if (changed.dependencies) {
        sendMessage({
          type: "dependencies",
          dependencies: getDependencies()
        });
      }
    }
  });
  window["dbg:piral"] = debugApi;
  start();
}
const debugRouteCache = {
  active: 0,
  paths: [],
  refresh: void 0
};
function freezeRouteRefresh() {
  debugRouteCache.active++;
  return () => {
    var _a;
    debugRouteCache.active--;
    if (!debugRouteCache.active) {
      (_a = debugRouteCache.refresh) === null || _a === void 0 ? void 0 : _a.call(debugRouteCache, (s) => s + 1);
    }
  };
}
function useDebugRouteHandling(paths) {
  const [_, triggerChange] = react.exports.useState(0);
  react.exports.useEffect(() => {
    debugRouteCache.refresh = triggerChange;
    return () => {
      debugRouteCache.refresh = void 0;
    };
  }, []);
  if (!debugRouteCache.active) {
    debugRouteCache.paths = paths;
  }
  return debugRouteCache.paths;
}
const debugRouteFilter = useDebugRouteHandling;
function installPiletEmulator(requestPilets, options) {
  const { addPilet: addPilet2, removePilet: removePilet2, integrate, piletApiFallback = "/$pilet-api" } = options;
  const loadPilets2 = sessionStorage.getItem("dbg:load-pilets") === "on";
  const noPilets = () => Promise.resolve([]);
  const requester = loadPilets2 ? requestPilets : noPilets;
  integrate(() => {
    const promise = requester();
    const piletApi = window["dbg:pilet-api"] || piletApiFallback;
    const initialTarget = /^https?:/.test(piletApi) ? piletApi : `${location.origin}${piletApi[0] === "/" ? "" : "/"}${piletApi}`;
    const updateTarget = initialTarget.replace("http", "ws");
    const ws = new WebSocket(updateTarget);
    const timeoutCache = {};
    const timeout = 150;
    const appendix = fetch(initialTarget).then((res) => res.json()).then((item) => Array.isArray(item) ? item : [item]);
    ws.onmessage = ({ data }) => {
      const hardRefresh = sessionStorage.getItem("dbg:hard-refresh") === "on";
      if (!hardRefresh) {
        const meta = JSON.parse(data);
        const name = meta.name;
        clearTimeout(timeoutCache[name]);
        timeoutCache[name] = setTimeout(() => {
          const unfreeze = freezeRouteRefresh();
          removePilet2(meta.name).then(() => {
            const clearConsole = sessionStorage.getItem("dbg:clear-console") === "on";
            if (clearConsole) {
              console.clear();
            }
            console.log("Updating pilet %c%s ...", "color: green; background: white; font-weight: bold", name);
          }).then(() => addPilet2(meta)).then(unfreeze, unfreeze);
        }, timeout);
      } else {
        location.reload();
      }
    };
    return promise.catch((err) => {
      console.error(`Requesting the pilets failed. We'll continue loading without pilets (DEBUG only).`, err);
      return [];
    }).then((pilets) => appendix.then((debugPilets) => {
      const debugPiletNames = debugPilets.map((m2) => m2.name);
      const feedPilets = pilets.filter((m2) => !debugPiletNames.includes(m2.name));
      return [...feedPilets, ...debugPilets];
    }));
  });
}
function integrateDebugger(context2, options, debug = {}) {
  installPiralDebug(Object.assign(Object.assign({}, debug), {
    addPilet: context2.addPilet,
    removePilet: context2.removePilet,
    updatePilet(pilet) {
      if (!pilet.disabled) {
        const { createApi } = options;
        const newApi = createApi(pilet);
        try {
          context2.injectPilet(pilet);
          pilet.setup(newApi);
        } catch (error) {
          console.error(error);
        }
      } else {
        context2.injectPilet(pilet);
      }
    },
    fireEvent: context2.emit,
    getDependencies() {
      return Object.keys(options.dependencies);
    },
    getExtensions() {
      return context2.readState((s) => Object.keys(s.registry.extensions));
    },
    getRoutes() {
      const registeredRoutes = context2.readState((state2) => Object.keys(state2.registry.pages));
      const componentRoutes = context2.readState((state2) => Object.keys(state2.routes));
      return [...componentRoutes, ...registeredRoutes];
    },
    getGlobalState() {
      return context2.readState((s) => s);
    },
    navigate(path, state2) {
      return context2.navigation.push(path, state2);
    },
    getPilets() {
      return context2.readState((s) => s.modules);
    },
    integrate(dbg) {
      context2.dispatch((s) => Object.assign(Object.assign({}, s), { components: Object.assign(Object.assign({}, s.components), dbg.components), routes: Object.assign(Object.assign({}, s.routes), dbg.routes), registry: Object.assign(Object.assign({}, s.registry), { wrappers: Object.assign(Object.assign({}, s.registry.wrappers), dbg.wrappers) }) }));
      context2.state.subscribe((current, previous) => {
        const pilets = current.modules !== previous.modules;
        const pages = current.registry.pages !== previous.registry.pages || current.routes !== previous.routes;
        const extensions = current.registry.extensions !== previous.registry.extensions;
        const state2 = current !== previous;
        dbg.onChange(previous, current, {
          pilets,
          pages,
          extensions,
          state: state2
        });
      });
    }
  }));
}
function integrateEmulator(context2, options) {
  installPiletEmulator(options.fetchPilets, {
    addPilet: context2.addPilet,
    removePilet: context2.removePilet,
    integrate(requester) {
      options.fetchPilets = requester;
    }
  });
}
function fillDependencies(deps) {
  deps["shell"] = {};
  deps["tslib"] = _0;
  deps["tslib@2.4.1"] = _0;
  deps["react"] = _1;
  deps["react@18.2.0"] = _1;
  deps["react-dom"] = _2;
  deps["react-dom@18.2.0"] = _2;
  deps["react-router"] = _3;
  deps["react-router@5.3.4"] = _3;
  deps["react-router-dom"] = _4;
  deps["react-router-dom@5.3.4"] = _4;
}
const publicPath = "/";
function createDefaultState() {
  return {
    app: {
      error: void 0,
      loading: typeof window !== "undefined"
    },
    components: {
      ErrorInfo: DefaultErrorInfo,
      LoadingIndicator: DefaultLoadingIndicator,
      Router: DefaultRouter,
      RouteSwitch: DefaultRouteSwitch,
      Layout: DefaultLayout
    },
    errorComponents: {},
    registry: {
      extensions: {},
      pages: {},
      wrappers: {}
    },
    routes: {},
    data: {},
    portals: {},
    modules: []
  };
}
function useRouteFilter(paths) {
  useCurrentNavigation();
  return debugRouteFilter(paths);
}
function useRoutes() {
  const routes = useGlobalState((s) => s.routes);
  const pages = useGlobalState((s) => s.registry.pages);
  const paths = [];
  Object.keys(routes).map((path) => paths.push({ path, Component: routes[path] }));
  Object.keys(pages).map((path) => paths.push({ path, Component: pages[path].component }));
  return useRouteFilter(paths);
}
function getPiralComponent(name) {
  return (props) => {
    const Component = useGlobalState((s) => s.components[name]);
    return Component ? react.exports.createElement(Component, Object.assign({}, props)) : null;
  };
}
const RegisteredErrorInfo = getPiralComponent("ErrorInfo");
const RegisteredLoadingIndicator = getPiralComponent("LoadingIndicator");
const RegisteredRouter = getPiralComponent("Router");
const RegisteredRouteSwitch = getPiralComponent("RouteSwitch");
const RegisteredLayout = getPiralComponent("Layout");
const RegisteredDebug = getPiralComponent("Debug");
class ErrorBoundary extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: void 0
    };
  }
  componentDidCatch(error) {
    const { piral, errorType } = this.props;
    const pilet = piral.meta.name;
    console.error(`[${pilet}] Exception in component of type "${errorType}".`, error);
    this.setState({
      error
    });
  }
  render() {
    const _a = this.props, { children, piral, errorType } = _a, renderProps = __rest(_a, ["children", "piral", "errorType"]);
    const { error } = this.state;
    const rest = renderProps;
    if (error) {
      const pilet = piral.meta.name;
      return react.exports.createElement(RegisteredErrorInfo, Object.assign({ type: errorType, error, pilet }, rest));
    }
    return react.exports.createElement(react.exports.Suspense, { fallback: react.exports.createElement(RegisteredLoadingIndicator, null) }, children);
  }
}
const PortalRenderer = ({ id: id2 }) => {
  const children = useGlobalState((m2) => m2.portals[id2]) || none;
  return defaultRender(children);
};
class ForeignComponentContainer extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.locals = {};
    this.handler = (ev) => {
      const { innerProps } = this.props;
      ev.stopPropagation();
      innerProps.piral.renderHtmlExtension(ev.detail.target, ev.detail.props);
    };
    this.setNode = (node) => {
      this.current = node;
    };
  }
  componentDidMount() {
    const node = this.current;
    const { $component, $context, innerProps } = this.props;
    const { mount } = $component;
    if (node && isfunc(mount)) {
      mount(node, innerProps, $context, this.locals);
      node.addEventListener("render-html", this.handler, false);
    }
    this.previous = node;
  }
  componentDidUpdate() {
    const { current, previous } = this;
    const { $component, $context, innerProps } = this.props;
    const { update } = $component;
    if (current !== previous) {
      previous && this.componentWillUnmount();
      current && this.componentDidMount();
    } else if (isfunc(update)) {
      update(current, innerProps, $context, this.locals);
    }
  }
  componentWillUnmount() {
    const node = this.previous;
    const { $component } = this.props;
    const { unmount } = $component;
    if (node && isfunc(unmount)) {
      unmount(node, this.locals);
      node.removeEventListener("render-html", this.handler, false);
    }
    this.previous = void 0;
  }
  render() {
    const { $portalId } = this.props;
    return react.exports.createElement("piral-portal", { pid: $portalId, ref: this.setNode });
  }
}
let portalIdBase = 123456;
function wrapReactComponent(Component, captured, Wrapper) {
  return (props) => react.exports.createElement(
    Wrapper,
    Object.assign({}, props),
    react.exports.createElement(Component, Object.assign({}, props, captured))
  );
}
function wrapForeignComponent(component, captured, Wrapper) {
  return react.exports.memo((props) => {
    const { destroyPortal: destroyPortal2, navigation } = useGlobalStateContext();
    const id2 = react.exports.useMemo(() => (portalIdBase++).toString(26), none);
    const context2 = react.exports.useMemo(() => ({ publicPath, navigation, router: navigation.router }), []);
    const innerProps = react.exports.useMemo(() => Object.assign(Object.assign({}, props), captured), [props]);
    react.exports.useEffect(() => () => destroyPortal2(id2), none);
    return react.exports.createElement(
      Wrapper,
      Object.assign({}, props),
      react.exports.createElement(PortalRenderer, { id: id2 }),
      react.exports.createElement(ForeignComponentContainer, { innerProps, "$portalId": id2, "$component": component, "$context": context2 })
    );
  });
}
function isNotExotic(component) {
  return !component.$$typeof;
}
function wrapComponent(converters, component, captured, Wrapper) {
  if (!component) {
    const pilet = captured.piral.meta.name;
    console.error(`[${pilet}] The given value is not a valid component.`);
    component = () => null;
  }
  if (typeof component === "object" && isNotExotic(component)) {
    const result = convertComponent(converters[component.type], component);
    return wrapForeignComponent(result, captured, Wrapper);
  }
  return wrapReactComponent(component, captured, Wrapper);
}
const wrapper = ({ children }) => defaultRender(children);
const renderExtensions = [
  {
    component: (props) => {
      const context2 = useGlobalStateContext();
      const converters = context2.converters;
      const piral = context2.apis._;
      const { component, props: args } = props.params;
      const Component = react.exports.useMemo(() => wrapComponent(converters, component, { piral }, wrapper), [component]);
      return react.exports.createElement(Component, Object.assign({}, args));
    },
    defaults: {},
    pilet: "",
    reference: {
      displayName: "AnyComponent"
    }
  }
];
function defaultOrder(extensions) {
  return extensions;
}
function ExtensionSlot(props) {
  const { name, render = defaultRender, empty, params, children, emptySkipsRender = false, order = defaultOrder } = props;
  const extensions = useGlobalState((s) => name ? s.registry.extensions[name] || none : renderExtensions);
  const isEmpty = extensions.length === 0 && isfunc(empty);
  const content = isEmpty ? [defaultRender(empty(), "empty")] : order(extensions).map(({ component: Component, reference, defaults = {} }, i) => react.exports.createElement(Component, { key: `${(reference === null || reference === void 0 ? void 0 : reference.displayName) || "_"}${i}`, children, params: Object.assign(Object.assign({}, defaults), params) }));
  if (isEmpty && emptySkipsRender) {
    return content[0];
  }
  return render(content);
}
ExtensionSlot.displayName = `ExtensionSlot`;
const Mediator = ({ options }) => {
  const { initialize: initialize2, readState: readState2 } = useGlobalStateContext();
  react.exports.useEffect(() => {
    const shouldLoad = readState2((s) => s.app.loading);
    if (shouldLoad) {
      const { connect, disconnect } = startLoadingPilets(options);
      const notifier = (error, pilets, loaded) => {
        initialize2(!loaded, error, pilets);
      };
      connect(notifier);
      return () => disconnect(notifier);
    }
  }, none);
  return null;
};
const PiralGlobals = () => {
  return react.exports.createElement(
    react.exports.Fragment,
    null,
    react.exports.createElement(PortalRenderer, { id: "root" }),
    react.exports.createElement(RegisteredDebug, null)
  );
};
const PiralRoutes = (_a) => {
  var { NotFound: NotFound2, RouteSwitch } = _a, props = __rest(_a, ["NotFound", "RouteSwitch"]);
  const paths = useRoutes();
  return react.exports.createElement(RouteSwitch, Object.assign({ NotFound: NotFound2, paths }, props));
};
PiralRoutes.displayName = "Routes";
const PiralSuspense = ({ children }) => {
  const { error, loading } = useGlobalState((m2) => m2.app);
  return error ? react.exports.createElement(RegisteredErrorInfo, { type: "loading", error }) : loading ? react.exports.createElement(RegisteredLoadingIndicator, null) : react.exports.createElement(react.exports.Fragment, null, children);
};
const ResponsiveLayout = ({ breakpoints = defaultBreakpoints, Layout, children }) => {
  const selected = useMedia(breakpoints, defaultLayouts, "desktop");
  return react.exports.createElement(Layout, { currentLayout: selected }, children);
};
ResponsiveLayout.displayName = "ResponsiveLayout";
const NotFound = (props) => react.exports.createElement(RegisteredErrorInfo, Object.assign({ type: "not_found" }, props));
const PiralView = ({ breakpoints, children }) => react.exports.createElement(
  react.exports.Fragment,
  null,
  react.exports.createElement(PiralGlobals, null),
  react.exports.createElement(
    PiralSuspense,
    null,
    react.exports.createElement(
      ResponsiveLayout,
      { breakpoints, Layout: RegisteredLayout },
      react.exports.createElement(PiralRoutes, { NotFound, RouteSwitch: RegisteredRouteSwitch })
    )
  ),
  children
);
PiralView.displayName = "PiralView";
function renderComponent(components, props) {
  const name = props.type;
  const Component = components[name];
  if (!Component) {
    const Unknown = components.unknown;
    if (Unknown) {
      return react.exports.createElement(Unknown, Object.assign({}, props, { type: "unknown" }));
    }
    return defaultRender(`Error: ${props.type}`);
  }
  return react.exports.createElement(Component, Object.assign({}, props));
}
const SwitchErrorInfo = (props) => {
  const components = useGlobalState((m2) => m2.errorComponents);
  return renderComponent(components, props);
};
if (typeof window !== "undefined" && "customElements" in window) {
  class PiralExtension extends HTMLElement {
    constructor() {
      super(...arguments);
      this.dispose = noop$2;
      this.update = noop$2;
      this.props = {
        name: this.getAttribute("name"),
        params: tryParseJson(this.getAttribute("params")),
        empty: void 0,
        children: reactifyContent(this.childNodes)
      };
    }
    get params() {
      return this.props.params;
    }
    set params(value) {
      this.props.params = value;
      this.update(this.props);
    }
    get name() {
      return this.props.name;
    }
    set name(value) {
      this.props.name = value;
      this.update(this.props);
    }
    get empty() {
      return this.props.empty;
    }
    set empty(value) {
      this.props.empty = value;
      this.update(this.props);
    }
    connectedCallback() {
      this.style.display = "contents";
      if (this.isConnected) {
        this.dispatchEvent(new CustomEvent("render-html", {
          bubbles: true,
          detail: {
            target: this,
            props: this.props
          }
        }));
      }
    }
    disconnectedCallback() {
      this.dispose();
      this.dispose = noop$2;
      this.update = noop$2;
    }
    attributeChangedCallback(name, _, newValue) {
      switch (name) {
        case "name":
          this.name = newValue;
          break;
        case "params":
          this.params = tryParseJson(newValue);
          break;
      }
    }
    static get observedAttributes() {
      return ["name", "params"];
    }
  }
  customElements.define(extensionName, PiralExtension);
  class PiralPortal extends HTMLElement {
    connectedCallback() {
      this.style.display = "contents";
    }
  }
  customElements.define(portalName, PiralPortal);
  class PiralSlot extends HTMLElement {
    connectedCallback() {
      this.style.display = "contents";
    }
  }
  customElements.define(slotName, PiralSlot);
}
function renderElement(context2, element, props) {
  if (typeof window !== "undefined") {
    let [id2, portal] = renderInDom(context2, element, ExtensionSlot, props);
    const evName = "extension-props-changed";
    const handler = (ev) => update(ev.detail);
    const dispose = () => {
      context2.hidePortal(id2, portal);
      element.removeEventListener(evName, handler);
    };
    const update = (newProps) => {
      [id2, portal] = changeDomPortal(id2, portal, context2, element, ExtensionSlot, newProps);
    };
    element.addEventListener(evName, handler);
    return [dispose, update];
  }
  return [noop$2, noop$2];
}
function initialize(ctx, loading, error, modules) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { app: Object.assign(Object.assign({}, state2.app), {
    error,
    loading
  }), modules }));
}
function addPilet(ctx, meta) {
  return ctx.options.loadPilet(meta).then((pilet) => ctx.injectPilet(pilet)).then((pilet) => runPilet(ctx.options.createApi, pilet, ctx.options.hooks)).then(noop$2);
}
function removePilet(ctx, name) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { modules: state2.modules.filter((m2) => m2.name !== name), registry: removeNested(state2.registry, (m2) => m2.pilet === name) }));
  ctx.emit("unload-pilet", {
    name
  });
  return Promise.resolve();
}
function injectPilet(ctx, pilet) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { modules: replaceOrAddItem(state2.modules, pilet, (m2) => m2.name === pilet.name), registry: removeNested(state2.registry, (m2) => m2.pilet === pilet.name) }));
  ctx.emit("unload-pilet", {
    name: pilet.name
  });
  return pilet;
}
function setComponent(ctx, name, component) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { components: withKey(state2.components, name, component) }));
}
function setErrorComponent(ctx, type, component) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { errorComponents: withKey(state2.errorComponents, type, component) }));
}
function setRoute(ctx, path, component) {
  ctx.dispatch(withRoute(path, component));
}
function includeProvider(ctx, provider) {
  ctx.dispatch(withProvider(provider));
}
function registerPage(ctx, name, value) {
  ctx.dispatch(withPage(name, value));
}
function unregisterPage(ctx, name) {
  ctx.dispatch(withoutPage(name));
}
function registerExtension(ctx, name, value) {
  ctx.dispatch(withExtension(name, value));
}
function unregisterExtension(ctx, name, reference) {
  ctx.dispatch(withoutExtension(name, reference));
}
function resetData(ctx) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { data: {} }));
}
function readDataItem(ctx, key) {
  return ctx.readState((state2) => state2.data[key]);
}
function readDataValue(ctx, key) {
  const item = readDataItem(ctx, key);
  return item && item.value;
}
function writeDataItem(ctx, key, value, owner, target, expires) {
  const isNull = !value && typeof value === "object";
  const data = isNull ? value : {
    value,
    owner,
    target,
    expires
  };
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { data: updateKey(state2.data, key, data) }));
  ctx.emit("store-data", {
    name: key,
    target,
    value,
    owner,
    expires
  });
}
function tryWriteDataItem(ctx, key, value, owner, target, expires) {
  const item = readDataItem(ctx, key);
  if (item && item.owner !== owner) {
    console.error(`Invalid data write to '${key}'. This item currently belongs to '${item.owner}' (write attempted from '${owner}'). The action has been ignored.`);
    return false;
  }
  writeDataItem(ctx, key, value, owner, target, expires);
  return true;
}
function defineAction(ctx, actionName, action) {
  ctx[actionName] = action.bind(ctx, ctx);
}
function defineActions(ctx, actions2) {
  for (const actionName of Object.keys(actions2)) {
    const action = actions2[actionName];
    defineAction(ctx, actionName, action);
  }
}
function destroyPortal(ctx, id2) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { portals: withoutKey(state2.portals, id2) }));
}
function hidePortal(ctx, id2, entry) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { portals: withKey(state2.portals, id2, excludeItem(state2.portals[id2], entry)) }));
}
function updatePortal(ctx, id2, current, next) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { portals: withKey(state2.portals, id2, replaceOrAddItem(state2.portals[id2], next, (m2) => m2 === current)) }));
}
function showPortal(ctx, id2, entry) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { portals: withKey(state2.portals, id2, includeItem(state2.portals[id2], entry)) }));
}
function dispatch(ctx, update) {
  const oldState = ctx.state.getState();
  const newState = update(oldState);
  if (!isSame(oldState, newState)) {
    ctx.state.setState(newState);
  }
}
function readState(ctx, read) {
  return read(ctx.state.getState());
}
var actions$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initialize,
  addPilet,
  removePilet,
  injectPilet,
  setComponent,
  setErrorComponent,
  setRoute,
  includeProvider,
  registerPage,
  unregisterPage,
  registerExtension,
  unregisterExtension,
  resetData,
  readDataItem,
  readDataValue,
  writeDataItem,
  tryWriteDataItem,
  defineAction,
  defineActions,
  destroyPortal,
  hidePortal,
  updatePortal,
  showPortal,
  dispatch,
  readState
}, Symbol.toStringTag, { value: "Module" }));
function createContext(state2, events) {
  const ctx = Object.assign(Object.assign({}, events), { apis: {}, converters: {
    html: ({ component }) => component
  }, navigation: createNavigation(), state: state2 });
  return ctx;
}
function includeActions(ctx, actions2) {
  const actionNames = Object.keys(actions2);
  for (const actionName of actionNames) {
    const action = actions2[actionName];
    ctx[actionName] = action.bind(ctx, ctx);
  }
}
function createActions$1(state2, events) {
  const context2 = createContext(state2, events);
  includeActions(context2, actions$5);
  return context2;
}
function createStore(createState) {
  let state2;
  const listeners2 = /* @__PURE__ */ new Set();
  const setState2 = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state2) : partial;
    if (nextState !== state2) {
      const previousState = state2;
      state2 = replace ? nextState : Object.assign({}, state2, nextState);
      listeners2.forEach((listener) => listener(state2, previousState));
    }
  };
  const getState2 = () => state2;
  const subscribeWithSelector = (listener, selector = getState2, equalityFn = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let currentSlice = selector(state2);
    function listenerToAdd() {
      const nextSlice = selector(state2);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }
    listeners2.add(listenerToAdd);
    return () => listeners2.delete(listenerToAdd);
  };
  const subscribe2 = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }
    listeners2.add(listener);
    return () => listeners2.delete(listener);
  };
  const destroy = () => listeners2.clear();
  const api = { setState: setState2, getState: getState2, subscribe: subscribe2, destroy };
  state2 = createState(setState2, getState2, api);
  return api;
}
const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? react.exports.useEffect : react.exports.useLayoutEffect;
function create(createState) {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selector = api.getState, equalityFn = Object.is) => {
    const [, forceUpdate] = react.exports.useReducer((c2) => c2 + 1, 0);
    const state2 = api.getState();
    const stateRef = react.exports.useRef(state2);
    const selectorRef = react.exports.useRef(selector);
    const equalityFnRef = react.exports.useRef(equalityFn);
    const erroredRef = react.exports.useRef(false);
    const currentSliceRef = react.exports.useRef();
    if (currentSliceRef.current === void 0) {
      currentSliceRef.current = selector(state2);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    if (stateRef.current !== state2 || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      newStateSlice = selector(state2);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state2;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    const stateBeforeSubscriptionRef = react.exports.useRef(state2);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState();
          const nextStateSlice = selectorRef.current(nextState);
          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error) {
          erroredRef.current = true;
          forceUpdate();
        }
      };
      const unsubscribe = api.subscribe(listener);
      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    react.exports.useDebugValue(sliceToReturn);
    return sliceToReturn;
  };
  Object.assign(useStore, api);
  useStore[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const items = [useStore, api];
    return {
      next() {
        const done = items.length <= 0;
        return { value: items.shift(), done };
      }
    };
  };
  return useStore;
}
function extend(defaultState, customState) {
  for (const key of Object.keys(customState)) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = customState[key];
    const original = defaultState[key];
    const nested = typeof original === "object" && typeof value === "object";
    defaultState[key] = nested ? extend(original, value) : value;
  }
  return defaultState;
}
function createGlobalState(customState = {}) {
  const defaultState = createDefaultState();
  return create(() => extend(defaultState, customState));
}
const DefaultWrapper = (props) => defaultRender(props.children);
function getWrapper(wrappers, wrapperType) {
  const WrapAll = wrappers["*"];
  const WrapType = wrappers[wrapperType];
  if (WrapAll && WrapType) {
    return (props) => react.exports.createElement(
      WrapAll,
      Object.assign({}, props),
      react.exports.createElement(WrapType, Object.assign({}, props))
    );
  }
  return WrapType || WrapAll || DefaultWrapper;
}
function makeWrapper(context2, outerProps, wrapperType, errorType) {
  const OuterWrapper = context2.readState((m2) => getWrapper(m2.registry.wrappers, wrapperType));
  return (props) => react.exports.createElement(
    OuterWrapper,
    Object.assign({}, outerProps, props),
    react.exports.createElement(ErrorBoundary, Object.assign({}, outerProps, props, { errorType }), props.children)
  );
}
function withApi(context2, component, piral, errorType, wrapperType = errorType, captured = {}) {
  const outerProps = Object.assign(Object.assign({}, captured), { piral });
  const converters = context2.converters;
  const Wrapper = makeWrapper(context2, outerProps, wrapperType, errorType);
  return wrapComponent(converters, component, outerProps, Wrapper);
}
function createCoreApi(context2) {
  return (api, meta) => {
    const pilet = meta.name;
    return {
      getData(name) {
        return context2.readDataValue(name);
      },
      setData(name, value, options) {
        const { target = "memory", expires } = createDataOptions(options);
        const expiration = getDataExpiration(expires);
        return context2.tryWriteDataItem(name, value, pilet, target, expiration);
      },
      registerPage(route, arg, meta2 = {}) {
        const component = withApi(context2, arg, api, "page", void 0, { meta: meta2 });
        context2.registerPage(route, {
          pilet,
          meta: meta2,
          component
        });
        return () => api.unregisterPage(route);
      },
      unregisterPage(route) {
        context2.unregisterPage(route);
      },
      registerExtension(name, reference, defaults) {
        const component = withApi(context2, reference, api, "extension");
        context2.registerExtension(name, {
          pilet,
          component,
          reference,
          defaults
        });
        return () => api.unregisterExtension(name, reference);
      },
      unregisterExtension(name, arg) {
        context2.unregisterExtension(name, arg);
      },
      renderHtmlExtension(element, props) {
        const [dispose] = renderElement(context2, element, props);
        return dispose;
      },
      Extension: ExtensionSlot
    };
  };
}
function createExtenders(context2, apis) {
  const creators = [createCoreApi, ...apis.filter(isfunc)];
  return creators.map((c2) => {
    const ctx = c2(context2);
    if (isfunc(ctx)) {
      return ctx;
    } else {
      return () => Object.assign({}, ctx);
    }
  });
}
function defaultApiFactory(context2, apis) {
  const extenders = createExtenders(context2, apis);
  return (target) => {
    const api = initializeApi(target, context2);
    context2.apis[target.name] = api;
    return mergeApis(api, extenders, target);
  };
}
const globalDependencies = {};
if (isfunc(fillDependencies)) {
  fillDependencies(globalDependencies);
}
function defaultDependencySelector(dependencies) {
  return dependencies;
}
function defaultModuleRequester() {
  return Promise.resolve([]);
}
function createPiletOptions({ hooks, context: context2, loaders, loaderConfig, availablePilets, strategy, createApi, loadPilet, requestPilets, shareDependencies, debug }) {
  const options = {
    config: loaderConfig,
    strategy,
    loadPilet: extendLoader(loadPilet !== null && loadPilet !== void 0 ? loadPilet : getDefaultLoader(loaderConfig), loaders),
    createApi,
    pilets: availablePilets,
    fetchPilets: requestPilets,
    hooks,
    dependencies: shareDependencies(globalDependencies)
  };
  integrateDebugger(context2, options, debug);
  integrateEmulator(context2, options);
  return options;
}
function createInstance(config = {}) {
  const { id: id2 = generateId(), state: state2, actions: actions2, availablePilets = [], plugins, requestPilets = defaultModuleRequester, loaderConfig, async = false, shareDependencies = defaultDependencySelector, loadPilet, loaders, debug, apiFactory = defaultApiFactory } = config;
  const globalState = createGlobalState(state2);
  const events = createListener(globalState);
  const context2 = createActions$1(globalState, events);
  const definedPlugins = plugins || [];
  const usedPlugins = Array.isArray(definedPlugins) ? definedPlugins : [definedPlugins];
  const createApi = apiFactory(context2, usedPlugins);
  const root2 = createApi({
    name: "_",
    version: "0",
    spec: "v0",
    basePath: "",
    link: "",
    config: {},
    dependencies: {}
  });
  const options = createPiletOptions({
    context: context2,
    createApi,
    loaders,
    loadPilet,
    availablePilets,
    loaderConfig,
    shareDependencies,
    strategy: isfunc(async) ? async : async ? blazingStrategy : standardStrategy,
    requestPilets,
    debug
  });
  if (actions2) {
    includeActions(context2, actions2);
  }
  context2.options = options;
  return __assign(events, {
    id: id2,
    createApi,
    context: context2,
    root: root2,
    options
  });
}
const RootListener = () => {
  const context2 = useGlobalStateContext();
  react.exports.useLayoutEffect(() => {
    if (typeof document !== "undefined") {
      const handler = (ev) => {
        ev.stopPropagation();
        const { target, props } = ev.detail;
        const [dispose, update] = renderElement(context2, target, props);
        target.dispose = dispose;
        target.update = update;
      };
      document.body.addEventListener("render-html", handler, false);
      return () => {
        document.body.removeEventListener("render-html", handler, false);
      };
    }
  }, [context2]);
  return null;
};
const PiralProvider = ({ children }) => {
  const Provider = useGlobalState((m2) => m2.provider || react.exports.Fragment);
  return react.exports.createElement(Provider, null, children);
};
const PiralContext = ({ instance: instance2 = createInstance(), children }) => react.exports.createElement(
  StateContext.Provider,
  { value: instance2.context },
  react.exports.createElement(Mediator, { options: instance2.options, key: instance2.id }),
  react.exports.createElement(RootListener, null),
  react.exports.createElement(PiralProvider, null, children)
);
PiralContext.displayName = "PiralContext";
const Piral = ({ instance: instance2 = createInstance(), breakpoints, children }) => react.exports.createElement(
  PiralContext,
  { instance: instance2 },
  react.exports.createElement(
    RegisteredRouter,
    { publicPath },
    react.exports.createElement(PiralView, { breakpoints }, children)
  )
);
Piral.displayName = "Piral";
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
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
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
function createActions(localizer) {
  return {
    selectLanguage(ctx, selected) {
      ctx.dispatch((state2) => {
        localizer.language = selected;
        const previousLanguage = state2.language.selected;
        const currentLanguage = selected;
        setTimeout(() => {
          ctx.emit("select-language", {
            previousLanguage,
            currentLanguage
          });
        }, 0);
        return Object.assign(Object.assign({}, state2), { language: Object.assign(Object.assign({}, state2.language), { loading: selected === void 0, selected }) });
      });
    },
    translate(_, key, variables) {
      return localizer && localizer.localizeGlobal(key, variables);
    },
    setTranslations(ctx, language, data) {
      localizer.messages[language] = data.global;
      for (const item of data.locals) {
        const api = ctx.apis[item.name];
        if (api) {
          const translations = api.getTranslations();
          translations[language] = item.value;
          api.setTranslations(translations);
        }
      }
    },
    getTranslations(ctx, language) {
      return {
        global: localizer.messages[language],
        locals: Object.keys(ctx.apis).map((name) => ({
          name,
          value: ctx.apis[name].getTranslations()[language]
        }))
      };
    }
  };
}
function defaultFallback(key, language) {
  {
    return language ? "..." : "";
  }
}
function formatMessage(message, variables) {
  return message.replace(/{{\s*([A-Za-z0-9_.]+)\s*}}/g, (_match, p1) => {
    return p1 in variables ? variables[p1] || "" : `{{${p1}}}`;
  });
}
class Localizer {
  constructor(messages, language, languages, fallback = defaultFallback) {
    this.messages = messages;
    this.language = language;
    this.languages = languages;
    this.fallback = fallback;
  }
  localizeGlobal(key, variables) {
    return this.localizeBase(key, variables);
  }
  localizeLocal(localMessages, key, variables) {
    const message = this.translateMessage(localMessages, key, variables);
    if (message === void 0) {
      return this.localizeBase(key, variables);
    }
    return message;
  }
  localizeBase(key, variables) {
    const message = this.translateMessage(this.messages, key, variables);
    if (message === void 0) {
      return this.fallback(key, this.language);
    }
    return message;
  }
  translateMessage(messages, key, variables) {
    const language = this.language;
    const translations = language && messages[language];
    const translation = translations && translations[key];
    return translation && (variables ? formatMessage(translation, variables) : translation);
  }
}
const DefaultPicker = (props) => defaultRender(void 0);
function setupLocalizer(config = {}) {
  const msgs = config.messages || {};
  const languages = Object.keys(msgs);
  const defaultLang = languages[0] || "en";
  const computeLang = config.language;
  const usedLang = typeof computeLang === "function" ? computeLang(languages, defaultLang, "en") : computeLang;
  const language = usedLang || defaultLang;
  return new Localizer(msgs, language, languages.length ? languages : [language], config.fallback);
}
function createLocaleApi(localizer = setupLocalizer()) {
  return (context2) => {
    context2.defineActions(createActions(localizer));
    context2.dispatch((state2) => Object.assign(Object.assign({}, state2), { components: Object.assign({ LanguagesPicker: DefaultPicker }, state2.components), language: {
      loading: false,
      available: localizer.languages,
      selected: localizer.language
    } }));
    return (api) => {
      let localTranslations = {};
      return {
        addTranslations(messages, isOverriding = true) {
          const messagesToMerge = messages;
          if (isOverriding) {
            messagesToMerge.unshift(localizer.messages);
          } else {
            messagesToMerge.push(localizer.messages);
          }
          this.setTranslations(cjs.all(messagesToMerge));
        },
        getCurrentLanguage(cb2) {
          const selected = context2.readState((s) => s.language.selected);
          if (cb2) {
            cb2(selected);
            const handler = (ev) => {
              cb2(ev.currentLanguage);
            };
            api.on("select-language", handler);
            return () => api.off("select-language", handler);
          }
          return selected;
        },
        setTranslations(messages) {
          localTranslations = messages;
        },
        getTranslations() {
          return localTranslations;
        },
        translate(tag, variables) {
          return localizer.localizeLocal(localTranslations, tag, variables);
        }
      };
    };
  };
}
function registerTile(ctx, name, value) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { tiles: withKey(state2.registry.tiles, name, value) }) }));
}
function unregisterTile(ctx, name) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { tiles: withoutKey(state2.registry.tiles, name) }) }));
}
var actions$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  registerTile,
  unregisterTile
}, Symbol.toStringTag, { value: "Module" }));
const PiralDashboardContainer = getPiralComponent("DashboardContainer");
const PiralDashboardTile = getPiralComponent("DashboardTile");
const Dashboard = (props) => {
  const tiles = useGlobalState((s) => s.registry.tiles);
  const { filter = () => true } = props;
  const children = Object.keys(tiles).filter((tile) => filter(tiles[tile])).map((tile) => {
    const { component: Component, preferences } = tiles[tile];
    const { initialColumns = 1, initialRows = 1, resizable = false } = preferences;
    return react.exports.createElement(
      PiralDashboardTile,
      { key: tile, columns: initialColumns, rows: initialRows, resizable, meta: preferences },
      react.exports.createElement(Component, { columns: initialColumns, rows: initialRows })
    );
  });
  return react.exports.createElement(PiralDashboardContainer, Object.assign({}, props, { children }));
};
Dashboard.displayName = "Dashboard";
const DefaultContainer$1 = (props) => react.exports.createElement(ExtensionSlot, { name: "dashboard", params: props, empty: () => defaultRender(props.children, "default_dashboard") });
const DefaultTile = (props) => defaultRender(props.children);
function getPreferences(defaultPreferences, customPreferences = {}) {
  return Object.assign(Object.assign({}, defaultPreferences), customPreferences);
}
function getTiles(items, defaultPreferences) {
  const tiles = {};
  let i = 0;
  for (const { component, preferences } of items) {
    tiles[`global-${i++}`] = {
      pilet: void 0,
      component,
      preferences: getPreferences(defaultPreferences, preferences)
    };
  }
  return tiles;
}
function withTiles(tiles) {
  return (state2) => Object.assign(Object.assign({}, state2), { components: Object.assign({ DashboardTile: DefaultTile, DashboardContainer: DefaultContainer$1 }, state2.components), registry: Object.assign(Object.assign({}, state2.registry), { tiles }) });
}
function withRoutes(routes) {
  return (state2) => Object.assign(Object.assign({}, state2), { routes: Object.assign(Object.assign({}, state2.routes), routes.reduce((newRoutes, route) => {
    newRoutes[route] = Dashboard;
    return newRoutes;
  }, {})) });
}
function createDashboardApi(config = {}) {
  const { tiles = [], defaultPreferences = {}, routes = ["/"] } = config;
  return (context2) => {
    context2.defineActions(actions$4);
    context2.dispatch(withAll(withTiles(getTiles(tiles, defaultPreferences)), withRootExtension("piral-dashboard", Dashboard), withRoutes(routes)));
    return (api, target) => {
      const pilet = target.name;
      let next = 0;
      return {
        registerTile(name, arg, preferences) {
          if (typeof name !== "string") {
            preferences = arg;
            arg = name;
            name = next++;
          }
          const id2 = buildName(pilet, name);
          context2.registerTile(id2, {
            pilet,
            component: withApi(context2, arg, api, "tile"),
            preferences: getPreferences(defaultPreferences, preferences)
          });
          return () => api.unregisterTile(name);
        },
        unregisterTile(name) {
          const id2 = buildName(pilet, name);
          context2.unregisterTile(id2);
        }
      };
    };
  };
}
function registerMenuItem(ctx, name, value) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { menuItems: withKey(state2.registry.menuItems, name, value) }) }));
}
function unregisterMenuItem(ctx, name) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { menuItems: withoutKey(state2.registry.menuItems, name) }) }));
}
var actions$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  registerMenuItem,
  unregisterMenuItem
}, Symbol.toStringTag, { value: "Module" }));
const DefaultContainer = (props) => react.exports.createElement(ExtensionSlot, { name: `menu_${props.type}`, params: props, empty: () => defaultRender(props.children, "default_menu") });
const DefaultItem = (props) => defaultRender(props.children);
const PiralMenuContainer = getPiralComponent("MenuContainer");
const PiralMenuItem = getPiralComponent("MenuItem");
const Menu = ({ type = "general" }) => {
  const menuItems = useGlobalState((s) => s.registry.menuItems);
  const renderItems = Object.keys(menuItems).filter((name) => menuItems[name].settings.type === type).map((name) => ({
    name,
    Component: menuItems[name].component,
    meta: menuItems[name].settings
  }));
  const children = renderItems.map(({ name, Component, meta }) => react.exports.createElement(
    PiralMenuItem,
    { key: name, type, meta },
    react.exports.createElement(Component, null)
  ));
  return react.exports.createElement(PiralMenuContainer, { type }, children);
};
Menu.displayName = "Menu";
function getSettings(defaultSettings, customSettings = {}) {
  return Object.assign(Object.assign({ type: "general" }, defaultSettings), customSettings);
}
function getMenuItems(items, defaultSettings) {
  const menuItems = {};
  let i = 0;
  for (const { component, settings } of items) {
    menuItems[`global-${i++}`] = {
      pilet: void 0,
      component,
      settings: getSettings(defaultSettings, settings)
    };
  }
  return menuItems;
}
function withMenu(menuItems) {
  return (state2) => Object.assign(Object.assign({}, state2), { components: Object.assign({ MenuContainer: DefaultContainer, MenuItem: DefaultItem }, state2.components), registry: Object.assign(Object.assign({}, state2.registry), { menuItems }) });
}
function createMenuApi(config = {}) {
  const { items = [], defaultSettings = {} } = config;
  return (context2) => {
    context2.defineActions(actions$3);
    context2.dispatch(withAll(withMenu(getMenuItems(items, defaultSettings)), withRootExtension("piral-menu", Menu)));
    return (api, target) => {
      const pilet = target.name;
      let next = 0;
      return {
        registerMenu(name, arg, settings) {
          if (typeof name !== "string") {
            settings = arg;
            arg = name;
            name = next++;
          }
          const id2 = buildName(pilet, name);
          context2.registerMenuItem(id2, {
            pilet,
            component: withApi(context2, arg, api, "menu"),
            settings: getSettings(defaultSettings, settings)
          });
          return () => api.unregisterMenu(name);
        },
        unregisterMenu(name) {
          const id2 = buildName(pilet, name);
          context2.unregisterMenuItem(id2);
        }
      };
    };
  };
}
function openNotification(ctx, dialog) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { notifications: prependItem(state2.notifications, dialog) }));
}
function closeNotification(ctx, dialog) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { notifications: excludeOn(state2.notifications, (notification) => notification.id === dialog.id) }));
}
var actions$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  openNotification,
  closeNotification
}, Symbol.toStringTag, { value: "Module" }));
const DefaultHost$1 = (props) => react.exports.createElement("div", { className: "piral-notifications-host", key: "default_notifications" }, props.children);
const DefaultToast = ({ children }) => defaultRender(children);
const PiralNotificationsHost = getPiralComponent("NotificationsHost");
const PiralNotificationsToast = getPiralComponent("NotificationsToast");
const Notifications = () => {
  const notifications = useGlobalState((s) => s.notifications);
  return react.exports.createElement(PiralNotificationsHost, null, notifications.map(({ component: Component, close, options, id: id2 }) => react.exports.createElement(
    PiralNotificationsToast,
    { onClose: close, options, key: id2 },
    react.exports.createElement(Component, { onClose: close, options })
  )));
};
Notifications.displayName = "Notifications";
function isElement(element) {
  return react.exports.isValidElement(element);
}
function toComponent(component) {
  if (typeof component === "string") {
    const text = component;
    return () => defaultRender(text);
  } else if (react.exports.isValidElement(component)) {
    const element = component;
    return () => element;
  }
  return component;
}
function createNotification(context2, id2, content, defaultOptions, customOptions = {}) {
  const options = Object.assign(Object.assign({}, defaultOptions), customOptions);
  const notification = {
    id: id2,
    component: toComponent(content),
    options,
    close() {
      setTimeout(() => context2.closeNotification(notification), 0);
    }
  };
  if (typeof options.autoClose === "number" && options.autoClose > 0) {
    setTimeout(notification.close, options.autoClose);
  }
  return notification;
}
function getNotifications(context2, messages, defaultOptions) {
  const notifications = [];
  let i = 0;
  for (const { content, options } of messages) {
    notifications.push(createNotification(context2, `global-${i++}`, content, defaultOptions, options));
  }
  return notifications;
}
function withNotifications(notifications) {
  return (state2) => Object.assign(Object.assign({}, state2), { components: Object.assign({ NotificationsHost: DefaultHost$1, NotificationsToast: DefaultToast }, state2.components), notifications });
}
function createNotificationsApi(config = {}) {
  const { defaultOptions = {}, selectId = () => `${~~(Math.random() * 1e4)}`, messages = [] } = config;
  return (context2) => {
    context2.defineActions(actions$2);
    context2.dispatch(withAll(withNotifications(getNotifications(context2, messages, defaultOptions)), withRootExtension("piral-notifications", Notifications)));
    return (api) => ({
      showNotification(content, customOptions) {
        const Component = typeof content === "string" ? content : isElement(content) ? content : withApi(context2, content, api, "extension");
        const notification = createNotification(context2, selectId(), Component, defaultOptions, customOptions);
        context2.openNotification(notification);
        return notification.close;
      }
    });
  };
}
function openModal(ctx, dialog) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { modals: prependItem(state2.modals, dialog) }));
}
function closeModal(ctx, dialog) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { modals: excludeOn(state2.modals, (modal) => modal.id === dialog.id) }));
}
function registerModal(ctx, name, value) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { modals: withKey(state2.registry.modals, name, value) }) }));
}
function unregisterModal(ctx, name) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { registry: Object.assign(Object.assign({}, state2.registry), { modals: withoutKey(state2.registry.modals, name) }) }));
}
var actions$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  openModal,
  closeModal,
  registerModal,
  unregisterModal
}, Symbol.toStringTag, { value: "Module" }));
const DefaultHost = (props) => react.exports.createElement("div", { className: "piral-modals-host" }, props.open && react.exports.createElement("div", { className: "piral-modals-overlay" }, props.children));
const DefaultDialog = (props) => defaultRender(props.children);
const PiralModalsHost = getPiralComponent("ModalsHost");
const PiralModalsDialog = getPiralComponent("ModalsDialog");
function closeAll(modals) {
  modals.forEach((m2) => m2.close());
}
function findModal(modals, name) {
  if (name) {
    const [modal] = Object.keys(modals).filter((m2) => modals[m2].name === name).map((m2) => modals[m2]);
    return modal;
  }
  return void 0;
}
const Modals = () => {
  const modals = useGlobalState((s) => s.registry.modals);
  const dialogs = useGlobalState((s) => s.modals);
  const close = () => closeAll(dialogs);
  const children = dialogs.map((n2) => {
    const reg = modals[n2.name] || findModal(modals, n2.alternative);
    const Component = reg && reg.component;
    const defaults = reg && reg.defaults;
    const options = Object.assign(Object.assign({}, defaults), n2.options);
    return Component && react.exports.createElement(
      PiralModalsDialog,
      Object.assign({}, n2, { options, defaults: reg.defaults, layout: reg.layout, key: n2.name }),
      react.exports.createElement(Component, { onClose: n2.close, options })
    );
  }).filter(Boolean);
  const open = children.length > 0;
  return react.exports.createElement(PiralModalsHost, { open, close }, children);
};
Modals.displayName = "Modals";
function getModalDialogs(dialogs) {
  const modals = {};
  for (const { name, component, defaults, layout: layout2 = {} } of dialogs) {
    modals[`global-${name}`] = {
      pilet: void 0,
      name,
      component,
      defaults,
      layout: layout2
    };
  }
  return modals;
}
function withModals(modals) {
  return (state2) => Object.assign(Object.assign({}, state2), { components: Object.assign({ ModalsHost: DefaultHost, ModalsDialog: DefaultDialog }, state2.components), registry: Object.assign(Object.assign({}, state2.registry), { modals }), modals: [] });
}
function createModalsApi(config = {}) {
  const { dialogs = [], selectId = (name) => `${name}-${~~(Math.random() * 1e4)}` } = config;
  return (context2) => {
    context2.defineActions(actions$1);
    context2.dispatch(withAll(withModals(getModalDialogs(dialogs)), withRootExtension("piral-modals", Modals)));
    return (api, target) => {
      const pilet = target.name;
      return {
        showModal(simpleName, options) {
          const name = buildName(pilet, simpleName);
          const dialog = {
            id: selectId(name),
            name,
            alternative: simpleName,
            options,
            close() {
              context2.closeModal(dialog);
            }
          };
          context2.openModal(dialog);
          return dialog.close;
        },
        registerModal(name, arg, defaults, layout2 = {}) {
          const id2 = buildName(pilet, name);
          context2.registerModal(id2, {
            pilet,
            name,
            component: withApi(context2, arg, api, "modal"),
            defaults,
            layout: layout2
          });
          return () => api.unregisterModal(name);
        },
        unregisterModal(name) {
          const id2 = buildName(pilet, name);
          context2.unregisterModal(id2);
        }
      };
    };
  };
}
function createFeed(ctx, id2) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { feeds: withKey(state2.feeds, id2, {
    data: void 0,
    error: void 0,
    loaded: false,
    loading: false
  }) }));
}
function destroyFeed(ctx, id2) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { feeds: withoutKey(state2.feeds, id2) }));
}
function loadFeed(ctx, options) {
  const { id: id2 } = options;
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { feeds: withKey(state2.feeds, id2, {
    data: void 0,
    error: void 0,
    loaded: false,
    loading: true
  }) }));
  return options.initialize().then((baseData) => {
    loadedFeed(ctx, id2, baseData, void 0);
    options.dispose = options.connect((item) => {
      updateFeed(ctx, id2, item, options.update);
    });
  }, (err) => loadedFeed(ctx, id2, void 0, err));
}
function loadedFeed(ctx, id2, data, error) {
  ctx.dispatch((state2) => Object.assign(Object.assign({}, state2), { feeds: withKey(state2.feeds, id2, {
    loading: false,
    loaded: true,
    error,
    data
  }) }));
}
function updateFeed(ctx, id2, item, reducer) {
  const feed = ctx.readState((state2) => state2.feeds[id2]);
  const result = reducer(feed.data, item);
  if (result instanceof Promise) {
    return result.then((data) => loadedFeed(ctx, id2, data, void 0)).catch((error) => loadedFeed(ctx, id2, void 0, error));
  } else if (result !== feed.data) {
    loadedFeed(ctx, id2, result, void 0);
  }
}
var actions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFeed,
  destroyFeed,
  loadFeed,
  loadedFeed,
  updateFeed
}, Symbol.toStringTag, { value: "Module" }));
function useFeed(options) {
  const { loaded, loading, error, data } = useGlobalState((s) => s.feeds[options.id]);
  const load = useAction("loadFeed");
  react.exports.useEffect(() => {
    if (!loaded && !loading) {
      load(options);
    }
  }, [loaded]);
  return [loaded, data, error];
}
function withFeed(Component, options) {
  const FeedView = (props) => {
    const [loaded, data, error] = useFeed(options);
    if (!loaded) {
      return react.exports.createElement(RegisteredLoadingIndicator, null);
    } else if (data) {
      return react.exports.createElement(Component, Object.assign({}, props, { data }));
    } else {
      return react.exports.createElement(RegisteredErrorInfo, { type: "feed", error });
    }
  };
  FeedView.displayName = `FeedView_${options.id}`;
  return FeedView;
}
const noop = () => {
};
function createFeedOptions(id2, resolver) {
  if (isfunc(resolver)) {
    return {
      id: id2,
      initialize() {
        return resolver();
      },
      connect() {
        return noop;
      },
      update(data) {
        return Promise.resolve(data);
      },
      immediately: false,
      reducers: {}
    };
  } else {
    return {
      id: id2,
      initialize() {
        return resolver.initialize();
      },
      connect(cb2) {
        if (typeof resolver.connect === "function") {
          return resolver.connect(cb2);
        } else {
          return noop;
        }
      },
      update(data, item) {
        if (typeof resolver.update === "function") {
          return resolver.update(data, item);
        } else {
          return Promise.resolve(data);
        }
      },
      immediately: resolver.immediately,
      reducers: resolver.reducers || {}
    };
  }
}
function createFeedsApi(config = {}) {
  return (context2) => {
    context2.defineActions(actions);
    context2.dispatch((state2) => Object.assign(Object.assign({}, state2), { feeds: {} }));
    return (_, target) => {
      let feeds = 0;
      return {
        createConnector(resolver) {
          const id2 = buildName(target.name, feeds++);
          const options = createFeedOptions(id2, resolver);
          const invalidate = () => {
            var _a;
            (_a = options.dispose) === null || _a === void 0 ? void 0 : _a.call(options);
            context2.createFeed(options.id);
          };
          if (options.immediately) {
            context2.loadFeed(options);
          } else {
            invalidate();
          }
          const connect = (component) => withFeed(component, options);
          Object.keys(options.reducers).forEach((type) => {
            const reducer = options.reducers[type];
            if (typeof reducer === "function") {
              connect[type] = (...args) => {
                context2.updateFeed(id2, args, (data, item) => reducer.call(connect, data, ...item));
              };
            }
          });
          connect.invalidate = invalidate;
          return connect;
        }
      };
    };
  };
}
function createStandardApi(settings = {}) {
  const { locale = void 0, dashboard = void 0, menu = void 0, notifications = void 0, modals = void 0, feeds = void 0 } = settings;
  return [
    locale !== false && createLocaleApi(locale),
    dashboard !== false && createDashboardApi(dashboard),
    menu !== false && createMenuApi(menu),
    notifications !== false && createNotificationsApi(notifications),
    modals !== false && createModalsApi(modals),
    feeds !== false && createFeedsApi(feeds)
  ].filter(Boolean);
}
const MenuItem = ({ children }) => /* @__PURE__ */ react.exports.createElement("li", {
  className: "nav-item"
}, children);
const defaultTiles = /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement("div", {
  className: "tile rows-2 cols-2"
}, /* @__PURE__ */ react.exports.createElement("div", {
  className: "teaser"
}, /* @__PURE__ */ react.exports.createElement("a", {
  href: "https://piral.io/"
}, "Piral"), /* @__PURE__ */ react.exports.createElement("br", null), "for next generation portals")), /* @__PURE__ */ react.exports.createElement("div", {
  className: "tile rows-2 cols-2"
}, /* @__PURE__ */ react.exports.createElement("div", {
  className: "teaser"
}, /* @__PURE__ */ react.exports.createElement("a", {
  href: "https://www.typescriptlang.org/"
}, "TypeScript"), /* @__PURE__ */ react.exports.createElement("br", null), "for writing scalable web apps")), /* @__PURE__ */ react.exports.createElement("div", {
  className: "tile rows-2 cols-2"
}, /* @__PURE__ */ react.exports.createElement("div", {
  className: "teaser"
}, /* @__PURE__ */ react.exports.createElement("a", {
  href: "https://reactjs.org/"
}, "React"), /* @__PURE__ */ react.exports.createElement("br", null), "for building components")), /* @__PURE__ */ react.exports.createElement("div", {
  className: "tile rows-2 cols-2"
}, /* @__PURE__ */ react.exports.createElement("div", {
  className: "teaser"
}, /* @__PURE__ */ react.exports.createElement("a", {
  href: "http://getbootstrap.com/"
}, "Bootstrap"), /* @__PURE__ */ react.exports.createElement("br", null), "for layout and styling")), /* @__PURE__ */ react.exports.createElement("div", {
  className: "tile rows-2 cols-2"
}, /* @__PURE__ */ react.exports.createElement("div", {
  className: "teaser"
}, /* @__PURE__ */ react.exports.createElement("a", {
  href: "https://sass-lang.com"
}, "Sass"), /* @__PURE__ */ react.exports.createElement("br", null), "for crafting custom styles")));
const defaultMenuItems = /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(MenuItem, {
  type: "general",
  meta: {}
}, /* @__PURE__ */ react.exports.createElement(Link, {
  className: "nav-link text-dark",
  to: "/not-found"
}, "Not Found")));
const errors = {
  not_found: () => /* @__PURE__ */ react.exports.createElement("div", null, /* @__PURE__ */ react.exports.createElement("p", {
    className: "error"
  }, "Could not find the requested page. Are you sure it exists?"), /* @__PURE__ */ react.exports.createElement("p", null, "Go back ", /* @__PURE__ */ react.exports.createElement(Link, {
    to: "/"
  }, "to the dashboard"), "."))
};
const layout = {
  ErrorInfo: (props) => /* @__PURE__ */ react.exports.createElement("div", null, /* @__PURE__ */ react.exports.createElement("h1", null, "Error"), /* @__PURE__ */ react.exports.createElement(SwitchErrorInfo, {
    ...props
  })),
  DashboardContainer: ({ children }) => /* @__PURE__ */ react.exports.createElement("div", null, /* @__PURE__ */ react.exports.createElement("h1", null, "Hello, world!"), /* @__PURE__ */ react.exports.createElement("p", null, "Welcome to your new microfrontend app shell, built with:"), /* @__PURE__ */ react.exports.createElement("div", {
    className: "tiles"
  }, defaultTiles, children)),
  DashboardTile: ({ columns, rows, children }) => /* @__PURE__ */ react.exports.createElement("div", {
    className: `tile cols-${columns} rows-${rows}`
  }, children),
  Layout: ({ children }) => /* @__PURE__ */ react.exports.createElement("div", null, /* @__PURE__ */ react.exports.createElement(Notifications, null), /* @__PURE__ */ react.exports.createElement(Menu, {
    type: "general"
  }), /* @__PURE__ */ react.exports.createElement("div", {
    className: "container"
  }, children)),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = react.exports.useState(true);
    return /* @__PURE__ */ react.exports.createElement("header", null, /* @__PURE__ */ react.exports.createElement("nav", {
      className: "navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
    }, /* @__PURE__ */ react.exports.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ react.exports.createElement(Link, {
      className: "navbar-brand",
      to: "/"
    }, "Piral"), /* @__PURE__ */ react.exports.createElement("button", {
      "aria-label": "Toggle navigation",
      type: "button",
      onClick: () => setCollapsed(!collapsed),
      className: "navbar-toggler mr-2"
    }, /* @__PURE__ */ react.exports.createElement("span", {
      className: "navbar-toggler-icon"
    })), /* @__PURE__ */ react.exports.createElement("div", {
      className: `collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${collapsed ? "" : "show"}`,
      "aria-expanded": !collapsed
    }, /* @__PURE__ */ react.exports.createElement("ul", {
      className: "navbar-nav flex-grow"
    }, children, defaultMenuItems)))));
  },
  MenuItem,
  NotificationsHost: ({ children }) => /* @__PURE__ */ react.exports.createElement("div", {
    className: "notifications"
  }, children),
  NotificationsToast: ({ options, onClose, children }) => /* @__PURE__ */ react.exports.createElement("div", {
    className: `notification-toast ${options.type}`
  }, /* @__PURE__ */ react.exports.createElement("div", {
    className: "notification-toast-details"
  }, options.title && /* @__PURE__ */ react.exports.createElement("div", {
    className: "notification-toast-title"
  }, options.title), /* @__PURE__ */ react.exports.createElement("div", {
    className: "notification-toast-description"
  }, children)), /* @__PURE__ */ react.exports.createElement("div", {
    className: "notification-toast-close",
    onClick: onClose
  }))
};
const feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors
  },
  plugins: [...createStandardApi()],
  requestPilets() {
    return fetch(feedUrl).then((res) => res.json()).then((res) => res.items);
  }
});
const root = createRoot(document.querySelector("#app"));
root.render(/* @__PURE__ */ react.exports.createElement(Piral, {
  instance
}));
//# sourceMappingURL=index.3d4a55ea.js.map
