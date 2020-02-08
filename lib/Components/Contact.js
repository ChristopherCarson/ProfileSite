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

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      if (this.props.data) {
        var name = this.props.data.name;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone = this.props.data.phone;
        var email = this.props.data.email;
        var message = this.props.data.contactmessage;
      }

      return _react.default.createElement("section", {
        id: "contact"
      }, _react.default.createElement("div", {
        className: "row section-head"
      }, _react.default.createElement("div", {
        className: "two columns header-col"
      }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Get In Touch."))), _react.default.createElement("div", {
        className: "ten columns"
      }, _react.default.createElement("p", {
        className: "lead"
      }, message))), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "eight columns"
      }, _react.default.createElement("form", {
        action: "",
        method: "post",
        id: "contactForm",
        name: "contactForm"
      }, _react.default.createElement("fieldset", null, _react.default.createElement("div", null, _react.default.createElement("label", {
        htmlFor: "contactName"
      }, "Name ", _react.default.createElement("span", {
        className: "required"
      }, "*")), _react.default.createElement("input", {
        type: "text",
        defaultValue: "",
        size: "35",
        id: "contactName",
        name: "contactName",
        onChange: this.handleChange
      })), _react.default.createElement("div", null, _react.default.createElement("label", {
        htmlFor: "contactEmail"
      }, "Email ", _react.default.createElement("span", {
        className: "required"
      }, "*")), _react.default.createElement("input", {
        type: "text",
        defaultValue: "",
        size: "35",
        id: "contactEmail",
        name: "contactEmail",
        onChange: this.handleChange
      })), _react.default.createElement("div", null, _react.default.createElement("label", {
        htmlFor: "contactSubject"
      }, "Subject"), _react.default.createElement("input", {
        type: "text",
        defaultValue: "",
        size: "35",
        id: "contactSubject",
        name: "contactSubject",
        onChange: this.handleChange
      })), _react.default.createElement("div", null, _react.default.createElement("label", {
        htmlFor: "contactMessage"
      }, "Message ", _react.default.createElement("span", {
        className: "required"
      }, "*")), _react.default.createElement("textarea", {
        cols: "50",
        rows: "15",
        id: "contactMessage",
        name: "contactMessage"
      })), _react.default.createElement("div", null, _react.default.createElement("button", {
        className: "submit"
      }, "Submit"), _react.default.createElement("span", {
        id: "image-loader"
      }, _react.default.createElement("img", {
        alt: "",
        src: "images/loader.gif"
      }))))), _react.default.createElement("div", {
        id: "message-warning"
      }, " Error boy"), _react.default.createElement("div", {
        id: "message-success"
      }, _react.default.createElement("i", {
        className: "fa fa-check"
      }), "Your message was sent, thank you!", _react.default.createElement("br", null))), _react.default.createElement("aside", {
        className: "four columns footer-widgets"
      }, _react.default.createElement("div", {
        className: "widget widget_contact"
      }, _react.default.createElement("h4", null, "Address and Phone"), _react.default.createElement("p", {
        className: "address"
      }, name, _react.default.createElement("br", null), street, " ", _react.default.createElement("br", null), city, ", ", state, " ", zip, _react.default.createElement("br", null), _react.default.createElement("span", null, phone))), _react.default.createElement("div", {
        className: "widget widget_tweets"
      }, _react.default.createElement("h4", {
        className: "widget-title"
      }, "Latest Tweets"), _react.default.createElement("ul", {
        id: "twitter"
      }, _react.default.createElement("li", null, _react.default.createElement("span", null, "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum", _react.default.createElement("a", {
        href: "#"
      }, "http://t.co/CGIrdxIlI3")), _react.default.createElement("b", null, _react.default.createElement("a", {
        href: "#"
      }, "2 Days Ago"))), _react.default.createElement("li", null, _react.default.createElement("span", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi", _react.default.createElement("a", {
        href: "#"
      }, "http://t.co/CGIrdxIlI3")), _react.default.createElement("b", null, _react.default.createElement("a", {
        href: "#"
      }, "3 Days Ago"))))))));
    }
  }]);

  return Contact;
}(_react.Component);

var _default = Contact;
exports.default = _default;