import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import Card from '../components/Inscription/card.js'
import { gray } from '../styles/utilities/Colors'
import Layout from '../components/layout';

const StyledGetStarted = styled.div`
    background: white;
    padding: 6rem;
    text-align: center;
    h1{
        font-size: 1.5 rem;
    }
    h2{
        font-size: 1.5rem;
        color: ${gray};-
        font-weight: 200;
    }

`;

const Cards = styled.div`
    padding: 1rem;
    width: 75%;
    margin-left: 8.5%;
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    :hover{
        text-decoration: none;
    }
    
`;

const Start = () => (
    <Layout>
    
        <StyledGetStarted>
            <h1> Cool! you have taken your first step. </h1>
            <h2> Select your status </h2>
            <Cards>
                <StyledLink to="/docteur"> 
                    <Card icon={require("../images/doc.svg")}
                        type="Doctor"></Card> 
                </StyledLink>
                <StyledLink to="/getting-started-assistant">
                    <Card icon={require("../images/voice.svg")}
                        type="Assistant"></Card>
                </StyledLink>
            </Cards>  
        </StyledGetStarted>
    
    </Layout>
)


export default Start;
