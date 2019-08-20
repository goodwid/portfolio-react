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

var _Projects = _interopRequireDefault(require("./Projects.css"));

var Projects =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Projects, _Component);

  function Projects(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Projects);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Projects).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Projects, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _Projects["default"].projects
      }, _react["default"].createElement("p", null, "I am Projects!"));
    }
  }]);
  return Projects;
}(_react.Component);

exports["default"] = Projects;

//# sourceMappingURL=Projects.js.map