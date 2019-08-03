// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  banner: string
}

class Index extends React.Component<Props> {
  render() {
    const { banner } = this.props;
    return (
      <Root img={banner} />
    );
  }
}

export default Index

const Root = styled.div`
  width: 100%;
  height: 235px;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
`;