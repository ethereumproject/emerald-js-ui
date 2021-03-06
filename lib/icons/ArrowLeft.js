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
    global.ArrowLeft = mod.exports;
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

  var ArrowLeft = function ArrowLeft(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M15.26 7.724L14.57 7 9 12.319l5.553 5.388.724-.69-4.862-4.664z' })
    );
  };

  exports.default = ArrowLeft;
});