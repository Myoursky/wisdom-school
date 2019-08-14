// @flow
import React from 'react';
import styled from 'styled-components';
import Body from 'components/Body';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getlocalStorage } from 'utils/localStorage';
import { getRecords } from './../../redux/modules/binding';
import NoRecords from './NoRecords';

type Props = {
  getRecords: Function,
  records: Array<Object>,
}

class Index extends React.Component<Props> {

  componentDidMount() {
    const openId = getlocalStorage('weixin_openId');
    this.props.getRecords({memberId: openId});
  }

  renderData = () => {
    const { records } = this.props;
    if (records.length) {
      const data = records.map(record => {
        return <ElemContainer key={record.id}>
          <Elem hasBorder>
            <Label>学生姓名</Label>
            <Value>{record.sname}</Value>
          </Elem>
          <Elem hasBorder>
            <Label>考勤时间</Label>
            <Value>{record.attTime}</Value>
          </Elem>
          <Elem>
            <Label>考勤状态</Label>
            <Value>{record.attStatus === '1' ? '正常' : '异常'}</Value>
          </Elem>
        </ElemContainer>
      }) 
      return <Root>{data}</Root>
    } else {
      return <NoRecords />
    }
  }

  render() {
    return (
      <Body>
        {this.renderData()}
      </Body>
    );
  }
}

export default withRouter(connect(state => ({
  records: state.binding.records
}), {
  getRecords
})(Index));

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