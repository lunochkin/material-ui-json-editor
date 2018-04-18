'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GeneralEditor = require('../GeneralEditor');

var _GeneralEditor2 = _interopRequireDefault(_GeneralEditor);

var _styles = require('material-ui/styles');

var _Chooser = require('../Chooser');

var _Chooser2 = _interopRequireDefault(_Chooser);

var _ExpandLess = require('@material-ui/icons/ExpandLess');

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var decorate = (0, _styles.withStyles)({
  root: {},
  prop: {
    marginLeft: 10
  }
});

var addField = function addField(state, field) {
  if (state.fields.indexOf(field) !== -1) {
    return state;
  }
  return _extends({}, state, {
    fields: state.fields.concat([field])
  });
};

var removeField = function removeField(state, field) {
  if (state.fields.indexOf(field) === -1) {
    return state;
  }

  return _extends({}, state, {
    fields: state.fields.filter(function (one) {
      return one !== field;
    })
  });
};

var ObjectEditor = function (_React$Component) {
  _inherits(ObjectEditor, _React$Component);

  function ObjectEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ObjectEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ObjectEditor.__proto__ || Object.getPrototypeOf(ObjectEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fields: [],
      expanded: false
    }, _this.toggleExpandedMode = function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    }, _this.handleChange = function (key) {
      return function (oneValue) {
        var value = _extends({}, _this.props.value, _defineProperty({}, key, oneValue));
        _this.props.onChange(value);

        _this.setState(removeField(_this.state, key));
      };
    }, _this.handleChoice = function (choice) {
      _this.setState(addField(_this.state, choice));
    }, _this.isFieldToRender = function (field) {
      var _this$props = _this.props,
          schema = _this$props.schema,
          value = _this$props.value;

      if (!schema.flexible && !schema.notEmptyOnly || _this.state.expanded) {
        return true;
      }

      if (value && value[field]) {
        return true;
      }

      if (schema.flexible) {
        if (_this.state.fields.indexOf(field) !== -1) {
          return true;
        }
      }

      if (schema.notEmptyOnly) {
        if (schema.properties[field].required) {
          return true;
        }
      }

      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ObjectEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          schema = _props.schema,
          classes = _props.classes,
          onChange = _props.onChange,
          field = _props.field,
          root = _props.root,
          rest = _objectWithoutProperties(_props, ['value', 'schema', 'classes', 'onChange', 'field', 'root']);

      var title = schema.title || schema.field;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        title ? _react2.default.createElement(
          'h4',
          null,
          title
        ) : null,
        Object.keys(schema.properties).filter(this.isFieldToRender).map(function (key) {
          return _react2.default.createElement(
            'div',
            { key: key, className: (0, _classnames2.default)(!root && classes.prop) },
            _react2.default.createElement(_GeneralEditor2.default, _extends({
              field: key,
              schema: schema.properties[key],
              value: value ? value[key] : null,
              onChange: _this2.handleChange(key)
            }, rest))
          );
        }),
        this.renderExpander(),
        this.renderChooser()
      );
    }
  }, {
    key: 'renderExpander',
    value: function renderExpander() {
      var schema = this.props.schema;


      if (!schema.notEmptyOnly) {
        return null;
      }

      return _react2.default.createElement(
        _IconButton2.default,
        { onClick: this.toggleExpandedMode },
        this.state.expanded ? _react2.default.createElement(_ExpandLess2.default, null) : _react2.default.createElement(_ExpandMore2.default, null)
      );
    }
  }, {
    key: 'renderChooser',
    value: function renderChooser() {
      var schema = this.props.schema;


      if (!schema.flexible) {
        return null;
      }

      var keys = Object.keys(schema.properties);

      var keysFiltered = keys.filter(this.isFieldToRender);

      if (keysFiltered.length === keys.length) {
        return null;
      }

      var props = keys.filter(function (key) {
        return keysFiltered.indexOf(key) === -1;
      }).reduce(function (acc, key) {
        acc[key] = schema.properties[key];
        return acc;
      }, {});

      return _react2.default.createElement(_Chooser2.default, {
        properties: props,
        onChoice: this.handleChoice
      });
    }
  }]);

  return ObjectEditor;
}(_react2.default.Component);

exports.default = decorate(ObjectEditor);