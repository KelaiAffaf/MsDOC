import React from "react"
import styled from 'styled-components'

import { bleu } from "../../styles/utilities/Colors"

const background = require("../../images/check.png")

const StyledCheckBox = styled.div`
    position: relative;
    margin-top: -1rem;

    input[type=checkbox] {
        visibility: hidden;
    }

    label {
        cursor: pointer;
        position: absolute;
        width: 3rem;
        height: 3rem;
        margin: 0;
        top: 0;
        left: 0;
        background: white;
        border:1px solid #c8c8c8;
        :after {
            opacity: 0;
            content: '';
            position: absolute;
            width: 3rem;
            height: 3rem;
            background: ${bleu};

            background-image: url(${background});
            background-size: 75%;
            background-position: 0.4rem 0.7rem;
            background-repeat: no-repeat;
        }
    }
    input[type=checkbox]:checked + label:after {
        opacity: 1;
    }
    span{
        position: absolute;
        margin-top: 1rem;
        margin-left: -0.5rem;
        color: black;
        opacity: 0.6;
        font-size: 1.4rem;
        font-weight: 200;
    }

`;


const SimpleCheckBox = ({val}) => (
    <StyledCheckBox>
        <input type="checkbox" value="1" id="checkbox" name="" />
        <label for="checkbox"></label>
        <span> {val} </span>
    </StyledCheckBox>
)

export default SimpleCheckBox;