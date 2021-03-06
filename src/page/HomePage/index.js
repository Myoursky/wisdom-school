// @flow
import React from 'react';
import Body from 'components/Body';
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
      <Body block>
        <Banner banner={HomeBkImg} />
        <Grid />
      </Body>
    );
  }
}

export default Index
