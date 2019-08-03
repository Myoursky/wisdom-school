// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import Popover from './Popover';

const Root = styled.div`
  font-size: 16px;
  color: ${props => !!props.disabled ? '#bdbdbd' : '#1A1A1A'};
  text-align: center;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  position: relative;
`

const Icon = styled.img`
  width: 26px;
  height: 26px;
`

type Props = {|
  label?: string,
  icon?: string | React.Node,
  disabled?: boolean,
  onClick?: (index?: number) => void,
  children?: React.Node,
  pops?: Array<string>
|};

type State = {
  show: boolean
}

class RightButton extends React.Component<Props, State> {
  state = {
    show: false
  }

  btnClick = () => {
    const {onClick, disabled, pops} = this.props;
    if (pops && pops.length) {
      this.setState({show: true});
    } else {
      onClick && !disabled && onClick();
    }
  }

  popSelect = (index: number) => {
    const {onClick} = this.props;
    this.setState({show: false});
    onClick && onClick(index);
  }

  backDropClick = () => {
    this.setState({show: false})
  }

  render() {
    const {label, onClick, icon, children, pops, ...others} = this.props;
    const {show} = this.state;
    return (
      <Container>
        <Root onClick={this.btnClick} {...others}>
          {label}
          {icon && (typeof icon === 'string' ? <Icon src={icon}/> : icon)}
          {children}
        </Root>
        {pops && !!pops.length && show && <Popover backDropClick={this.backDropClick} values={pops} onSelect={this.popSelect}/>}
      </Container>
    );
  }
}

export default RightButton;