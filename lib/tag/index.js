'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilIndex = require('../util/index');

var prefixCls = 'ant-tag';

var AntTag = (function (_React$Component) {
  _inherits(AntTag, _React$Component);

  function AntTag(props) {
    _classCallCheck(this, AntTag);

    _get(Object.getPrototypeOf(AntTag.prototype), 'constructor', this).call(this, props);

    this.state = {
      closing: false,
      closed: false
    };
  }

  _createClass(AntTag, [{
    key: 'close',
    value: function close(e) {
      var _this = this;

      var dom = _react2['default'].findDOMNode(this);
      dom.style.width = dom.offsetWidth + 'px';
      // It's Magic Code, don't know why
      dom.style.width = dom.offsetWidth + 'px';
      this.setState({
        closing: true
      });
      (0, _utilIndex.addEventListenerOnce)(dom, _utilIndex.transitionEndEvent, function () {
        _this.setState({
          closed: true,
          closing: false
        });
      });
      this.props.onClose.call(this, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var close = this.props.closable ? _react2['default'].createElement('i', { className: 'anticon anticon-cross', onClick: this.close.bind(this) }) : '';
      var colorClass = this.props.color ? this.props.prefixCls + '-' + this.props.color : '';

      var className = this.props.prefixCls + ' ' + colorClass;
      className = this.state.closing ? className + ' ' + this.props.prefixCls + '-close' : className;

      return this.state.closed && !this.state.closing ? null : _react2['default'].createElement(
        'div',
        { className: className },
        _react2['default'].createElement('a', _extends({ className: this.props.prefixCls + '-text' }, this.props)),
        close
      );
    }
  }]);

  return AntTag;
})(_react2['default'].Component);

AntTag.defaultProps = {
  prefixCls: prefixCls,
  closable: false,
  onClose: function onClose() {}
};

exports['default'] = AntTag;
module.exports = exports['default'];