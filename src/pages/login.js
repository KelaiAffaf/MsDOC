import React from 'react';
import SEO from "../components/seo"
import styled from 'styled-components'
// import { purple,gray, dark } from '../../styles/utilities';
import { Link } from "gatsby"
import Layout from "../components/layout"
import './login.css'
const StyledLogin = styled.div`

    background: white;
    padding: 2rem;
    text-align: center;
    h1{
        padding: 0px;
        font-size: 3rem;
        color:#E2007A;
        font-weight: bold;
        font-family: 'Josefin Sans', sans-serif;
    }
    h2{
        color: black;
        font-size: 1.5rem;
        font-family: 'Josefin Sans', sans-serif;
    }
    form{
        width: 50%;
        margin-left: 30%;
        padding: 2.5rem;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
    }
    
`; 



const FButton = styled.div`
    background: #3a559f;
    color: white;
    display: flex;
    width: 430px;
    height:72px;
    margin-left: 30%;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-size: 1rem;
    padding-right: 1rem;
    margin: 0.5rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;  
        outline: none !important;
        
    }
`;

const IconContainer = styled.div`
    width: 3.8rem;
    height: 2.8rem;
    background: white;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 5px 0 5px -5px #333;
    margin: 0 !important;
    padding: 0 !important;
    margin-left: 30%;
    
`;


const GButton = styled(FButton)`
    background: white;
    color:black;
    margin-top: 0;
    padding-right: 6rem;
    border: 1px solid black;
    width: 430px;
    height:72px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;  
        outline: none !important;
        
    }
    
`;

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 20%;
    margin-top: 2rem;
    h3{
        color:black;
        font-size: 2.3rem;
    }
`;

const StyledSignUp= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PswStyle = styled.h2`
    color: red ;
    font-size:10px;
`;

const StyledLink = styled(Link)`
    color: red;
    font-size: 1.3rem;
    margin-left: 4px;
`;
const Button = styled.button`
    
    width: 420px;
    height: 72px;
    background: #E2007A;
    margin-left: -10px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 35px;
    margin-top: 20px;
    color:#FFFFFF;
    
  `;
const fG =styled.div`
margin-left: 30%;
margin-top: 50px;
`;

const Login = () => (
    <Layout>
    <SEO title="login" />
    
        <StyledLogin>

            <h1> Login </h1>
            <h2>Welcome back! login to access your account</h2>
            <form>
                
            <div className="group">      
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
            </div>
      
            <div className="group">      
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
            </div>
                
            <Button>Sign In</Button>
            <fG>
                <FButton> 
                    <IconContainer>
                        <img src={require("../images/facebook.png")} />
                    </IconContainer>
                    Continue with Facebook 
                </FButton>
                <GButton> 
                    <IconContainer>
                        <img src={require("../images/google.png")} />
                    </IconContainer>
                    Continue with Google 
                </GButton>
                </fG>
            </form>
            <StyledFooter>

                <PswStyle> forgot your password? </PswStyle>
                <StyledSignUp>
                    <PswStyle> Don't have an account?</PswStyle>
                    <StyledLink to="/sign-up"> Sign Up </StyledLink>
                </StyledSignUp>
            </StyledFooter>
        </StyledLogin>
        </Layout>
)

export default Login;
