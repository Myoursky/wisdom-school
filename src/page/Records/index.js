// @flow
import React from 'react';
import styled from 'styled-components';
import Body from 'components/Body';
import NoRecords from './NoRecords';

class Index extends React.Component<Props> {

  renderData = () => {
    if (true) {
      return <Root>
        <ElemContainer>
          <Elem hasBorder>
            <Label>学生姓名</Label>
            <Value>张三</Value>
          </Elem>
          <Elem hasBorder>
            <Label>考勤时间</Label>
            <Value>2019-09-30 07:00</Value>
          </Elem>
          <Elem>
            <Label>考勤状态</Label>
            <Value>正常</Value>
          </Elem>
        </ElemContainer>
        <ElemContainer>
          <Elem hasBorder>
            <Label>学生姓名</Label>
            <Value>李四</Value>
          </Elem>
          <Elem hasBorder>
            <Label>考勤时间</Label>
            <Value>2019-09-30 07:00</Value>
          </Elem>
          <Elem>
            <Label>考勤状态</Label>
            <Value>正常</Value>
          </Elem>
        </ElemContainer>
        <ElemContainer>
          <Elem hasBorder>
            <Label>学生姓名</Label>
            <Value>王五</Value>
          </Elem>
          <Elem hasBorder>
            <Label>考勤时间</Label>
            <Value>2019-09-30 07:00</Value>
          </Elem>
          <Elem>
            <Label>考勤状态</Label>
            <Value>正常</Value>
          </Elem>
        </ElemContainer>
      </Root>
    } else {
      return <NoRecords />
    }
  }

  render() {
    return (
      <Body title="考勤记录">
        {this.renderData()}
      </Body>
    );
  }
}

export default Index

const Root = styled.div`
  margin: 15px;
  box-sizing: border-box;
`;

const ElemContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
  margin-bottom: 15px;
  background-color: #FFF;
`;

const Elem = styled.div`
  display: flex;
  font-size: 15px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background-color: ${props => props.hasBorder ? '#E0E0E0' : 'transparent'};
    display: block;
    z-index: 0;
    top: auto;
    bottom: 0;
    left: 15px;
    width: 100%;
    height: 1px;
    transform-origin: 50% 100%;
    transform: scaleY(0.5);
  }
`;

const Label = styled.div`
  padding: 15px;
`;

const Value = styled.div`
  flex: 1;
  text-align: right;
  padding: 15px;
  color: #666;
`;