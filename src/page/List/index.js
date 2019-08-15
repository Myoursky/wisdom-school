// @flow
import React from 'react';
import styled from 'styled-components';
import bindingBk from 'assets/images/binding-bk.png';
import Body from 'components/Body';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStudents } from './../../redux/modules/binding';
import { getlocalStorage } from 'utils/localStorage';
import Button from 'components/Button';

type Props = {
  getRecords: Function,
  records: Array<Object>,
}

class Index extends React.Component<Props> {

  async componentDidMount() {
    const openId = getlocalStorage('weixin_openId');
    await this.props.getStudents({memberId: openId});
    const { students } = this.props;
    if (students.length === 0) {
      window.alert('您还没有绑定学生，请先去绑定吧');
    }
  }

  goBinding = () => {
    const url = '/wx/react/school/binding';
    this.props.history.push(url);
  }

  renderData = () => {
    const { students } = this.props;
    const data = students && students.map((student) => {
      return <ElemContainer key={student.id}>
        <Elem hasBorder>
          <Label>学生姓名</Label>
          <Value>{student.sname}</Value>
        </Elem>
        <Elem>
          <Label>校园卡卡号</Label>
          <Value>{student.cardNo}</Value>
        </Elem>
      </ElemContainer>
    });
    return data;
  }

  render() {
    return (
      <Body block>
        <Banner img={bindingBk} />
        <Content>
          <Title>您已绑定的学生</Title>
          {this.renderData()}
        </Content>
        <Button style={{position: 'absolute', bottom: 0, zIndex: 1}} onClick={this.goBinding}>继续绑定</Button>
      </Body>
    );
  }
}

export default withRouter(connect(state => ({
  students: state.binding.students,
}), {
  getStudents
})(Index));

const Banner = styled.div`
  width: 100%;
  height: 235px;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  margin: -60px 15px 65px 15px;
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