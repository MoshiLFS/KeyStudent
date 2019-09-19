import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header'
import LoginMain from './components/login.main'

class Login extends Component {
    state = {  };

    render() {
        console.log(this.props);
        return (
            <>
                <Header/>
                <LoginMain goOtherPage={()=>{
                    this.props.history.push('/visualDisplay')
                }}/>
            </>
        );
    }
}

export default Login;