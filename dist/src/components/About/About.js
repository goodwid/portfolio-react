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

var _About = _interopRequireDefault(require("./About.css"));

var About =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(About, _Component);

  function About(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, About);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(About).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(About, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _About["default"].about
      }, _react["default"].createElement("p", null, "Jack of all trades.  Master of one."));
    }
  }]);
  return About;
}(_react.Component);

exports["default"] = About;

//# sourceMappingURL=About.js.map