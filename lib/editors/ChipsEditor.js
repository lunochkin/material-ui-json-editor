'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiChipInput = require('material-ui-chip-input');

var _materialUiChipInput2 = _interopRequireDefault(_materialUiChipInput);

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var decorate = (0, _styles.withStyles)({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    width: 100,
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.8em'
  },
  chipContainer: {
    marginBottom: 0,
    minHeight: 0
  },
  chip: {
    margin: '0 4px 4px 0',
    height: 24
  },
  inputRoot: {
    height: 24
  },
  input: {
    padding: '3px 0',
    fontSize: '0.8em'
  }
});

var ChipsEditor = function (_React$Component) {
  _inherits(ChipsEditor, _React$Component);

  function ChipsEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChipsEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChipsEditor.__proto__ || Object.getPrototypeOf(ChipsEditor)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      return Array.isArray(_this.props.value) ? _this.props.value : [];
    }, _this.handleAdd = function (chip) {
      _this.props.onChange([].concat(_toConsumableArray(_this.getValue()), [chip]));
    }, _this.handleDelete = function (chip, index) {
      _this.props.onChange(_this.getValue().filter(function (one, i) {
        return i !== index;
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChipsEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          classes = _props.classes;

      var value = this.getValue();

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          'span',
          { className: classes.title },
          field
        ),
        _react2.default.createElement(_materialUiChipInput2.default, {
          onAdd: this.handleAdd,
          onDelete: this.handleDelete,
          value: value,
          classes: {
            chipContainer: classes.chipContainer,
            chip: classes.chip,
            inputRoot: classes.inputRoot,
            input: classes.input
          }
        })
      );
    }
  }]);

  return ChipsEditor;
}(_react2.default.Component);

exports.default = decorate(ChipsEditor);