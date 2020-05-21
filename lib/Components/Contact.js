"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Contact = function Contact(_ref) {
  var data = _ref.data;

  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var _React$useState3 = _react.default.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      email = _React$useState4[0],
      setEmail = _React$useState4[1];

  var _React$useState5 = _react.default.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      message = _React$useState6[0],
      setMessage = _React$useState6[1];

  var _React$useState7 = _react.default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      show = _React$useState8[0],
      setShow = _React$useState8[1];

  var _React$useState9 = _react.default.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      spinner = _React$useState10[0],
      setSpinner = _React$useState10[1];

  var _React$useState11 = _react.default.useState("Your message was successfully sent."),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      modalMessage = _React$useState12[0],
      setModalMessage = _React$useState12[1];

  var _React$useState13 = _react.default.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      error = _React$useState14[0],
      setError = _React$useState14[1];

  var customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'black',
      textAlign: 'center',
      radius: 100
    }
  };

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var clearForm = function clearForm() {
    setName('');
    setEmail('');
    setMessage('');
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var templateId = 'template_lCLMKCYL';
    setSpinner(true);
    window.emailjs.send('default_service', templateId, {
      reply_to: email,
      from_name: name,
      message_html: message
    }).then(function () {
      setSpinner(false);
      handleShow();
      clearForm();
    }).catch(function () {
      setModalMessage('Something went wrong! Please contact me at ChrisCarson81@gmail.com.');
      setSpinner(false);
      handleShow();
    });
  };

  return _react.default.createElement("section", {
    id: "contact"
  }, data && _react.default.createElement("div", null, _react.default.createElement(_reactModal.default, {
    ariaHideApp: false,
    isOpen: show,
    onAfterOpen: function onAfterOpen() {},
    onRequestClose: function onRequestClose() {
      return handleClose();
    },
    style: customStyles,
    contentLabel: "Contact Form Results"
  }, _react.default.createElement("h2", {
    style: {
      color: 'white'
    }
  }, modalMessage), _react.default.createElement("h2", {
    style: {
      color: 'white'
    }
  }, "Thank you!"), _react.default.createElement("hr", null), _react.default.createElement("button", {
    style: {
      background: '#474747'
    },
    onClick: function onClick() {
      return handleClose();
    }
  }, "Close")), _react.default.createElement("div", {
    className: "row section-head"
  }, _react.default.createElement("div", {
    className: "two columns header-col"
  }, _react.default.createElement("h1", null, _react.default.createElement("span", null, "Get In Touch."))), _react.default.createElement("div", {
    className: "ten columns"
  }, _react.default.createElement("p", {
    className: "lead"
  }, data.contactmessage))), _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "eight columns"
  }, _react.default.createElement("div", null, _react.default.createElement("label", {
    htmlFor: "contactName"
  }, "Name ", _react.default.createElement("span", {
    className: "required"
  }, "*")), _react.default.createElement("input", {
    value: name,
    type: "text",
    size: "35",
    id: "contactName",
    name: "contactName",
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), _react.default.createElement("div", null, _react.default.createElement("label", {
    htmlFor: "contactEmail"
  }, "Email ", _react.default.createElement("span", {
    className: "required"
  }, "*")), _react.default.createElement("input", {
    value: email,
    type: "text",
    size: "35",
    id: "contactEmail",
    name: "contactEmail",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), _react.default.createElement("div", null, _react.default.createElement("label", {
    htmlFor: "contactMessage"
  }, "Message ", _react.default.createElement("span", {
    className: "required"
  }, "*")), _react.default.createElement("textarea", {
    value: message,
    cols: "50",
    rows: "15",
    id: "contactMessage",
    name: "contactMessage",
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    }
  })), _react.default.createElement("div", null, _react.default.createElement("h3", {
    hidden: !error || error && name !== ''
  }, "Name is a required field."), _react.default.createElement("h3", {
    hidden: !error || error && email !== ''
  }, "Email is a required field."), _react.default.createElement("h3", {
    hidden: !error || error && message !== ''
  }, "Message is a required field."), _react.default.createElement("button", {
    className: "submit",
    onClick: function onClick(e) {
      if (name === '' || email === '' || message === '') {
        setError(true);
      } else {
        setError(false);
        setSpinner(true);
        handleSubmit(e);
      }
    }
  }, "Submit"), _react.default.createElement("span", {
    id: spinner ? 'image-loader-show' : 'image-loader'
  }, _react.default.createElement("img", {
    alt: "",
    src: "images/loader.gif"
  })))), _react.default.createElement("aside", {
    className: "four columns footer-widgets"
  }, _react.default.createElement("div", {
    className: "widget widget_contact"
  }, _react.default.createElement("h4", null, "Address and Phone"), _react.default.createElement("p", {
    className: "address"
  }, data.name, _react.default.createElement("br", null), data.address.street, " ", _react.default.createElement("br", null), data.address.city, ", ", data.address.state, ' ', data.address.zip, _react.default.createElement("br", null), _react.default.createElement("span", null, data.phone)))))));
};

var _default = Contact;
exports.default = _default;