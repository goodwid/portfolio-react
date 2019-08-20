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

var _Links = _interopRequireDefault(require("./Links.css"));

var Links =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Links, _PureComponent);

  function Links() {
    (0, _classCallCheck2["default"])(this, Links);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Links).apply(this, arguments));
  }

  (0, _createClass2["default"])(Links, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _Links["default"].links
      }, _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "https://linkedin.com/in/goodwid"
      }, "LinkedIn")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "mailto:goodwid@gmail.com"
      }, "Email")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "https://github.com/goodwid"
      }, "Github")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#"
      }, "Resume"))));
    }
  }]);
  return Links;
}(_react.PureComponent);

exports["default"] = Links;

//# sourceMappingURL=Links.js.map