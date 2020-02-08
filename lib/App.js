"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactGa = _interopRequireDefault(require("react-ga"));

var _jquery = _interopRequireDefault(require("jquery"));

require("./App.css");

var _Header = _interopRequireDefault(require("./Components/Header"));

var _Footer = _interopRequireDefault(require("./Components/Footer"));

var _About = _interopRequireDefault(require("./Components/About"));

var _Resume = _interopRequireDefault(require("./Components/Resume"));

var _Contact = _interopRequireDefault(require("./Components/Contact"));

var _Testimonials = _interopRequireDefault(require("./Components/Testimonials"));

var _Portfolio = _interopRequireDefault(require("./Components/Portfolio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      foo: 'bar',
      resumeData: {}
    };

    _reactGa.default.initialize('UA-110570651-1');

    _reactGa.default.pageview(window.location.pathname);

    return _this;
  }

  _createClass(App, [{
    key: "getResumeData",
    value: function getResumeData() {
      _jquery.default.ajax({
        url: '/resumeData.json',
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({
            resumeData: data
          });
        }.bind(this),
        error: function error(xhr, status, err) {
          console.log(err);
          alert(err);
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getResumeData();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "App"
      }, _react.default.createElement(_Header.default, {
        data: this.state.resumeData.main
      }), _react.default.createElement(_About.default, {
        data: this.state.resumeData.main
      }), _react.default.createElement(_Resume.default, {
        data: this.state.resumeData.resume
      }), _react.default.createElement(_Portfolio.default, {
        data: this.state.resumeData.portfolio
      }), _react.default.createElement(_Testimonials.default, {
        data: this.state.resumeData.testimonials
      }), _react.default.createElement(_Contact.default, {
        data: this.state.resumeData.main
      }), _react.default.createElement(_Footer.default, {
        data: this.state.resumeData.main
      }));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;