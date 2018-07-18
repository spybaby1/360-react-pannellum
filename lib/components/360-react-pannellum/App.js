var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { PanoView, Container, CloseButton } from './styles/App';

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$isDisplayClose = _props.isDisplayCloseButton,
          isDisplayCloseButton = _props$isDisplayClose === undefined ? false : {_props$isDisplayClose},
          closeHandler = _props.closeHandler,
          _props$closeButtonTit = _props.closeButtonTitle,
          closeButtonTitle = _props$closeButtonTit === undefined ? 'Close' : {_props$closeButtonTit},
          _props$width = _props.width,
          width = _props$width === undefined ? '100%' : _props$width,
          _props$height = _props.height,
          height = _props$height === undefined ? '200px' : _props$height;

      return React.createElement(
        Container,
        { width: width, height: height },
        React.createElement(
          CloseButton,
          {
            onClick: closeHandler,
            visibility: isDisplayCloseButton
          },
          closeButtonTitle
        ),
        React.createElement(PanoView, { id: 'pano-image' })
      );
    }
  }]);

  return App;
}(Component);

export default App;