"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Main = _interopRequireDefault(require("./Main.css"));

var _Selector = _interopRequireDefault(require("../Selector"));

var _Display = _interopRequireDefault(require("../Display"));

var Main =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Main, _Component);

  function Main() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Main)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      project: {}
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelection", function (project) {
      _this.props.handleAboutState(false);

      _this.setState({
        project: project
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Main, [{
    key: "render",
    value: function render() {
      var project = this.state.project;
      var props = this.props;
      return _react["default"].createElement("div", {
        className: _Main["default"].main
      }, _react["default"].createElement("div", {
        className: "selector"
      }, _react["default"].createElement(_Selector["default"], {
        handleSelection: this.handleSelection
      })), _react["default"].createElement("div", {
        className: "display"
      }, _react["default"].createElement(_Display["default"], (0, _extends2["default"])({}, props, {
        project: project
      }))));
    }
  }]);
  return Main;
}(_react.Component);

exports["default"] = Main;

//# sourceMappingURL=Main.js.map