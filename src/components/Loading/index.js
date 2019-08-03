// @flow
import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 120px;
  top: 50%;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  z-index: 999;
  line-height: 1.6;
  position: fixed;
  color: #fff;
  text-align: center;
  padding: 10px 5px;
  font-size: 14px;
  margin: 0 auto;
  margin-top: -32px;
  border-radius: 5px;
`;

type Props = {
  value: string
};

export default class Toast extends React.Component<Props> {
  render() {
    const { value } = this.props;
    return (
      <Root>
        { value }
      </Root>
    );
  }
}