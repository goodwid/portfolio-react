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

var _avatar = _interopRequireDefault(require("../../assets/avatar.jpg"));

require("./Picture.css");

var Picture =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Picture, _PureComponent);

  function Picture() {
    (0, _classCallCheck2["default"])(this, Picture);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Picture).apply(this, arguments));
  }

  (0, _createClass2["default"])(Picture, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("img", {
        src: _avatar["default"]
      });
    }
  }]);
  return Picture;
}(_react.PureComponent);

exports["default"] = Picture;

//# sourceMappingURL=Picture.js.map