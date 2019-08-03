// @flow
import React from 'react';
import styled from 'styled-components';
import NoDataIcon from './node_modules/assets/images/404.png';

type Props = {
}

class Index extends React.Component<Props> {
  render() {
    return (
      <Root>
        <Icon src={NoDataIcon} />
        <Text>暂未开放，敬请期待</Text>
      </Root>
    );
  }
}

export default Index

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 258px;
  height: 306px;
`;

const Text = styled.div`
  font-size: 15px;
  color: #FFF;
`;