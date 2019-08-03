// @flow
import React from 'react';
import styled from 'styled-components';
import Body from 'components/Body';
import NoDataIcon from 'assets/images/404.png';

type Props = {
}

class Index extends React.Component<Props> {
  render() {
    return (
      <Body title="家校安智慧校园">
        <Container>
          <Icon src={NoDataIcon} />
          <Text>暂未开放，敬请期待</Text>
        </Container>
      </Body>
    );
  }
}

export default Index

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Icon = styled.img`
  width: 258px;
  height: 306px;
`;

const Text = styled.div`
  font-size: 15px;
  color: #333;
  margin-top: -60px;
`;