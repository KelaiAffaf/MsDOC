import React from 'react'
import styled from 'styled-components'
import './Pform.css'
import Inpout from '../Inscription/Inpout'
import '../Inscription/Inpout.css'
import RadioButton from './RadioButton'

const StyledImg = styled.div`
    width: 50%;
    padding: 0.5rem;
    img{
        width: 100%;
    }
    
`;

const StyledForm = styled.div`
    width: 40%;
    form{
        margin-top: 1rem;
        display: flex;
        flex-direction: column
    }
    margin-left: 0%;
    
`;


const Pform =()=>(

<div class="grid-container">
  
  <div class="item1">
      <StyledImg>
      <img src={require("../../images/man.svg")}></img>
      </StyledImg>
  </div>
  <div class="item2">
  <Inpout Label="Numero_Dossier"></Inpout>
  </div>
  <div class="item3">
  <Inpout Label="Date derniere visite "></Inpout>
      </div>  
  <div class="item4">
  <StyledForm>
                    
                    <form>
                        
                       <Inpout  Label="Nom"></Inpout>
                       <Inpout  Label="Prenom"></Inpout>
                        
                        <Inpout Label ="Date of birth" />
                        <Inpout Label="Sexe" />
                        <Inpout Label ="Ville" />
                        
                        <Inpout Label="Specialitee" />
                        
                    </form>
                    
                </StyledForm>
         <RadioButton></RadioButton>
  </div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  
  
</div>

)
export default Pform;