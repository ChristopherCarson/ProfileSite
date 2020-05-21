"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var data = _ref.data;
  return _react.default.createElement("footer", null, data && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "twelve columns"
  }, _react.default.createElement("ul", {
    className: "social-links"
  }, data.social.map(function (network) {
    return _react.default.createElement("li", {
      key: network.name
    }, _react.default.createElement("a", {
      href: network.url
    }, _react.default.createElement("i", {
      className: network.className
    })));
  })), _react.default.createElement("ul", {
    className: "copyright"
  }, _react.default.createElement("li", null, "\xA9 Copyright 2020 Chris Carson"), _react.default.createElement("li", null, "Design by", ' ', _react.default.createElement("a", {
    title: "Styleshout",
    href: "http://www.styleshout.com/"
  }, "Styleshout")))), _react.default.createElement("div", {
    id: "go-top"
  }, _react.default.createElement("a", {
    className: "smoothscroll",
    title: "Back to Top",
    href: "#home"
  }, _react.default.createElement("i", {
    className: "icon-up-open"
  })))));
};

var _default = Footer;
exports.default = _default;