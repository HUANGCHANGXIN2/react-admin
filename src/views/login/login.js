import React, { Component } from 'react';
import store from '../../redux/store';
import { loginTo,userInfo } from '../../redux/action';
import { Button, Form, Input, message } from 'antd'
import './index.scss'

class login extends Component {
    formRef = React.createRef();
    onFinish = values => {
        React.$axios.common.login(values).then(res =>{
            if (res) {
                store.dispatch(loginTo(res.data))
                React.$axios.common.userInfo().then(item =>{
                    store.dispatch(userInfo(item.data.user))
                    this.props.history.push("/")
                    message.success('登录成功')
                })
                } else {
                message.error('请正确填写管理员信息');
            }
        })
    };
    render() {
        return (
            <div className="login-bg">
                <div className="login-centent">
                    <div className="box">
                        <h2>管理员登录</h2>
                        <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名！',
                                    },
                                ]}
                            >
                                <Input placeholder="用户名"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户密码！',
                                    },
                                ]}
                            >
                                <Input type="password" placeholder="密码"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" shape="round" htmlType="submit" className="login-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;