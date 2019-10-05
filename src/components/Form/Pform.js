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
const StyledImg2 = styled.div`
    width: 80%;
    padding: 1rem;
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
const Paralel = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top:25px;
    padding-left:5px;
    input{
        width:15%;
    }
    h3{
        font-family: 'Roboto', sans-serif;
        color:#999; 
        font-size:18px;
        font-weight:normal;
        
    }
`;

const Pform =()=>(

<div class="grid-container">
  
  <div class="item1">
      <StyledImg>
      <img src={require("../../images/man1.svg")}></img>
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
                        <Inpout Label="Specialitee " />
                        <Inpout Label ="Adresse " />
                        <Inpout Label="Ville" />
                        
                    </form>
                    
                </StyledForm>

         
  </div>
                    <div class="item5">

                    <StyledForm>
                                        
                                        <form>
                                            
                                            <Inpout  Label="Sexe"></Inpout>
                                            <Inpout  Label="E-mail"></Inpout>
                                            <Inpout Label ="Age" />
                                            
                                                 <Paralel>
                                                <h3>Assuree</h3>
                                                <RadioButton></RadioButton>
                                                </Paralel>

                                                <Paralel>
                                                <h3>Fumeur</h3>
                                                <RadioButton></RadioButton>
                                                </Paralel>

                                                <Paralel>
                                                <h3>Alcholique</h3>
                                                <RadioButton></RadioButton>
                                                </Paralel>
                                              </form>
                                        
                                    </StyledForm>
  </div>
                                         <div class="item6">

                                            <Inpout  Label="Situation Familiale"></Inpout>
                                            <Inpout  Label="Mobile"></Inpout>
                                            <Inpout Label ="Nombre  d’enfant" />
                                            <Inpout Label="N Assurence" />

                                            <StyledImg2>
                                            <img src={require("../../images/dossier.svg")}></img>
                                            </StyledImg2>
                                        </div>
  
  
</div>

)
export default Pform;