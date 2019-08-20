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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _projects = _interopRequireDefault(require("../../contexts/projects"));

var _Project = _interopRequireDefault(require("../Project"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Selector = _interopRequireDefault(require("./Selector.css"));

var Selector =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Selector, _PureComponent);

  function Selector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Selector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Selector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      selected: ''
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (project) {
      _this.setState({
        selected: project._id
      });

      _this.props.handleSelection(project);
    });
    return _this;
  }

  (0, _createClass2["default"])(Selector, [{
    key: "render",
    value: function render() {
      var handleClick = this.handleClick,
          context = this.context,
          selected = this.state.selected;
      return _react["default"].createElement("div", {
        className: _Selector["default"].selector
      }, _react["default"].createElement("ul", null, context.map(function (el) {
        return _react["default"].createElement("div", {
          className: el._id === selected ? 'selected' : '',
          key: el._id,
          onClick: function onClick() {
            return handleClick(el);
          }
        }, _react["default"].createElement(_Project["default"], {
          project: el
        }));
      })));
    }
  }]);
  return Selector;
}(_react.PureComponent);

exports["default"] = Selector;
(0, _defineProperty2["default"])(Selector, "propTypes", {
  handleSelection: _propTypes["default"]["function"]
});
(0, _defineProperty2["default"])(Selector, "contextType", _projects["default"]);

//# sourceMappingURL=Selector.js.map