import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import Card from '../components/Inscription/card.js'
import { gray } from '../styles/utilities/Colors'
import Layout2 from '../components/Layout/layout2'
import Checkbox from '../components/Form/SimpleCheckBox'

import  styles from './fich.css'
import '~antd/dist/antd.less'; // Import Ant Design styles by less entry
import 'fich.less'; //myless fichier to overwrite 

import Pform from '../components/Form/Pform'
import TextArea from '../components/Form/TextArea'
import InputAdornments from '../components/Form/InputAdornments'

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
//import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { DatePicker } from 'antd';

import { Input } from 'antd';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  

const Container=styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 0px;
    grid-row-gap: 10px;
   padding: 20px;
    
  }
  
  div {
    
    text-align: center;
    padding: 10px;
    padding-left: 30px;
    font-size: 30px;
     
  }
}`;

 const Item1=styled.div` 
    grid-area: 1 / 1 / 2 / 3;
    height:200px;
    width:400px; 
    
    margin-top: 60px;
    margin-left:50px;
    
  `;
  const Item2=styled.div`
      
      grid-area: 1/3/2/12;
      height:200px;
      width:700px; 
      margin-top: 60px;
     
      margin-left:50px;
  `;
  const Item3=styled.div`
    grid-area: 2/1/2/6;
    height:300px;
    width:560px; 
    margin-left:50px;
    margin-right:5px;
    background-color: DodgerBlue;
`;

const Item4=styled.div `
    grid-area: 2/6/2/12;
    width:560px; 
    height:300px; 
    margin-left:5px;
   background-color: DodgerBlue;
`;
const Item5=styled.div`
    grid-area: 3/1/3/6;
    width:560px; 
    height:300px; 
    background-color: DodgerBlue;
    margin-left:50px;
    
`;

const Item6 =styled.div`
    grid-area: 3/6/3/12;
    width:560px;
    height:300px; 
    background-color: DodgerBlue;
    margin-left:5px;
`;
const Item7=styled.div`
    display: flex;
    background-color: DodgerBlue;
    grid-area: 4/1/4/6;
    width:560px; 
    height:300px; 
    margin-left:50px;
`;

const Item8 =styled.div`
    grid-area: 4/6/4/12;
    width:560px;
    height:300px; 
    margin-left:5px;
    
`;
const StyledImg = styled.div`
    width: 50%;
    padding: 0.5rem;
    img{
        width: 100%;
    }
    
`;
const StyledImg2 = styled.div`
    width: 30%;
    padding: 0.5rem;
    img{
        width: 100%;
    }
    
`;
const Paralel = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top:25px;
    padding-left:5px;
    
    `;
const StyledH2=styled.h2`
color: #09E200;
display: flex;
align-items: center;
text-align: center;
font-family: Josefin Sans;
`;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0 20px',
    },
    margin: {
      margin: theme.spacing(0),
    },
    withoutLabel: {
      marginTop: theme.spacing(1),
    },
    textField: {
      flexBasis:50,
      color:'red',
    },
  }));
  


export default function Fiche(){
    

  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

                function onChange(date, dateString) {
                console.log(date, dateString);
                }
    const classes = useStyles();
    
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        Taille:'',
        showPassword: false,
      });
    
      const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const [selectedDate, setSelectedDate] = React.useState(new Date('2019-10-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };
    return (
      <Container>
          
            <Item1>
            <StyledImg>
            <img src={require("../images/man.svg")}></img>
            </StyledImg>
            </Item1>
            <Item2>

                            <Input  className= {styles.inpout}  placeholder="Basic usage" />
                            
                            <DatePicker onChange={onChange} />
                        
            </Item2>
           


           
            <Item3>
                <StyledH2> Anamnèse</StyledH2>
                <TextArea></TextArea>
            </Item3>
            <Item4>
                <StyledH2>
                  Examen
                </StyledH2>
                <TextArea></TextArea>
            </Item4>
             
            <Item5>
               <StyledH2>Sympthome</StyledH2>
               <TextArea></TextArea>
            </Item5>
            <Item6>
                <StyledH2>Diagnistique</StyledH2>
                <TextArea></TextArea>
            </Item6>

            <Item7>
            <StyledImg2>
            <img src={require("../images/man-user.svg")}></img>
            </StyledImg2>

            
                   
                
            </Item7>
            <Item8>

        
            
      
      <StyledImg2>
            <img src={require("../images/cardiogram_V.svg")}></img>
            </StyledImg2>

            </Item8>
            
      </Container>
      
    );


    }
