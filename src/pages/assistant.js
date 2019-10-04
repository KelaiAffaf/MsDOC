import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import { purple, lightGray,fushia } from '../styles/utilities';
import Inpout from '../components/Inscription/Inpout';
import '../components/Inscription/Inpout.css'
import Layout from '../components/layout';
const StyledStep = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 5rem 2rem 6rem 2rem;
    text-align: center;
    h2{
        color: ${lightGray};
        font-size: 2rem;
    }
    h1{
        font-size: 2.6rem;
    }
    h3{
        font-size: 16px;
    }
`;

const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    
    

`;

const StyledImg = styled.div`
    width: 50%;
    padding: 0.5rem;
    img{
        width: 100%;
    }
    margin-bottom: 12rem;
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

const ParalelInput = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: left;
    input{
        width: 50%;
    }
`;

const StyledSignIn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
`;

const StyledLink = styled(Link)`
    color: ${fushia};
    font-size: 16px;
    margin-left: 4px;
    margin-top: -4px;
`;
const StyledIn =styled.input`
background-color:#E2007A;
`;
const assistant = () => {
    return (
        <Layout>
        <StyledStep>
        <h1> Assistant informations  </h1>
            <StyledContent>
                <StyledImg>
                    <img src={require("../images/doc.svg")}/>
                </StyledImg>
                <StyledForm>
                    
                    <form>
                        
                            <Inpout  Label="Nom"></Inpout>
                            <Inpout  Label="Prenom"></Inpout>
                        
                        <Inpout Label ="Date of birth" />
                        <Inpout Label="Sexe" />
                        <Inpout Label ="Ville" />
                        
                        <Inpout Label="Specialitee" />
                        <Inpout Label="Password" />
                        <Inpout Label="Confirm Password" />
                    </form>
                    <StyledSignIn>
                        <h3> Already have an account?</h3>
                        <StyledLink to="/login"> Sign In </StyledLink>
                    </StyledSignIn>
                    <Link to="/congrats">
                        <StyledIn type="submit" value="Register" />
                    </Link>
                </StyledForm>
            </StyledContent>
        </StyledStep>
        </Layout>
    );
};

export default assistant;