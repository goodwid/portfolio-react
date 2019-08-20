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

var _react = _interopRequireWildcard(require("react"));

var _Picture = _interopRequireDefault(require("../Picture"));

var _Links = _interopRequireDefault(require("../Links"));

var _Header = _interopRequireDefault(require("./Header.css"));

var Header =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck2["default"])(this, Header);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Header).apply(this, arguments));
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _Header["default"].header
      }, _react["default"].createElement("div", {
        className: "layout"
      }, _react["default"].createElement(_Picture["default"], null), _react["default"].createElement("div", {
        className: "title",
        onClick: this.props.toggle
      }, _react["default"].createElement("h1", null, "David Goodwin"), _react["default"].createElement("h3", null, "Full Stack Software Developer")), _react["default"].createElement(_Links["default"], null)));
    }
  }]);
  return Header;
}(_react.PureComponent);

exports["default"] = Header;

//# sourceMappingURL=Header.js.map