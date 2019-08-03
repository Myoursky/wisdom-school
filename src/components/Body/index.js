// @flow strict

import * as React from 'react';
import Header from './../Header';
import styled from 'styled-components';
import { withRouter } from 'react-router'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: #efeff4;
`

const Container = styled.div`
  flex: 1;
  display: ${props => props.block ? 'block' : 'flex'};
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`

type Props = {
  title?: string,
  header?: React.Node,
  footer?: React.Node,
  children?: React.Node,
  block?: boolean,
  goBack?: () => void,
  history: any
};

class Body extends React.Component<Props> {
  
  render() {
    const {title,
      header,
      footer,
      children,
      block,
      goBack = () => {
        const {history} = this.props;
        history.goBack(); // 返回
      },
      ...others
    } = this.props;
    let _header;
    if (title) _header = <Header title={title} goBack={goBack}/>
    if (header) _header = header;
    return (
      <Root {...others}>
        {_header}
        <Container block={block}>
          {children}
        </Container>
        {footer}
      </Root>
    );
  }
}

export default withRouter(Body);