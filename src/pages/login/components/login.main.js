import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './login.main.less'
import { Tabs, Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class LoginMain extends Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(values.user.length && values.password.length){    //  点击登录跳转页面
                    this.props.goOtherPage();
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.loginMain}>
                <div className={style.loginTop}>网站工程</div>
                <>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="登录" key="1">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item label='user'>
                                    {
                                        getFieldDecorator('user', {
                                            rules: [{
                                                required: false,
                                                pattern: new RegExp(/^[1-9]\d*$/, "g"),
                                                message: '请输入正确的ID'
                                            }],
                                            getValueFromEvent: (event) => {
                                                return event.target.value.replace(/\D/g, '')
                                            },
                                            initialValue: ''
                                        })(<Input />)
                                    }
                                </Form.Item>
                                <Form.Item label='password' >
                                    {
                                        getFieldDecorator('password', {
                                            rules: [{
                                                required: false,
                                                pattern: new RegExp(/^[1-9]\d*$/, "g"),
                                                message: '请输入正确的ID'
                                            }],
                                            getValueFromEvent: (event) => {
                                                return event.target.value.replace(/\D/g, '')
                                            },
                                            initialValue: ''
                                        })(<Input />)
                                    }
                                </Form.Item>

                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>Remember me</Checkbox>)}
                                    
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登入
                                    </Button>
                                   
                                </Form.Item>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </>
            </div>
        );
    }
}

export default Form.create()(LoginMain);