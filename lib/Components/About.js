"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(_ref) {
  var data = _ref.data;
  return _react.default.createElement("section", {
    id: "about"
  }, data && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "three columns"
  }, _react.default.createElement("img", {
    className: "profile-pic",
    src: 'images/' + data.image,
    alt: "Chris Carson Profile Pic"
  })), _react.default.createElement("div", {
    className: "nine columns main-col"
  }, _react.default.createElement("h2", null, "About Me"), _react.default.createElement("p", null, data.bio), _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "columns contact-details"
  }, _react.default.createElement("h2", null, "Contact Details"), _react.default.createElement("p", {
    className: "address"
  }, _react.default.createElement("span", null, data.name), _react.default.createElement("br", null), _react.default.createElement("span", null, data.address.street, _react.default.createElement("br", null), data.address.city, " ", data.address.state, ",", ' ', data.address.zip), _react.default.createElement("br", null), _react.default.createElement("span", null, data.phone), _react.default.createElement("br", null), _react.default.createElement("span", null, data.email))), _react.default.createElement("div", {
    className: "columns download"
  }, _react.default.createElement("p", null, _react.default.createElement("a", {
    href: data.resumedownload,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "button"
  }, _react.default.createElement("i", {
    className: "fa fa-download"
  }), "Download Resume")))))));
};

var _default = About;
exports.default = _default;