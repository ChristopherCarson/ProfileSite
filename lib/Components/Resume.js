"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Resume =
/*#__PURE__*/
function (_Component) {
  _inherits(Resume, _Component);

  function Resume() {
    _classCallCheck(this, Resume);

    return _possibleConstructorReturn(this, _getPrototypeOf(Resume).apply(this, arguments));
  }

  _createClass(Resume, [{
    key: "render",
    value: function render() {
      if (this.props.data) {
        var skillmessage = this.props.data.skillmessage;
        var education = this.props.data.education.map(function (education) {
          return _react.default.createElement("div", {
            key: education.school
          }, _react.default.createElement("h3", null, education.school), _react.default.createElement("p", {
            className: "info"
          }, education.degree, " ", _react.default.createElement("span", null, "\u2022"), _react.default.createElement("em", {
            className: "date"
          }, education.graduated)), _react.default.createElement("p", null, education.description));
        });
        var work = this.props.data.work.map(function (work) {
          return _react.default.createElement("div", {
            key: work.company
          }, _react.default.createElement("h3", null, work.company), _react.default.createElement("p", {
            className: "info"
          }, work.title, _react.default.createElement("span", null, "\u2022"), " ", _react.default.createElement("em", {
            className: "date"
          }, work.years)), _react.default.createElement("p", null, work.description));
        });
        var skills = this.props.data.skills.map(function (skills) {
          var className = 'bar-expand ' + skills.name.toLowerCase();
          return _react.default.createElement("li", {
            key: skills.name
          }, _react.default.createElement("span", {
            style: {
              width: skills.level
            },
            className: className
          }), _react.default.createElement("em", null, skills.name));
        });
      }

      return _react.default.createElement("section", {
        id: "resume"
      }, _react.default.createElement("div", {
        className: "row education"
      }, _react.default.createElement("div", {
        className: "three columns header-col"
      }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Education"))), _react.default.createElement("div", {
        className: "nine columns main-col"
      }, _react.default.createElement("div", {
        className: "row item"
      }, _react.default.createElement("div", {
        className: "twelve columns"
      }, education)))), _react.default.createElement("div", {
        className: "row work"
      }, _react.default.createElement("div", {
        className: "three columns header-col"
      }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Work"))), _react.default.createElement("div", {
        className: "nine columns main-col"
      }, work)), _react.default.createElement("div", {
        className: "row skill"
      }, _react.default.createElement("div", {
        className: "three columns header-col"
      }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Skills"))), _react.default.createElement("div", {
        className: "nine columns main-col"
      }, _react.default.createElement("p", null, skillmessage), _react.default.createElement("div", {
        className: "bars"
      }, _react.default.createElement("ul", {
        className: "skills"
      }, skills)))));
    }
  }]);

  return Resume;
}(_react.Component);

var _default = Resume;
exports.default = _default;