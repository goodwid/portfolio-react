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

var _Display = _interopRequireDefault(require("./Display.css"));

var _About = _interopRequireDefault(require("../About"));

var _ProjectDetail = _interopRequireDefault(require("../ProjectDetail"));

var Display =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Display, _Component);

  function Display() {
    (0, _classCallCheck2["default"])(this, Display);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Display).apply(this, arguments));
  }

  (0, _createClass2["default"])(Display, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          project = _this$props.project,
          showAbout = _this$props.showAbout;
      return _react["default"].createElement("div", {
        className: _Display["default"].display
      }, showAbout ? _react["default"].createElement(_About["default"], null) : _react["default"].createElement(_ProjectDetail["default"], {
        project: project
      }));
    }
  }]);
  return Display;
}(_react.Component);

exports["default"] = Display;
(0, _defineProperty2["default"])(Display, "propTypes", {
  showAbout: _propTypes["default"]["boolean"],
  project: _propTypes["default"].object
});

//# sourceMappingURL=Display.js.map