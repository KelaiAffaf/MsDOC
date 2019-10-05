import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import Card from '../components/Inscription/card.js'
import { gray } from '../styles/utilities/Colors'
import Layout2 from '../components/Layout/layout2'
import Checkbox from '../components/Form/SimpleCheckBox'

import Pform from '../components/Form/Pform'
import TextArea from '../components/Form/TextArea'


const Container=styled.div`
    display: grid;
    grid-template-columns: auto auto ;
    grid-gap: 10px;
    background-color: blue;
    padding: 30px;
  }
  
  div {
    
    text-align: center;
    padding: 10px;
    padding-left: 30px;
    font-size: 30px;
     
  }
}`;

 const Item1=styled.div` 
    grid-area: 1 / 1 / 2 / 3;
    height:200px;
    width:400px; 
    background-color: red;
    margin-top: 60px;
    
    
  `;
  const Item2=styled.div`
      grid-area: 1/3/2/12;
      height:200px;
      width:800px; 
      margin-top: 60px;
      background-color: red;
  `;
  const Item3=styled.div`
    grid-area: 2/1/2/6;
    height:300px;
    width:500px; 
    
    background-color: red;
`;

const Item4=styled.div `
    grid-area: 2/6/2/12;
    width:500px; 
    height:300px; 
    background-color: red;
`;
const Item5=styled.div`
    grid-area: 3/1/3/6;
    width:500px; 
    height:300px; 
    background-color: red;
    
`;

const Item6 =styled.div`
    grid-area: 3/6/3/12;
    width:500px;
    height:300px; 
    background-color: red;
`;
const Item7=styled.div`
    grid-area: 4/1/4/6;
    width:500px; 
    height:300px; 
    background-color: red;
    
`;

const Item8 =styled.div`
    grid-area: 4/6/4/12;
    width:500px;
    height:300px; 
    background-color: red;
`;
const StyledImg = styled.div`
    width: 50%;
    padding: 0.5rem;
    img{
        width: 100%;
    }
    
`;
const Paralel = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top:25px;
    padding-left:5px;
    
    `;

const Fiche = () => (
    
    <Layout2>
      <Container>
          
            <Item1>
            <StyledImg>
            <img src={require("../images/man.svg")}></img>
            </StyledImg>
            </Item1>
            <Item2>2</Item2>
           


           
            <Item3>3</Item3>
            <Item4>4</Item4>
             
            <Item5>5</Item5>
            <Item6>6</Item6>

            <Item7>7</Item7>
            <Item8>8</Item8>
            
      </Container>
      </Layout2>
     
  
)


export default Fiche;