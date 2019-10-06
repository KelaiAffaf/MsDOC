import React from "react"
import styled from 'styled-components'
import { bleu } from "../../styles/utilities/Colors";

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 18rem;
    @media   (max-width: 48em) {
        height: 12rem;
    }
    
    width: 450px;
    height: 200px;
    
    
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;

    outline: none;

    ::placeholder{
      font-size: 1.6rem;
      color: black;
      opacity: 0.6;
      font-weight: 300;
    }

    :focus{
        border-color: ${bleu};
    }
`;

const TextArea = ({placeholder}) => (
    <>
        <StyledTextArea placeholder={placeholder}/>
    </>
)

export default TextArea
