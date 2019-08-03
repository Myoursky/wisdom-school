/**
 * Modal层
 * 
 * @flow
 */

import { Component } from 'react';
import ReactDOM from 'react-dom'
import * as React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  position: ${props => !!props.fixed ? 'fixed' : 'absolute'};
  ${props => !!props.flex ? `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  ` : ''}
  background: rgba(0,0,0,0.4);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
`

let modalRoot = document.getElementById('react-v2-modal');
if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'react-v2-modal')
  if (document.body) document.body.appendChild(modalRoot);
}

type Props = {
  fixed?: boolean,
  flex?: boolean,
  children: React.Node,
  backDropClick?: () => void
}

class Modal extends Component<Props> {
  el: HTMLElement
  root: ?HTMLElement

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (modalRoot) modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    if (modalRoot) modalRoot.removeChild(this.el);
  }

  click = (event: any) => {
    const {backDropClick} = this.props;
    if (this.root) {
      if (event.target === ReactDOM.findDOMNode(this.root)) {
        backDropClick && backDropClick();
      }
    }
  }

  render() {
    const {children, ...others} = this.props;
    return ReactDOM.createPortal(
      <Root ref={root => this.root = root} onClick={this.click} {...others}>{children}</Root>,
      this.el,
    );
  }
}

export default Modal;
