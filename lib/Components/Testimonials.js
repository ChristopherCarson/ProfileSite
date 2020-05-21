"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Testimonials = function Testimonials(_ref) {
  var data = _ref.data;
  return _react.default.createElement("section", {
    id: "testimonials"
  }, data && _react.default.createElement("div", {
    className: "text-container"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "two columns header-col"
  }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Professional References"))), _react.default.createElement("div", {
    className: "ten columns flex-container"
  }, _react.default.createElement("ul", {
    className: "slides"
  }, data.testimonials.map(function (testimonials) {
    return _react.default.createElement("li", {
      key: testimonials.user
    }, _react.default.createElement("blockquote", null, _react.default.createElement("p", null, testimonials.text), _react.default.createElement("cite", null, testimonials.user)));
  }))))));
};

var _default = Testimonials;
exports.default = _default;