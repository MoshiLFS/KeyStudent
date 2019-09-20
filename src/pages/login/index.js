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
                <Header title='重点学生日周考成绩录入管理系统'/>
                <LoginMain goOtherPage={()=>{
                    this.props.history.push('/visualDisplay')
                }}/>
            </>
        );
    }
}  

export default Login;