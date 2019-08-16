// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import SuccessBk from 'assets/images/success-bk.png';
import FailBk from 'assets/images/fail-bk.png';
import SuccessIcon from 'assets/images/success.png';
import FailIcon from 'assets/images/fail.png';

type Props = {
  success: boolean,
  message: string,
  onClick?: Function
}

class Index extends React.Component<Props> {

  renderMsg = () => {
    const { success, onClick, message } = this.props;
    if (success) {
      return '您已绑定成功，即将跳转到主页面...'
    } else {
      return <Block>
        <Elem>{message || '信息有误，请重新绑定。'}</Elem>
        <Link onClick={onClick}>重新绑定</Link>
      </Block>
    }
  }

  render() {
    const { success } = this.props;
    return (
      <Fragment>
        <Masking />
        <Root>
          <Banner img={success ? SuccessBk : FailBk }>
            <Icon src={success ? SuccessIcon : FailIcon } alt="" />
            <Text>{success ? '绑定成功' : '绑定失败'}</Text>
          </Banner>
          <Content>
            {this.renderMsg()}
          </Content>
        </Root>
      </Fragment>
    );
  }
}

export default Index

const Masking = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Root = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -140px;
  left: 15px;
  right: 15px;
  box-sizing: border-box;
`;

const Banner = styled.div`
  width: 100%;
  height: 198px;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px 4px 0 0;
`;

const Icon = styled.img`
  width: 58px;
  height: 58px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 20px;
  color: #FFF;
  margin: 12px 0 0 0;
  padding: 0;
`;

const Content = styled.div`
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #333;
  background-color: #FFF;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 0 0 4px 4px;
`;

const Elem = styled.p`
  font-size: 15px;
  color: #333;
  padding: 0;
  margin: 0;
`;

const Link = styled.a`
  font-size: 15px;
  color: #3266FA;
  text-align: center;
  margin-top: 8px;
`;