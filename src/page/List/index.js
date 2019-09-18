// @flow
import React from 'react';
import styled from 'styled-components';
import bindingBk from 'assets/images/binding-bk.png';
import Body from 'components/Body';
import Loading from 'components/Loading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStudents, relieveStudent } from './../../redux/modules/binding';
import { getlocalStorage } from 'utils/localStorage';
import Swipeout from 'rc-swipeout';
import Button from 'components/Button';
import NoData from 'components/NoData';
import Toast from 'components/Toast';

type Props = {
  getRecords: Function,
  deleteStudent: Function,
  records: Array<Object>,
}

type State = {
  isLoading: boolean,
}

class Index extends React.Component<Props, State> {

  state = {
    isLoading: false
  }

  componentDidMount() {
    this.loadStudent();
  }

  loadStudent = () => {
    const openId = getlocalStorage('weixin_openId');
    this.setState({isLoading: true});
    this.props.getStudents({memberId: openId}).then(() => {
      this.setState({isLoading: false});
    });
  }

  goBinding = () => {
    const url = '/wx/react/school/binding';
    this.props.history.push(url);
  }

  deleteStudent = (id) => {
    const openId = getlocalStorage('weixin_openId');
    this.props.relieveStudent({
      memberId:openId,
      id
    }).then((result) => {
      if (result.success) {
        Toast.show('解绑成功！');
        this.loadStudent();
      } else {
        Toast.show(result.message);
      }
    })
  }

  renderData = () => {
    const { students } = this.props;
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loading value="加载中..." />
    } else {
      if (students.length === 0) {
        return <NoData value="您还未绑定学生" />
      }
      const data = students && students.map((student) => {
        return <Swipeout
              style={{borderBottom: '1px solid #e0e0e0'}}
              key={student.id}
              autoClose
              right={[
                {
                  text: '解绑',
                  onPress: () => this.deleteStudent(student.id),
                  style: { backgroundColor:'#FF161D',color:'#FFF',fontSize:'16px',width: 60, marginBottom: 15, borderRadius: '0 4px 4px 0'}
                }
              ]}
            >
            <ElemContainer key={student.id}>
              <Elem hasBorder>
                <Label>学生姓名</Label>
                <Value>{student.sname}</Value>
              </Elem>
              <Elem>
                <Label>校园卡卡号</Label>
                <Value>{student.cardNo}</Value>
              </Elem>
            </ElemContainer>
          </Swipeout>
      });
      return data; 
    }
  }

  render() {
    const hasStudent = this.props.students.length > 0;
    return (
      <Body block>
        <Banner img={bindingBk} />
        <Content>
          <Title>您已绑定的学生</Title>
          {this.renderData()}
        </Content>
        <Button style={{position: 'absolute', bottom: 0, zIndex: 1}} onClick={this.goBinding}>{hasStudent ? '继续绑定' : '去绑定'}</Button>
      </Body>
    );
  }
}

export default withRouter(connect(state => ({
  students: state.binding.students,
}), {
  getStudents,
  relieveStudent
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