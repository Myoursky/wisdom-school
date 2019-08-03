// @flow
import React from 'react';
import styled from 'styled-components';
import Modal from './../Modal';

const Container = styled.div`
  background-color: #FFF;
  position: absolute;
  border-radius: 3px;
  padding: 5px 10px;
  right: 13px;
  top: 45px;
`;

const Arrow = styled.span`
  position: absolute;
  right: 8px;
  top: -3.5px;
  width: 7px;
  height: 7px;
  border-radius: 1px;
  background-color: #fff;
  transform: rotate(45deg);
`;

const Elem = styled.div`
  font-size: 14px;
  color: #1a1a1a;
  padding: 8px 20px;
  border-bottom: ${props => props.last ? 'none' : '1px solid #e0e0e0'};
`;

type Props = {
  values: Array<string>,
  onSelect: Function,
  backDropClick: Function,
}

export default class Codes extends React.Component<Props> {

  onSelect = (index: number) => {
    this.props.onSelect(index);
  }

  render() {
    const { values, backDropClick } = this.props;
    const Elems = values.map((value, index) => (
      <Elem key={index} last={index === values.length - 1} onClick={() => this.onSelect(index)}>{value}</Elem>
    ));
    return (
      <Modal backDropClick={backDropClick}>
        <Container>
          <Arrow />
          {Elems}
        </Container>
      </Modal>
    );
  }
}