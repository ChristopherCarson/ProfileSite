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

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      if (this.props.data) {
        var name = this.props.data.name;
        var occupation = this.props.data.occupation;
        var description = this.props.data.description;
        var city = this.props.data.address.city;
        var networks = this.props.data.social.map(function (network) {
          return _react.default.createElement("li", {
            key: network.name
          }, _react.default.createElement("a", {
            href: network.url
          }, _react.default.createElement("i", {
            className: network.className
          })));
        });
      }

      return _react.default.createElement("header", {
        id: "home"
      }, _react.default.createElement("nav", {
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
      }, "Testimonials")), _react.default.createElement("li", null, _react.default.createElement("a", {
        className: "smoothscroll",
        href: "#contact"
      }, "Contact")))), _react.default.createElement("div", {
        className: "row banner"
      }, _react.default.createElement("div", {
        className: "banner-text"
      }, _react.default.createElement("h1", {
        className: "responsive-headline"
      }, "I'm ", name, "."), _react.default.createElement("h3", null, "I'm a ", city, " based ", _react.default.createElement("span", null, occupation), ". ", description, "."), _react.default.createElement("hr", null), _react.default.createElement("ul", {
        className: "social"
      }, networks))), _react.default.createElement("p", {
        className: "scrolldown"
      }, _react.default.createElement("a", {
        className: "smoothscroll",
        href: "#about"
      }, _react.default.createElement("i", {
        className: "icon-down-circle"
      }))));
    }
  }]);

  return Header;
}(_react.Component);

var _default = Header;
exports.default = _default;