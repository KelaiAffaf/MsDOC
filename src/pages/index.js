import React from "react"
import { Link } from "gatsby"
import photo from "../images/medecin1.svg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'

import Scrollbar from 'react-custom-scrollbars'

const InContaine=styled.div`
display: grid;
grid-column-gap: 600px;

`;
const Container = styled.div` 
display: flex;
align-content: space-between;
margin-top: 100px;
height: 337px;
margin-left: 0px;
padding-left:50px;
margin-top: 58px;
    img{
      width: 100%;
      height: 100%;
    }
    margin-bottom: 150px;
  
    `;
    const Button = styled.button`
    
    width: 217px;
    height: 70px;
    background: #E2007A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-left: 100px;
    font-family: 'Josefin Sans', sans-serif;
  `;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
        <div>
        <img src={photo}></img>
        </div>
        <InContaine>
        <div>
        <h1>MS Doc Application gestion cabinet médical</h1>  
        </div> 
        <div>
        <Button>Start</Button>
        </div>
        
        </InContaine>
    
    </Container>
    
    <Link to="/login">Go back to registrations </Link>
    
    
  </Layout>
)

export default IndexPage
