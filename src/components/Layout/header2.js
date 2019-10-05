import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { DropdownItem } from 'styled-dropdown-component'
//import { lightBleu, darkBleu, bleu, blue } from '../styles/colors'

//import SimpleDropDown from './dorpDown'
//import {Josefin} 'gatsby-plugin-prefetch-google-fonts'
import { ModalProvider, BaseModalBackground } from "styled-react-modal"

const StyledLogo = styled.div`
    display: flex;
    align-content: flex-start;
    margin: 3rem 2rem;
    width:20%;
    
`;


const LogoContainer = styled.div`
    width: 100px ;
    img{
        width: 8 %;
        object-fit: cover;
        margin-top: 30px;
    }
`;
const StyledHeader =styled.div `
    disply:flex;

    font-size: 1 rem;
    font-family: 'Josefin Sans', sans-serif;
    letter-spacing: 0.1rem;
    padding: 0rem 2rem;
    margin: 0;
    display: flex;
    align-items: center;
    background-color:#444444;
    height: 70px;
    font-family:'Josefin Sans' ;
    justify-content: space-between;
    * {
        margin: 0;
    }
    nav {
        display: flex;
        align-items: center;
        text-transform: uppercase;
         
        @media (max-width: 76.7em) {
            display: none;
        }
    }
    a {
        padding: 0.8rem 1.6rem;
        :last-child{
            padding-right: 0;
        }
        position: relative;
        text-decoration: none;
        color:black;
        font-weight: 600;
        &:hover{
            color:#E2007A;
            cursor: pointer;
        }
        Styledslogo{
            margin-left:0px;
        }
    }
    

`;
const Styledslogo =styled.h1`
    font-family:'Josefin Sans' ;
    color:#E2007A;
    width:100%;


`;
const StyledMenu = styled.div`
    display: flex;
`;

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

/////////////////////////////////////////////////////////////////////////////////////////////
const Header2 = () => (
   <StyledHeader>

      <StyledLogo>
                <LogoContainer>
                    <img src={require("../../images/cardiogram.svg")} alt='logo'/>
                </LogoContainer>
                
       </StyledLogo>
            <Styledslogo >
                   <h1>Dossier du Patient</h1>
                </Styledslogo>

            <StyledMenu>
                <nav>
                   <Link to="/"> Home </Link>
                    
                </nav>
            </StyledMenu>
    
            </StyledHeader>
)



export default Header2;
