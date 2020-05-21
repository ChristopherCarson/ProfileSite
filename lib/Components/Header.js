"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFadeIn = _interopRequireDefault(require("react-fade-in"));

var _reactSparkle = _interopRequireDefault(require("react-sparkle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var data = _ref.data;
  return _react.default.createElement("header", {
    id: "home"
  }, _react.default.createElement(_reactSparkle.default, {
    minSize: 1,
    maxSize: 8,
    flickerSpeed: 'slowest',
    count: 6,
    fadeOutSpeed: 20
  }), _react.default.createElement("nav", {
    id: "nav-wrap"
  }, _react.default.createElement("a", {
    className: "mobile-btn",
    href: "#nav-wrap",
    title: "Show navigation"
  }, "Show navigation"), _react.default.createElement("a", {
    className: "mobile-btn",
    href: "#home",
    title: "Hide navigation"
  }, "Hide navigation"), _react.default.createElement("ul", {
    id: "nav",
    className: "nav"
  }, _react.default.createElement("li", {
    className: "current"
  }, _react.default.createElement("a", {
    className: "smoothscroll",
    href: "#home"
  }, "Home")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "smoothscroll",
    href: "#about"
  }, "About")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "smoothscroll",
    href: "#resume"
  }, "Resume")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "smoothscroll",
    href: "#portfolio"
  }, "Works")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "smoothscroll",
    href: "#testimonials"
  }, "References")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "smoothscroll",
    href: "#contact"
  }, "Contact")))), data && _react.default.createElement("div", {
    className: "row banner"
  }, _react.default.createElement("h1", {
    className: "shimmer"
  }, data.name), _react.default.createElement("div", {
    className: "banner-text"
  }, _react.default.createElement(_reactFadeIn.default, {
    delay: 150
  }, _react.default.createElement("h2", null, data.occupation), _react.default.createElement("hr", null), _react.default.createElement("h3", null, data.description), _react.default.createElement("hr", null), _react.default.createElement("h3", null, "Security Clearance Level: Secret"), _react.default.createElement("hr", null), _react.default.createElement("ul", {
    className: "social"
  }, data.social.map(function (network) {
    return _react.default.createElement("li", {
      key: network.name
    }, _react.default.createElement("a", {
      href: network.url
    }, _react.default.createElement("i", {
      className: network.className
    })));
  }))))), _react.default.createElement("p", {
    className: "scrolldown"
  }, _react.default.createElement("a", {
    className: "smoothscroll",
    href: "#about"
  }, _react.default.createElement("i", {
    className: "icon-down-circle"
  }))));
};

var _default = Header;
exports.default = _default;