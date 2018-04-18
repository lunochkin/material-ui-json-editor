'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _GeneralEditor = require('../GeneralEditor');

var _GeneralEditor2 = _interopRequireDefault(_GeneralEditor);

var _Remove = require('@material-ui/icons/Remove');

var _Remove2 = _interopRequireDefault(_Remove);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowUpward = require('@material-ui/icons/ArrowUpward');

var _ArrowUpward2 = _interopRequireDefault(_ArrowUpward);

var _ArrowDownward = require('@material-ui/icons/ArrowDownward');

var _ArrowDownward2 = _interopRequireDefault(_ArrowDownward);

var _red = require('material-ui/colors/red');

var _red2 = _interopRequireDefault(_red);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconButton = (0, _styles.withStyles)({
  root: {
    width: 20,
    height: 20,
    marginRight: 2
  },
  label: {
    width: 16,
    height: 16
  }
})(_IconButton2.default);

var decorate = (0, _styles.withStyles)({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 7,
    paddingRight: 5,
    border: '1px solid ' + _red2.default[500]
  },
  editor: {
    flex: 1
  },
  invisible: {
    visibility: 'hidden'
  }
});

var ArrayItemEditor = function (_React$Component) {
  _inherits(ArrayItemEditor, _React$Component);

  function ArrayItemEditor() {
    _classCallCheck(this, ArrayItemEditor);

    return _possibleConstructorReturn(this, (ArrayItemEditor.__proto__ || Object.getPrototypeOf(ArrayItemEditor)).apply(this, arguments));
  }

  _createClass(ArrayItemEditor, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.value !== this.props.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onRemove = _props.onRemove,
          onUp = _props.onUp,
          onDown = _props.onDown,
          rest = _objectWithoutProperties(_props, ['classes', 'onRemove', 'onUp', 'onDown']);

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          IconButton,
          { onClick: onRemove, color: 'primary' },
          _react2.default.createElement(_Remove2.default, null)
        ),
        _react2.default.createElement(
          IconButton,
          {
            className: (0, _classnames2.default)(_defineProperty({}, classes.invisible, !onUp)),
            onClick: onUp,
            color: 'primary'
          },
          _react2.default.createElement(_ArrowUpward2.default, null)
        ),
        _react2.default.createElement(
          IconButton,
          {
            className: (0, _classnames2.default)(_defineProperty({}, classes.invisible, !onDown)),
            onClick: onDown,
            color: 'primary'
          },
          _react2.default.createElement(_ArrowDownward2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: classes.editor },
          _react2.default.createElement(_GeneralEditor2.default, rest)
        )
      );
    }
  }]);

  return ArrayItemEditor;
}(_react2.default.Component);

exports.default = decorate(ArrayItemEditor);