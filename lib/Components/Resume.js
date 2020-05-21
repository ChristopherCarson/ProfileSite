"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resume = function Resume(_ref) {
  var data = _ref.data;
  return _react.default.createElement("section", {
    className: "education",
    id: "resume"
  }, data && _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "row education"
  }, _react.default.createElement("div", {
    className: "three columns header-col"
  }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Education"))), _react.default.createElement("div", {
    className: "nine columns main-col"
  }, _react.default.createElement("div", {
    className: "row item"
  }, _react.default.createElement("div", {
    className: "twelve columns"
  }, data.education.map(function (education) {
    return _react.default.createElement("div", {
      key: education.school
    }, _react.default.createElement("h3", null, education.school), _react.default.createElement("p", {
      className: "info"
    }, education.degree), _react.default.createElement("p", null, education.description));
  }))))), _react.default.createElement("div", {
    className: "row work"
  }, _react.default.createElement("div", {
    className: "three columns header-col"
  }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Work"))), _react.default.createElement("div", {
    className: "nine columns main-col"
  }, data.work.map(function (work) {
    return _react.default.createElement("div", {
      key: work.company
    }, _react.default.createElement("h3", null, work.company), _react.default.createElement("p", {
      className: "info"
    }, work.title, _react.default.createElement("span", null, "\u2022"), ' ', _react.default.createElement("em", {
      className: "date"
    }, work.years)), _react.default.createElement("p", null, work.description));
  }))), _react.default.createElement("div", {
    className: "row skill"
  }, _react.default.createElement("div", {
    className: "three columns header-col"
  }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Skills"))), _react.default.createElement("div", {
    className: "nine columns main-col"
  }, _react.default.createElement("h4", null, data.skillmessage)))));
};

var _default = Resume;
exports.default = _default;