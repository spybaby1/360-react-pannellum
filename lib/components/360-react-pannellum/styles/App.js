var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', ' !important;\n  height: ', ' !important;\n'], ['\n  position: relative;\n  width: ', ' !important;\n  height: ', ' !important;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: absolute;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tborder-radius: 3px;\n\tpadding: 0.25em 1em;\n\tmargin: 0 1em;\n\tbackground: transparent;\n\tcolor: palevioletred;\n\tborder: 2px solid palevioletred;\n'], ['\n\tborder-radius: 3px;\n\tpadding: 0.25em 1em;\n\tmargin: 0 1em;\n\tbackground: transparent;\n\tcolor: palevioletred;\n\tborder: 2px solid palevioletred;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  margin-top: 0.5em;\n  margin-right: 0.5em;\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 3px;\n  border: 1px solid #999;\n  border-color: rgba(0, 0, 0, 0.4);\n  visibility: ', ';\n'], ['\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  margin-top: 0.5em;\n  margin-right: 0.5em;\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 3px;\n  border: 1px solid #999;\n  border-color: rgba(0, 0, 0, 0.4);\n  visibility: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

export var Container = styled.div(_templateObject, function (props) {
  return props.width ? props.width : '100%';
}, function (props) {
  return props.height ? props.height : '200px';
});

export var PanoView = styled.div(_templateObject2);

export var Button = styled.button(_templateObject3);

export var CloseButton = styled.div(_templateObject4, function (props) {
  return props.visibility ? 'visible' : 'hidden';
});