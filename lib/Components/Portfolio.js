"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portfolio = function Portfolio(_ref) {
  var data = _ref.data;
  return _react.default.createElement("section", {
    id: "portfolio"
  }, data && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "twelve columns collapsed"
  }, _react.default.createElement("h2", {
    style: {
      color: 'white'
    }
  }, "Personal Projects"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("div", {
    id: "portfolio-wrapper",
    className: "bgrid-quarters s-bgrid-thirds cf"
  }, data.projects.map(function (projects) {
    return _react.default.createElement("div", {
      key: projects.title,
      className: "columns portfolio-item"
    }, _react.default.createElement("div", {
      className: "item-wrap"
    }, _react.default.createElement("a", {
      href: projects.url,
      target: "_blank",
      rel: "noopener noreferrer",
      title: projects.title
    }, _react.default.createElement("img", {
      alt: projects.title,
      src: 'images/portfolio/' + projects.image
    }), _react.default.createElement("div", {
      className: "overlay"
    }, _react.default.createElement("div", {
      className: "portfolio-item-meta"
    }, _react.default.createElement("h5", null, projects.title), _react.default.createElement("hr", null), _react.default.createElement("p", null, projects.category))))));
  })))));
};

var _default = Portfolio;
exports.default = _default;