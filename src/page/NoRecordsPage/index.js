// @flow
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import WarnBk from 'assets/images/warn-bk.png';
import WarnIcon from 'assets/images/warn.png';
import getURLParameters from 'utils/getURLParameters';

type Props = {
  type: number,
}

type State = {
  value: string
}

class Index extends React.Component<Props, State> {

  state = {
    value: 1
  }

  componentDidMount() {
    const { type } = getURLParameters(window.location.href);
    const value = this.setValue(type);
    this.setState({value});
  }

  setValue = (type) => {
    switch(type) {
      case '0':
        return '暂无通知'
      case '1':
        return '暂无成绩信息'
      case '2':
        return '暂无作业信息'
      default:
        return '暂无通知'
    }
  }

  render() {
    const { value } = this.state;
    return (
      <Root>
        <Banner>
          <Icon src={WarnIcon} />
          <Text>{value}</Text>
        </Banner>
      </Root>
    );
  }
}

export default withRouter(Index);

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