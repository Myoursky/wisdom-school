// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom'


const Root = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.1);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1002;
`

const Info = styled.div`
  width: 200px;
  ${props => {
    switch (props.position) {
      case 'top':
        return 'top: 50px';
      case 'bottom':
        return 'bottom: 58px';
      default:
        return 'top: 50%';
    }
  }};
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  z-index: 999;
  line-height: 1.6;
  position: fixed;
  color: #fff;
  text-align: center;
  padding: 10px 5px;
  font-size: 14px;
  margin: 0 auto;
  margin-top: -32px;
  border-radius: 5px;
`

type Props = {|
  title: string,
  modal?: boolean,
  duration?: number,
  position?: string
|};

let toastRoot = document.getElementById('react-v2-toast');
if (!toastRoot) {
  toastRoot = document.createElement('div')
  toastRoot.setAttribute('id', 'react-v2-toast')
  if (document.body) document.body.appendChild(toastRoot);
}

let timeout;

class index extends React.Component<Props> {

  static show = (title: string, {duration = 3 , modal, position}: {duration?: number, modal?: boolean, position?: string} = {}) => {
    if (toastRoot) toastRoot.innerHTML = '';
    if (timeout) clearTimeout(timeout)

    const el = document.createElement('div');
    if (modal) {
      ReactDOM.render((
        <Root>
          <Info position={position}>{title}</Info>
        </Root>
      ), el)
    } else {
      ReactDOM.render((
        <Info position={position}>{title}</Info>
      ), el)
    }
    
    if (toastRoot) toastRoot.appendChild(el);
    timeout = setTimeout(() => {
      if (toastRoot) toastRoot.innerHTML = '';
    }, duration * 1000)
  }

  render() {
    return null;
  }
}

export default index;