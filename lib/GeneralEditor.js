'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _editors = require('./editors');

var editors = _interopRequireWildcard(_editors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralEditor = function (_React$PureComponent) {
  _inherits(GeneralEditor, _React$PureComponent);

  function GeneralEditor() {
    _classCallCheck(this, GeneralEditor);

    return _possibleConstructorReturn(this, (GeneralEditor.__proto__ || Object.getPrototypeOf(GeneralEditor)).apply(this, arguments));
  }

  _createClass(GeneralEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          rest = _objectWithoutProperties(_props, ['schema']);

      var resultSchema = void 0;

      if (schema.type === 'number' || schema.type === 'integer' || schema.type === 'string') {
        resultSchema = _extends({}, schema, { type: 'string', format: 'number' });
      } else if (schema.type === 'array' && schema.format !== 'complete' && schema.items.type === 'string') {
        resultSchema = _extends({}, schema, { type: 'chips' });
      } else {
        resultSchema = _extends({}, schema);
      }

      var editorName = resultSchema.type.substr(0, 1).toUpperCase() + resultSchema.type.slice(1);

      var Editor = editors[editorName + 'Editor'];

      return _react2.default.createElement(Editor, _extends({
        schema: resultSchema
      }, rest));
    }
  }]);

  return GeneralEditor;
}(_react2.default.PureComponent);

exports.default = GeneralEditor;