import React from 'react'
import styled from 'styled-components'
import { Button } from 'styled-button-component'
import {
  Dropdown,
  DropdownMenu,
} from 'styled-dropdown-component'

import { darkBleu, bleu } from '../styles/colors';


const StyledButton = styled(Button)`
    background: none;
    border: none;
    
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 0.8rem 2rem;
    
    :last-child{
        padding-right: 0;
    }
    position: relative;
    text-decoration: none;
    color: ${darkBleu};
    font-weight: 700;

    &:hover{
        background: none !important;
        border: none !important;
        color: ${bleu};
        cursor: pointer;
    }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
    padding: 0;
    padding-top: 1.6rem !important;
    border: none;
    border-radius: 0px;
`;

class SimpleDropdown extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true,
    };
  }
 
  handleOpenDropdown() {
      this.setState({
        hidden: false,
      });
  }
  handleCloseDropdown() {
    this.setState({
      hidden: true,
    });
}
 
  render() {
    const { hidden } = this.state;
    return (
        <Dropdown onMouseEnter={() => this.handleOpenDropdown()} onMouseLeave={() => this.handleCloseDropdown()}>
            <StyledButton secondary dropdownToggle>
                {this.props.text}
            </StyledButton>
            <StyledDropdownMenu hidden={hidden}>
                {this.props.args}
            </StyledDropdownMenu>
        </Dropdown>
    );
  }
};

export default SimpleDropdown;