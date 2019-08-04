// @flow strict
// 手机头部

import * as React from 'react';
import styled from 'styled-components';
import ButtonCmp from './Button';
import { withRouter } from 'react-router'

const Root = styled.div`
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  height: 48px;
  border-bottom: 1px solid rgba(199, 199,199, 0.31);
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
  background: #F7F7F7;
  z-index: 1000;
`

const TitleContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 18px;
  width: 60%;
  margin: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
`

const Arrow = styled.img`
  height: 16px;
  width: 9px;
`

const ArrowContainer = styled.div`
  height: 40px;
  width: 40px;
  padding: 12px 0px;
  box-sizing: border-box;
`

const ButtonsContaner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto;
`

const Icon = styled.img`
  width: 26px;
  height: 26px;
`

type Button ={
  label: string,
  icon: string,
  pops: Array<string>,
  disabled?: boolean,
  onClick?: (index?: number) => void
}

type Props = {|
  title: string,
  goBack?: () => void,
  history: any,
  rightButton?: Button | Array<Button>,
  leftButton?: Button | Array<Button>,
  icon: string,
  iconClick?: () => void,
  fixed?: boolean // (fixed定位）
|};

class index extends React.Component<Props> {

  componentDidMount() {
    if (this.props.fixed) {
      const body: any = document.body;
      body.style.paddingTop = '48px';
    }
  }

  componentWillUnmount() {
    if (this.props.fixed) {
      const body: any = document.body;
      body.style.paddingTop = null;
    }
  }

  getIconImg = () => {
    const {icon} = this.props;
    let src;
    switch (icon) {
      case 'filter':
        src = require('./filter.png');
        break;
      default:
        break;
    }
    return src;
  }

  render() {
    const {
      title,
      leftButton = [],
      rightButton = [],
      goBack = () => {
        const {history} = this.props;
        history.goBack(); // 返回
      },
      iconClick = () => {},
      icon,
      fixed
    } = this.props;
    const rbtns: Array<Button> = Array.isArray(rightButton) ? rightButton : [rightButton];
    const lbtns: Array<Button> = Array.isArray(leftButton) ? leftButton : [leftButton];
    return (
      <Root fixed={fixed}>
        {lbtns.length ? lbtns.map((btn, index) => (
          <ButtonCmp key={index} label={btn.label} pops={btn.pops} disabled={btn.disabled} icon={btn.icon} onClick={btn.onClick}/>
        )): <ArrowContainer onClick={goBack} ><Arrow src={require('./arrow.png')}/></ArrowContainer>}

        <TitleContainer>{title}</TitleContainer>
        <ButtonsContaner>
          {rbtns.map((btn, index) => (
            <ButtonCmp key={index} label={btn.label} pops={btn.pops} disabled={btn.disabled} icon={btn.icon} onClick={btn.onClick}/>
          ))}
          {icon && <Icon onClick={iconClick} src={this.getIconImg()}/>}
        </ButtonsContaner>
      </Root>
    );
  }
}

export default withRouter(index);