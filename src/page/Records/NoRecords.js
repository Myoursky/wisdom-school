// @flow
import React from 'react';
import styled from 'styled-components';
import WarnBk from 'assets/images/warn-bk.png';
import WarnIcon from 'assets/images/warn.png';
import Button from 'components/Button';

type Props = {
}

class Index extends React.Component<Props> {
  render() {
    return (
      <Root>
        <Banner>
          <Icon src={WarnIcon} />
          <Text>请先绑定学生信息</Text>
        </Banner>
        <Button onClick={this.onClick} style={{position: 'absolute', bottom: 0}}>
          去绑定
        </Button>
      </Root>
    );
  }
}

export default Index

const Root = styled.div`
`;

const Banner = styled.div`
  width: 100%;
  height: 222px;
  background: url(${WarnBk}) no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 58px;
  height: 58px;
`;

const Text = styled.div`
  margin-top: 8px;
  font-size: 15px;
  color: #FFF;
`;