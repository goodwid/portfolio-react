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

var _Project = _interopRequireDefault(require("./Project.css"));

var Project =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Project, _PureComponent);

  function Project() {
    (0, _classCallCheck2["default"])(this, Project);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Project).apply(this, arguments));
  }

  (0, _createClass2["default"])(Project, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _Project["default"].project
      }, _react["default"].createElement("h3", null, this.props.project.name));
    }
  }]);
  return Project;
}(_react.PureComponent);

exports["default"] = Project;

//# sourceMappingURL=Project.js.map