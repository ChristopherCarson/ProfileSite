"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactGa = _interopRequireDefault(require("react-ga"));

require("./App.css");

var _Header = _interopRequireDefault(require("./Components/Header"));

var _Footer = _interopRequireDefault(require("./Components/Footer"));

var _About = _interopRequireDefault(require("./Components/About"));

var _Resume = _interopRequireDefault(require("./Components/Resume"));

var _Contact = _interopRequireDefault(require("./Components/Contact"));

var _Testimonials = _interopRequireDefault(require("./Components/Testimonials"));

var _Portfolio = _interopRequireDefault(require("./Components/Portfolio"));

var _reactHttpsRedirect = _interopRequireDefault(require("react-https-redirect"));

var _resumeData = _interopRequireDefault(require("./data/resumeData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  _reactGa.default.initialize('UA-158362600-1');

  _reactGa.default.pageview(window.location.pathname);

  return _react.default.createElement(_reactHttpsRedirect.default, null, _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement(_Header.default, {
    data: _resumeData.default.main
  }), _react.default.createElement(_About.default, {
    data: _resumeData.default.main
  }), _react.default.createElement(_Resume.default, {
    data: _resumeData.default.resume
  }), _react.default.createElement(_Portfolio.default, {
    data: _resumeData.default.portfolio
  }), _react.default.createElement(_Testimonials.default, {
    data: _resumeData.default.testimonials
  }), _react.default.createElement(_Contact.default, {
    data: _resumeData.default.main
  }), _react.default.createElement(_Footer.default, {
    data: _resumeData.default.main
  })));
};

var _default = App;
exports.default = _default;