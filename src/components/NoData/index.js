// @flow strict
import React from 'react';
import styled from 'styled-components';
import NoDataIcon from 'assets/images/no-data.png';

const Root = styled.div`
  text-align: center;
  margin-top: ${props => props.top ? props.top : '80px'};
`;

const Img = styled.div`
  width: 128px;
  height: 128px;
  background: url(${NoDataIcon}) no-repeat;
  background-size: 128px 128px;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 14px;
  color: #959CA3;
  margin: 0;
`;

type Props = {
  value: string,
  top?: string
};

export default class NoData extends React.Component<Props> {
  render() {
    const { value, top } = this.props;
    return (
      <Root top={top}>
        <Img />
        <Text>{value}</Text>
      </Root>
    );
  }
}