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

var _ProjectDetail = _interopRequireDefault(require("./ProjectDetail.css"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _htmlParser = _interopRequireDefault(require("react-markdown/plugins/html-parser"));

var _Slideshow = _interopRequireDefault(require("../Slideshow"));

var parseHtml = (0, _htmlParser["default"])({
  isValidNode: function isValidNode(node) {
    return node.type !== 'script';
  }
});

var ProjectDetail =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(ProjectDetail, _PureComponent);

  function ProjectDetail() {
    (0, _classCallCheck2["default"])(this, ProjectDetail);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ProjectDetail).apply(this, arguments));
  }

  (0, _createClass2["default"])(ProjectDetail, [{
    key: "render",
    value: function render() {
      var project = this.props.project;
      var name = project.name,
          repo = project.repo,
          url = project.url,
          description = project.description,
          images = project.images;
      return _react["default"].createElement("div", {
        className: _ProjectDetail["default"].projectDetail
      }, _react["default"].createElement("h2", null, name), _react["default"].createElement(_Slideshow["default"], {
        images: images
      }), _react["default"].createElement("h4", null, _react["default"].createElement("a", {
        href: url
      }, "Link to demo")), _react["default"].createElement("h5", null, _react["default"].createElement("a", {
        href: repo
      }, "View on github.")), _react["default"].createElement(_reactMarkdown["default"], {
        source: description,
        astPlugins: [parseHtml]
      }));
    }
  }]);
  return ProjectDetail;
}(_react.PureComponent);

exports["default"] = ProjectDetail;

//# sourceMappingURL=ProjectDetail.js.map