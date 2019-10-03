import React from 'react';
import styled from 'styled-components';
import { dark, purple, lightGray } from '../../styles/utilities/Colors';
import './inpout.css'


const Inpout = ({Label}) => {
    return (
        <div className="group">      
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>{Label}</label>
            </div>
    );
};

export default Inpout;