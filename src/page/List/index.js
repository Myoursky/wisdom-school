// @flow
import React from 'react';
import styled from 'styled-components';
import bindingBk from 'assets/images/binding-bk.png';
import Button from 'components/Button';

class Index extends React.Component<Props> {

  render() {
    return (
      <Root>
        <Banner img={bindingBk} />
        <Content>
          <Title>您已绑定的学生</Title>
          <ElemContainer>
            <Elem hasBorder>
              <Label>学生姓名</Label>
              <Value>张三</Value>
            </Elem>
            <Elem>
              <Label>校园卡卡号</Label>
              <Value>123456</Value>
            </Elem>
          </ElemContainer>
          <ElemContainer>
            <Elem hasBorder>
              <Label>学生姓名</Label>
              <Value>李四</Value>
            </Elem>
            <Elem>
              <Label>校园卡卡号</Label>
              <Value>123456</Value>
            </Elem>
          </ElemContainer>
        </Content>
        <Button style={{position: 'absolute', bottom: 0}}>继续绑定</Button>
      </Root>
    );
  }
}

export default Index

const Root = styled.div`
`;

const Banner = styled.div`
  width: 100%;
  height: 235px;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  margin: -60px 15px 15px 15px;
  z-index: 1;
  position: relative;
`;

const Title = styled.p`
  font-size: 22px;
  color: #FFF;
  text-align: left;
  margin: 0;
  padding-bottom: 12px;
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