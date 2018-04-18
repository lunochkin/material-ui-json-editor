'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Add = require('@material-ui/icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chooser = function (_React$Component) {
  _inherits(Chooser, _React$Component);

  function Chooser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Chooser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chooser.__proto__ || Object.getPrototypeOf(Chooser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined
    }, _this.handleClick = function (e) {
      _this.setState({
        anchorEl: e.currentTarget
      });
    }, _this.handleClose = function () {
      _this.setState({
        anchorEl: undefined
      });
    }, _this.handleChoice = function (key) {
      _this.props.onChoice(key);

      _this.setState({
        anchorEl: undefined
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Chooser, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var properties = this.props.properties;
      var anchorEl = this.state.anchorEl;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _IconButton2.default,
          { onClick: this.handleClick, color: 'primary' },
          _react2.default.createElement(_Add2.default, null)
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            anchorEl: anchorEl,
            open: !!anchorEl,
            onClose: this.handleClose
          },
          Object.keys(properties).map(function (key) {
            return _react2.default.createElement(
              _Menu.MenuItem,
              { key: key, onClick: function onClick() {
                  return _this2.handleChoice(key);
                } },
              properties[key].title || key
            );
          })
        )
      );
    }
  }]);

  return Chooser;
}(_react2.default.Component);

exports.default = Chooser;