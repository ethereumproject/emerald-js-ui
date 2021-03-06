(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'material-ui/styles/muiThemeable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('material-ui/styles/muiThemeable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.muiThemeable);
    global.FormLabel = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _muiThemeable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function getStyles(muiTheme) {
    return {
      flexShrink: 1,
      width: '120px',
      textAlign: 'right',
      paddingRight: '30px',
      fontSize: '16px',
      fontWeight: '400',
      color: muiTheme.palette.textColor,
      fontFamily: muiTheme.fontFamily
    };
  }

  var FormLabel = function (_React$Component) {
    _inherits(FormLabel, _React$Component);

    function FormLabel() {
      _classCallCheck(this, FormLabel);

      return _possibleConstructorReturn(this, (FormLabel.__proto__ || Object.getPrototypeOf(FormLabel)).apply(this, arguments));
    }

    _createClass(FormLabel, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'label',
          { style: getStyles(this.props.muiTheme) },
          this.props.children
        );
      }
    }]);

    return FormLabel;
  }(_react2.default.Component);

  FormLabel.propTypes = {
    muiTheme: _propTypes2.default.object
  };
  exports.default = (0, _muiThemeable2.default)()(FormLabel);
});