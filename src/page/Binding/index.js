// @flow
import React from 'react';
import styled from 'styled-components';
import Body from 'components/Body';
import Button from 'components/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addStudent } from './../../redux/modules/binding';
import { getlocalStorage } from 'utils/localStorage';
import Dialog from './Dialog';

type Props = {
  addStudent: Function,
}

type State = {
  name: string,
  number: string,
  isCorrect: boolean,
  showDialog: false,
  bindSuccess: false
}

class Index extends React.Component<Props, State> {

  state = {
    name: '',
    number: '',
    isCorrect: false
  }

  validate = async () => {
    const { name, number } = this.state;
    if (name === '') {
      await this.setState({isCorrect: false});
      return;
    }
    if (number === '') {
      await this.setState({isCorrect: false});
      return;
    }
    await this.setState({isCorrect: true});
  }

  saveStudent = () => {
    const { name, number, isCorrect } = this.state;
    const openId = getlocalStorage('weixin_openId');
    if (!isCorrect) return;
    if (isCorrect) {
      this.props.addStudent({
        sname: name,
        cardNo: number,
        memberId: openId
      }).then(async (result) => {
        if (result.success) {
          await this.setState({showDialog: true, bindSuccess: true});
          setTimeout(async () => {
            await this.setState({showDialog: false})
            this.props.history.replace('/wx/react/school/list');
          }, 1000);
        } else {
          await this.setState({showDialog: true, bindSuccess: false});
        }
      });
    }
  }

  changeName = async (event) => {
    await this.setState({name: event.target.value});
    this.validate();
  }

  changeNumber = async (event) => {
    await this.setState({number: event.target.value});
    this.validate();
  }

  resetBindingInfo = () => {
    this.setState({number: '', name: '', showDialog: false, bindSuccess: false, isCorrect: false });
  }

  render() {
    const { name, number, isCorrect, showDialog, bindSuccess } = this.state;
    return (
      <Body>
        <Container>
          <Elem hasBorder>
            <Label>学生姓名</Label>
            <Input value={name} onChange={this.changeName}/>
          </Elem>
          <Elem>
            <Label>校园卡卡号</Label>
            <Input value={number} onChange={this.changeNumber}/>
          </Elem>
        </Container>
        <Button style={{position: 'absolute', bottom: 0}} disabled={!isCorrect} onClick={this.saveStudent}>提交</Button>
        { showDialog && <Dialog success={bindSuccess} onClick={this.resetBindingInfo} /> }
      </Body>
    );
  }
}

export default withRouter(connect(null, {
  addStudent
})(Index));

const Container = styled.div`
  margin: 15px;
  overflow: hidden;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
`;

const Elem = styled.div`
  position: relative;
  display: flex;
  background-color: #FFF;
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