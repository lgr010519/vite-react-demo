import './index.scss'
import {Button, Form, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {useState} from "react";
import {connect} from 'react-redux'
import {updateFormAction} from "./store/actions.ts";

const Login = (props: any) => {
    const [loginForm] = Form.useForm()
    const [registerForm] = Form.useForm()
    const [updatePasswordForm] = Form.useForm()
    const phoneRegister = Form.useWatch('phone', registerForm);
    const phoneUpdatePassword = Form.useWatch('phone', updatePasswordForm);

    const [tab, setTab] = useState('login')

    const onFinishLogin = (values: any) => {
        loginForm.validateFields().then(() => {
            props.updateForm(values)
        })
    };

    const onFinishRegister = (values: any) => {
        registerForm.validateFields().then(() => {
            props.updateForm(values)
        })
    };

    const onFinishUpdatePassword = (values: any) => {
        updatePasswordForm.validateFields().then(() => {
            props.updateForm(values)
        })
    };

    return (
        <div className="page">
            <div className="login_container">
                {
                    tab === 'login' &&
                    <>
                        <p className="title">登录</p>
                        <Form
                            form={loginForm}
                            name="login"
                            onFinish={onFinishLogin}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {required: true, message: '用户名为必填项'},
                                    {
                                        type: "string",
                                        max: 6,
                                        pattern: /^[a-z0-9A-Z]+$/,
                                        message: '用户名长度不能超过6位且为纯数字、纯英文字母(不区分大小写)或者数字与英文字母组合'
                                    },
                                ]}
                            >
                                <Input placeholder="请输入用户名！" size="large"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {required: true, message: '密码为必填项'},
                                    {
                                        type: "string",
                                        min: 6,
                                        pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).{6,16}$/,
                                        message: '密码至少需要6位且需包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="请输入密码！"
                                    size="large"
                                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" size="large" type="primary" block>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                }
                {
                    tab === 'register' &&
                    <>
                        <p className="title">用户注册</p>
                        <Form
                            form={registerForm}
                            name="register"
                            onFinish={onFinishRegister}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {required: true, message: '用户名为必填项'},
                                    {
                                        type: "string",
                                        max: 6,
                                        pattern: /^[a-z0-9A-Z]+$/,
                                        message: '用户名长度不能超过6位且为纯数字、纯英文字母(不区分大小写)或者数字与英文字母组合'
                                    },
                                ]}
                            >
                                <Input placeholder="请输入用户名" size="large"/>
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {required: true, message: '手机号为必填项'},
                                    {
                                        pattern: /^1[3-9]\d{9}$/,
                                        message: '手机号格式不正确'
                                    },
                                ]}
                            >
                                <Input placeholder="请输入手机号" size="large"/>
                            </Form.Item>
                            <div className="check_code">
                                <Form.Item
                                    name="checkCode"
                                    rules={[
                                        {required: true, message: '验证码为必填项'},
                                        {
                                            pattern: /^[0-9]{6}$/,
                                            message: '验证码需为6位数字'
                                        },
                                    ]}
                                    initialValue={'123456'}
                                >
                                    <Input style={{width: 285}} placeholder="请输入验证码" size="large"/>
                                </Form.Item>
                                <Button type="primary" size="large"
                                        disabled={!phoneRegister || !/^1[3-9]\d{9}$/.test(phoneRegister)}>获取验证码</Button>
                            </div>
                            <Form.Item
                                name="password"
                                rules={[
                                    {required: true, message: '密码为必填项'},
                                    {
                                        type: "string",
                                        min: 6,
                                        pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).{6,16}$/,
                                        message: '密码至少需要6位且需包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="请输入密码！"
                                    size="large"
                                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" size="large" type="primary" block>
                                    立即注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                }
                {
                    tab === 'updatePassword' &&
                    <>
                        <p className="title">找回密码</p>
                        <Form
                            form={updatePasswordForm}
                            name="register"
                            onFinish={onFinishUpdatePassword}
                        >
                            <Form.Item
                                name="phone"
                                rules={[
                                    {required: true, message: '手机号为必填项'},
                                    {
                                        pattern: /^1[3-9]\d{9}$/,
                                        message: '手机号格式不正确'
                                    },
                                ]}
                            >
                                <Input placeholder="请输入手机号" size="large"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {required: true, message: '新密码为必填项'},
                                    {
                                        type: "string",
                                        min: 6,
                                        pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).{6,16}$/,
                                        message: '新密码至少需要6位且需包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="请输入新密码"
                                    size="large"
                                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            </Form.Item>
                            <div className="check_code">
                                <Form.Item
                                    name="checkCode"
                                    rules={[
                                        {required: true, message: '验证码为必填项'},
                                        {
                                            pattern: /^[0-9]{6}$/,
                                            message: '验证码需为6位数字'
                                        },
                                    ]}
                                    initialValue={'123456'}
                                >
                                    <Input style={{width: 285}} placeholder="请输入验证码" size="large"/>
                                </Form.Item>
                                <Button type="primary" size="large"
                                        disabled={!phoneUpdatePassword || !/^1[3-9]\d{9}$/.test(phoneUpdatePassword)}>获取验证码</Button>
                            </div>
                            <Form.Item>
                                <Button htmlType="submit" size="large" type="primary" block>
                                    确定
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                }
                <p className="tip">
                    {
                        tab === 'updatePassword' ?
                            <span className="link" onClick={() => setTab('login')}>立即登录</span> :
                            <span className="link" onClick={() => setTab('updatePassword')}>忘记密码</span>
                    }
                    {
                        (tab === 'login' || tab === 'updatePassword') &&
                        <span>没有账号？<a className="link" onClick={() => setTab('register')}>快速注册</a></span>
                    }
                    {
                        tab === 'register' &&
                        <span>已有账号？<a className="link" onClick={() => setTab('login')}>马上登录</a></span>
                    }
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    userInfo: state.login
})

const mapDispatchToProps = (dispatch: any) => ({
    updateForm(form: any) {
        dispatch(updateFormAction(form))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)