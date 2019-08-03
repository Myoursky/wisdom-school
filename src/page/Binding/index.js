// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Dialog from './Dialog';

type Props = {
}

class Index extends React.Component<Props> {

  render() {
    return (
      <Fragment>
        <Root>
          <Container>
            <Elem hasBorder>
              <Label>学生姓名</Label>
              <Input />
            </Elem>
            <Elem>
              <Label>校园卡卡号</Label>
              <Input />
            </Elem>
          </Container>
          <Button style={{position: 'absolute', bottom: 0}} disabled>提交</Button>
        </Root>
        <Dialog success={false} />
      </Fragment>
    );
  }
}

export default Index

const Root = styled.div`

`;

const Container = styled.div`
  margin: 15px;
  overflow: hidden;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
`;

const Elem = styled.div`
  position: relative;
  display: flex;
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
  font-size: 15px;
  color: #333;
  padding: 15px;
`;

const Input = styled.input`
  font-size: 15px;
  color: #1a1a1a;
  flex: 1;
  margin: 0;
  appearance: none;
  width: 100%;
  padding: 2px 15px;
  border: 0;
  background-color: transparent;
  line-height: 1;
  box-sizing: border-box;
  text-align: right;
  &:focus {
    outline: none;
  }
`;