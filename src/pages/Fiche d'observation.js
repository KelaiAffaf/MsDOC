import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import Card from '../components/Inscription/card.js'
import { gray } from '../styles/utilities/Colors'
import Layout2 from '../components/Layout/layout2'
import Checkbox from '../components/Form/SimpleCheckBox'

//import  styles from './fich.css'
//import '~antd/dist/antd.less'; // Import Ant Design styles by less entry
//import styles from './fich.less'; //myless fichier to overwrite 

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
import Input from '@material-ui/core/Input';
//import { Input } from 'antd';
import Numeric from '../components/info/NumericInput'
import Poidsin from '../components/info/poidsInput.js/poidsin'
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
      
      display: flex;
      flex-direction: row;
      
      grid-area: 1/3/2/12;
      height:200px;
      width:700px; 
      margin-top: 30px;
      margin-left:50px;
     Input {
      
      margin-top: 20px;
     }
     .Motif{
      color:#09E200;
      margin-bottom: 56px;
     }

  `;
  const Item3=styled.div`
    grid-area: 2/1/2/6;
    height:300px;
    width:560px; 
    margin-left:50px;
    margin-right:5px;
   
`;

const Item4=styled.div `
    grid-area: 2/6/2/12;
    width:560px; 
    height:300px; 
    margin-left:5px;
  
`;
const Item5=styled.div`
    grid-area: 3/1/3/6;
    width:560px; 
    height:300px; 
    
    margin-left:50px;
    
`;

const Item6 =styled.div`
    grid-area: 3/6/3/12;
    width:560px;
    height:300px; 
    
    margin-left:5px;
`;
const Item7=styled.div`
    display: flex;
   
    grid-area: 4/1/4/6;
    width:560px; 
    height:300px; 
    margin-left:50px;
`;

const Item8 =styled.div`
   display: flex;
    
    grid-area: 4/6/4/12;
    width:560px;
    height:300px; 
    margin-left:5px;
    
`;
const StyledImg = styled.div`
    width: 60%;
    padding: 1rem;
    img{
        width: 100%;
    }
    
`;
const StyledImg2 = styled.div`
    width: 60%;
   
    img{
        width: 100%;
        margin-top: 81px;
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
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      flexBasis:150,
      color:'red',
    },
  }));
  
  const putStyle = {
    width: '260px' 
    
  };

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
        PAS:'',
        PAD:'',
      });
    
      const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const [selectedDate, setSelectedDate] = React.useState(new Date('2019-10-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };
    return (

      <Layout2>
      <Container>
          
            <Item1>
            <StyledImg>
            <img src={require("../images/man.svg")}></img>
            </StyledImg>
            </Item1>
            <Item2>
            
            <Input className="Motif" style={{width: 340 }}  placeholder="Motif" />
                            
                            

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                
                                <KeyboardDatePicker  style={{ 
                                  width: 340 ,
                                  
                                
                              }} 
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                         </Grid>
                       </MuiPickersUtilsProvider>
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

     <div>     
      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input  
          style={{ 
            width: 200
        }} 
          id="adornment-weight"
          value={values.weight}
          onChange={handleChange('weight')}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <FormHelperText id="weight-helper-text">Weight</FormHelperText>
      </FormControl>
            

      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input  
          style={{ 
            width: 200
        }} 
          id="adornment-weight"
          value={values.Taille}
          onChange={handleChange('Taille')}
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          aria-describedby="Taille-helper-text"
          inputProps={{
            'aria-label': 'Taille',
          }}
        />
        <FormHelperText id="weight-helper-text">Weight</FormHelperText>
      </FormControl>
      </div>      
                
            </Item7>
            <Item8>

      <StyledImg2>
            <img src={require("../images/cardiogram_V.svg")}></img>
            </StyledImg2>

            
     <div>     
      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input  
          style={{ 
            width: 200
        }} 
          id="adornment-PAS"
          value={values.weight}
          onChange={handleChange('PAS')}
          endAdornment={<InputAdornment position="end">PAS</InputAdornment>}
          aria-describedby="PAS-helper-text"
          inputProps={{
            'aria-label': 'PAS',
          }}
        />
        <FormHelperText id="PAS-helper-text">PAS</FormHelperText>
      </FormControl>
            

      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input  
          style={{ 
            width: 200
        }} 
          id="adornment-PAD"
          value={values.PAD}
          onChange={handleChange('PAD')}
          endAdornment={<InputAdornment position="end">PAD</InputAdornment>}
          aria-describedby="PAD-helper-text"
          inputProps={{
            'aria-label': 'PAD',
          }}
        />
        <FormHelperText id="PAD-helper-text">PAD</FormHelperText>
      </FormControl>
      </div>

            </Item8>
            
      </Container>
      </Layout2>
    );


    }
