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
    align-content: space-between;
    margin: 0.8rem 0.8rem;
    width:100%;
    
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
    font-size: 1 rem;
    font-family: 'Josefin Sans', sans-serif;
    letter-spacing: 0.1rem;
    padding: 0rem 2rem;
    margin: 0;
    display: flex;
    align-items: center;
    background-color:#444444;
    height: 70px;
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
const Header = () => (
   <StyledHeader>

      <StyledLogo>

                <LogoContainer>
                    <img src={require("../images/cardiogram.svg")} alt='logo'/>
                </LogoContainer>
                
       </StyledLogo>
            

            <ModalProvider backgroundComponent={FadingBackground}>
               
            </ModalProvider>

            <Styledslogo >
                   <h1>MS Doc</h1>
                </Styledslogo>

            <StyledMenu>
                <nav>
                   
                    
                    <Link to="/"> Home </Link>
                    
                    <Link to="/resources"> Resources </Link>
                    <Link to="/blog"> Blog </Link>
                    
                    <Link to="/contact"> Contact </Link>
                </nav>
            </StyledMenu>
    
            </StyledHeader>
)



export default Header
