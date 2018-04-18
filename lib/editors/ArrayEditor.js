'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Add = require('@material-ui/icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _ArrayItemEditor = require('components/JsonEditor/editors/ArrayItemEditor');

var _ArrayItemEditor2 = _interopRequireDefault(_ArrayItemEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconButton = (0, _styles.withStyles)({
  root: {
    width: 20,
    height: 20
  },
  label: {
    width: 16,
    height: 16
  }
})(_IconButton2.default);

var generateValue = function generateValue(itemSchema) {
  if (itemSchema.type === 'string' || itemSchema.type === 'number' || itemSchema.type === 'integer') {
    return itemSchema.defaultValue !== undefined ? itemSchema.defaultValue : '';
  }
  if (itemSchema.type === 'boolean') {
    return itemSchema.defaultValue !== undefined ? itemSchema.defaultValue : false;
  }
  if (itemSchema.type === 'object') {
    var value = {};
    Object.keys(itemSchema.properties).forEach(function (key) {
      value[key] = generateValue(itemSchema.properties[key]);
    });
    return value;
  }
  if (itemSchema.type === 'array') {
    return [];
  }

  throw new Error('unknown type: ' + itemSchema.type);
};

var decorate = (0, _styles.withStyles)({
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    fontSize: '0.8em',
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.54)'
  }
});

var ArrayEditor = function (_React$Component) {
  _inherits(ArrayEditor, _React$Component);

  function ArrayEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ArrayEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArrayEditor.__proto__ || Object.getPrototypeOf(ArrayEditor)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      return Array.isArray(_this.props.value) ? _this.props.value : [];
    }, _this.handleChange = function (index) {
      return function (oneValue) {
        var value = _this.getValue().slice();
        value[index] = oneValue;
        _this.props.onChange(value);
      };
    }, _this.handleRemove = function (index) {
      return function () {
        var value = _this.getValue().filter(function (one, i) {
          return i !== index;
        });
        _this.props.onChange(value);
      };
    }, _this.handleUp = function (index) {
      return function () {
        _this.moveItem(index, index - 1);
      };
    }, _this.handleDown = function (index) {
      return function () {
        _this.moveItem(index, index + 1);
      };
    }, _this.handleAdd = function () {
      var schema = _this.props.schema;


      _this.props.onChange([].concat(_toConsumableArray(_this.getValue()), [generateValue(schema.items)]));
    }, _this.moveItem = function (index, newIndex) {
      var value = _this.getValue();

      if (newIndex < 0 || newIndex >= value.length) {
        return;
      }

      var newValue = value.map(function (one, i) {
        if (i === index) {
          return value[newIndex];
        }
        if (i === newIndex) {
          return value[index];
        }
        return value[i];
      });

      _this.props.onChange(newValue);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ArrayEditor, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.value !== nextProps.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          schema = _props.schema,
          field = _props.field,
          classes = _props.classes,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['schema', 'field', 'classes', 'onChange']);

      var value = this.getValue();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          { className: classes.title },
          _react2.default.createElement(
            'span',
            null,
            schema.title || field
          ),
          _react2.default.createElement(
            IconButton,
            { onClick: this.handleAdd, color: 'primary' },
            _react2.default.createElement(_Add2.default, null)
          )
        ),
        value.map(function (one, index) {
          return _react2.default.createElement(_ArrayItemEditor2.default, _extends({}, rest, {
            key: index,
            value: one,
            schema: schema.items,
            onChange: _this2.handleChange(index),
            onRemove: _this2.handleRemove(index),
            onUp: index > 0 ? _this2.handleUp(index) : null,
            onDown: index < value.length - 1 ? _this2.handleDown(index) : null,
            field: field
          }));
        })
      );
    }
  }]);

  return ArrayEditor;
}(_react2.default.Component);

exports.default = decorate(ArrayEditor);