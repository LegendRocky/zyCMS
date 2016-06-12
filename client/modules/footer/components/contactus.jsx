import React from 'react';

//import AddMore from '/client/modules/core/containers/addmore';
import Footer from '../containers/footer';

class ContactUs extends React.Component{
    render() {
        return(
            <div id="contact-us">
                <div className="main">
                    <div>
                        <div className="title">联系我们</div>
                        <div className="phone">
                            <img src="http://img.duolayimeng.com/pc/phone.png" />
                            <div>
                                <p>多啦衣梦全国服务热线</p>
                                <p>400 159 3880</p>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <p className="addr"><span className="addr">公司地址</span> 成都市武侯区长益路13号蓝海OFFICE－C座16楼</p>
                        <p className="addr bottom"><span className="addr">厂区地址</span> 成都市高新西区西区大道1599号附10号</p>
                    </div>
                    <div>
                        <img className="code" src="http://img.duolayimeng.com/pc/code.png" />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactUs;