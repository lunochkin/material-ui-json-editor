'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Form = require('material-ui/Form');

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormControlLabelStyled = (0, _styles.withStyles)({
  root: {
    flexDirection: 'row-reverse',
    marginLeft: 0
  },
  label: {
    width: 100,
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.54)'
  }
})(_Form.FormControlLabel);

var CheckboxStyled = (0, _styles.withStyles)({
  default: {
    width: 16,
    height: 22,
    fontSize: '1.2em'
  }
})(_Checkbox2.default);

var BooleanEditor = function (_React$Component) {
  _inherits(BooleanEditor, _React$Component);

  function BooleanEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BooleanEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BooleanEditor.__proto__ || Object.getPrototypeOf(BooleanEditor)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      _this.props.onChange(e.target.checked);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BooleanEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          value = _props.value,
          components = _props.components,
          onChange = _props.onChange,
          field = _props.field,
          rest = _objectWithoutProperties(_props, ['schema', 'value', 'components', 'onChange', 'field']);

      var resultValue = !!(value === undefined ? schema.defaultValue : value);

      return _react2.default.createElement(FormControlLabelStyled, {
        label: schema.title || field,
        control: _react2.default.createElement(CheckboxStyled, _extends({
          checked: resultValue,
          onChange: this.handleChange
        }, rest))
      });
    }
  }]);

  return BooleanEditor;
}(_react2.default.Component);

exports.default = BooleanEditor;