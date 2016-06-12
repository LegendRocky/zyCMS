import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    componentDidMount() {
        // let width = $("div.activity-form").width();
        // let height = width * 0.688;
        // $("div.activity-form").css('height', height);
        //$("body").css('min-width', '0');
        //$("head").append('<meta name="viewport" content="width=device-width, initial-scale=1">');
    }
    componentWillUnmount() {
        //$("body").css('min-width', '1024px !important');
    }
    login() {
        let login = this.props.login;
        let createUser = this.props.createUser;
        let name = this.state.name;
        let pwd = this.state.pwd;
        let vnum = this.state.vnum;
        login(name, pwd);
        //createUser(name, pwd);
    }
    handleChange(event) {
        let that = this;
        let name = event.target.name;
        let value = event.target.value;
        switch(name) {
            case 'name':
                this.setState({
                    name: value
                })
                break;

            case 'pwd':
                this.setState({
                    pwd: value
                })
                break;

            case 'vnum':
                this.setState({
                    vnum: value
                })
                break;

            default:
                break;
        }
    }
    render() {
        let that = this;
        return (
            <div id="admin-login" className="login-box">
                <div className="login-logo">
                    <a href="/">
                        <b>zy</b>
                        CMS
                    </a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">系统管理员登录</p>
                
                    <form name="loginForm">
                        <div className="form-group has-feedback">
                            <input onChange={this.handleChange.bind(this)} type="text" className="form-control ng-pristine ng-valid ng-touched" name="name" placeholder="请输入用户名" />
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input onChange={this.handleChange.bind(this)} type="password" className="form-control ng-pristine ng-untouched ng-valid" name="pwd" placeholder="请输入密码" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6" style={{'marginLeft': 0,'paddingLeft': 0}}>
                                <input onChange={this.handleChange.bind(this)} type="text" className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" name="vnum" placeholder="请输入验证码" required="" />
                            </div>
                            {
                                //<span><img id="vcode" src="/admin/vnum?1464397520000" /></span>
                            }
                            
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck hide">
                                    <label>
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button onClick={this.login.bind(this)} type="button" className="btn btn-primary btn-block btn-flat">登录</button>
                            </div>
                        </div>
                    </form>
                    <div className="reg-wrap">
                        <a className="forget">忘记密码？</a>
                        <a href="/admin/reg" className="reg">注册账号</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
