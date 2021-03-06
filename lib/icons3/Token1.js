(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'material-ui/SvgIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('material-ui/SvgIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SvgIcon);
    global.Token1 = mod.exports;
  }
})(this, function (exports, _react, _SvgIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
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

  var Token1 = function Token1(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('circle', { cx: '32', cy: '32', r: '24', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '10' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', d: 'M32 14v4.5M32 50v-4.5M50 32h-4.5M14 32h4.5M44.73 19.27l-3.18 3.18M19.27 44.73l3.18-3.18M44.73 44.73l-3.18-3.18M19.27 19.27l3.18 3.18', strokeWidth: '4', strokeMiterlimit: '10' }),
      _react2.default.createElement('circle', { cx: '32', cy: '32', r: '8', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '10' })
    );
  };

  exports.default = Token1;
});