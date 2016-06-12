import React from 'react';

class ActivityPage extends React.Component{
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
        $("head").append('<meta name="viewport" content="width=device-width, initial-scale=1">');
    }
    componentWillUnmount() {
        $("body").css('min-width', '1024px !important');
    }
    Experience() {
        let name = $("input.name").val();
        let mobile = $("input.mobile").val();
        let addr = $("input.addr").val();

        let reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
        if (!reg.test(mobile)) {
            return alert('请输入有效的手机号码');
        }
        let addrreg = /成都市/g;
        if (!addrreg.test(addr)) {
            return alert('多啦暂时只为成都地区提供服务，其他地区请关注，成都地区请在地址中输入包含成都市的地址');
        }

        let obj = {
            name: name,
            mobile: mobile,
            addr: addr
        }
        let createUser = this.props.createUser;
        console.log(obj);
        createUser(obj);
    }
    render() {
        let that = this;
        return (
            <div id="detail-wrap">
            <img src="/images/activity01.jpg" />
            <img src="/images/activity02.jpg" />
            <div id="activity-detail">
                <img src="/images/activity03.jpg" />
                <div className="activity-form">
                    {
                        // <div className="pc">
                        //     <input className="name" />
                        //     <input className="mobile" />
                        //     <input className="addr" />
                        // </div>
                    }
                    <div className="input">
                        <div className="input-wrap"><span>姓<span className="gap"></span>名</span><input className="name" /></div>
                        <div className="input-wrap"><span>联系方式</span><input className="mobile" /></div>
                        <div className="input-wrap"><span>详细地址</span><input className="addr" /></div>
                    </div>
                    <button className="ex-btn" onClick={this.Experience.bind(this)}></button>
                
                </div>
            </div>
            <img src="/images/activity04.jpg" />
            </div>
        )
    }
}

export default ActivityPage;
