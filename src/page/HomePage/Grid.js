// @flow
import React from 'react';
import styled from 'styled-components';
import studentIcon from 'assets/images/student.png';
import checkInIcon from 'assets/images/checkin.png';
import phoneIcon from 'assets/images/phone.png';
import noticeIcon from 'assets/images/notice.png';
import performanceIcon from 'assets/images/performance.png';
import homeworkIcon from 'assets/images/homework.png';
import consumeIcon from 'assets/images/consume.png';
import vacateIcon from 'assets/images/vacate.png';

type Props = {
}

class Index extends React.Component<Props> {

  static defaultProps = {
  };

  render() {
    return (
      <Root>
        <Elems>
          <Elem>
            <Icon img={studentIcon} />
            <Text>学生绑定</Text>
          </Elem>
          <Elem>
            <Icon img={checkInIcon} />
            <Text>考勤记录</Text>
          </Elem>
          <Elem>
            <Icon img={phoneIcon} />
            <Text>亲情电话</Text>
          </Elem>
        </Elems>
        <Elems>
          <Elem>
            <Icon img={noticeIcon} />
            <Text>学校通知</Text>
          </Elem>
          <Elem>
            <Icon img={performanceIcon} />
            <Text>成绩查询</Text>
          </Elem>
          <Elem>
            <Icon img={homeworkIcon} />
            <Text>家庭作业</Text>
          </Elem>
        </Elems>
        <Elems>
          <Elem>
            <Icon img={consumeIcon} />
            <Text>消费记录</Text>
          </Elem>
          <Elem>
            <Icon img={vacateIcon} />
            <Text>请假申请</Text>
          </Elem>
          <Elem>
            <Text>......</Text>
          </Elem>
        </Elems>
      </Root>
    );
  }
}

export default Index

const Root = styled.div`
  margin: 0 15px;
  background: #FFF;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  margin-top: -30px;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
`;

const Elems= styled.div`
  display: flex;
`;

const Elem = styled.div`
  flex: 1;
  display: flex;
  height: 115px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 15px;
  color: #666;
  flex-direction: column;
  cursor: pointer;
`;

const Icon = styled.span`
  display: inline-block;
  width: 48px;
  height: 48px;
  background: url(${props => props.img}) no-repeat;
  background-size: 48px 48px;
  margin-bottom: 6px;
`;

const Text = styled.p`
  margin: 0;
`