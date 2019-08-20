"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Footer = _interopRequireDefault(require("./Footer.css"));

var Footer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Footer, _PureComponent);

  function Footer() {
    (0, _classCallCheck2["default"])(this, Footer);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Footer).apply(this, arguments));
  }

  (0, _createClass2["default"])(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttonText = _this$props.buttonText,
          buttonHandler = _this$props.buttonHandler;
      return _react["default"].createElement("div", {
        className: _Footer["default"].footer
      }, "Theme switcher: ", _react["default"].createElement("button", {
        onClick: buttonHandler
      }, buttonText));
    }
  }]);
  return Footer;
}(_react.PureComponent);

exports["default"] = Footer;
(0, _defineProperty2["default"])(Footer, "propTypes", {
  buttonHandler: _propTypes["default"]["function"],
  buttonText: _propTypes["default"].string
});

//# sourceMappingURL=Footer.js.map