import React from 'react';

class Login extends React.Component{
    render() {
        const {error, createError} = this.props;
        return(
            <div>
                <h1>Login</h1>
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                {createError ? <p style={{color: 'red'}}>{createError}</p> : null}
                <ul>
                    <li>用户名：<input id="name" ref="name" /></li>
                    <li>密码：<input id="pwd" ref="pwd" /></li>
                    <li><button onClick={this.loginSubmit.bind(this)}>登录</button></li>
                    <li><button onClick={this.createAccount.bind(this)}>创建</button></li>
                </ul>
            </div>
        )
    }
    loginSubmit() {
        var name = $("#name").val();
        var pwd = $("#pwd").val();
        const {loginUser} = this.props;
        loginUser(name, pwd);
        $("#pwd").val('');
    }
    createAccount() {
        var name = $("#name").val();
        var pwd = $("#pwd").val();
        const {createUser} = this.props;
        createUser(name, pwd);
        $("#pwd").val('');
    }
}

export default Login;