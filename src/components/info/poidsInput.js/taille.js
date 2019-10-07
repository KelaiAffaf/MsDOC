import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import NumericInput from '../NumericInput'


class taille extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }
  
    onChange = value => {
      this.setState({ value });
    };
  
    render() {
      return (
        <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
      );
    }
  }
  export default taille;