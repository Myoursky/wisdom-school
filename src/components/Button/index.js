// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  disabled: boolean,
  children: string | React.Node,
  style: Object,
  onClick: Function
}

class Index extends React.Component<Props> {

  static defaultProps = {
  };

  render() {
    const { disabled, children, style, onClick } = this.props;
    return (
      <Root disabled={disabled} style={{...style}} onClick={onClick}>
        {children}
      </Root>
    );
  }
}

export default Index

const Root = styled.div`
  width: 100%;
  font-size: 15px;
  padding: 15px 0;
  text-align: center;
  background-color: ${props => props.disabled ? '#888' : '#3266FA'};
  color: #FFF;
`;