// @flow
import React from 'react';
import styled from 'styled-components';
import Banner from 'components/Banner';
import HomeBkImg from 'assets/images/home-bk.png';
import Grid from './Grid';

type Props = {
}

class Index extends React.Component<Props> {

  static defaultProps = {
  };

  render() {
    return (
      <Root>
        <Banner banner={HomeBkImg} />
        <Grid />
      </Root>
    );
  }
}

export default Index

const Root = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f0f1f2;
`;