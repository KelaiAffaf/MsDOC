import React , {Component} from 'react'

import styled from 'styled-components'
  const StyledInput=styled.input`
   height:25px;
   width:30px;
   color: #999;
   `;
 
   const ParalelInput = styled.div`
    display: flex;
    flex-direction:row;
    
    width:300px;
    
    justify-content: flex-end;
    input{
        width:15%;
    }
    h3{
      color:#999; 
      font-size:18px;
      font-weight:normal;
      
    }
`;
export default class RadioButton extends React.Component {
   
  
    constructor() {
      super();
      this.state = {
        selectedOption: ''
      };
    this.radioChange = this.radioChange.bind(this);
  }
  
    radioChange(e) {
      this.setState({
        selectedOption: e.currentTarget.value
      });
    }
  
   
  
  render() {
    //const { checked } = this.state;
    return (
      <div>
        <ParalelInput>
        
        <StyledInput type="radio"
               value="Yes"
               checked={this.state.selectedOption === "Yes"}
               onChange={this.radioChange} /><h3>Yes</h3>

        <StyledInput type="radio"
               value="No"              
               checked={this.state.selectedOption === "No"}
               onChange={this.radioChange}/><h3>No</h3>
        </ParalelInput>
        
        
      </div> 
    );
  }
}