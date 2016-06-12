import React from 'react';

class Footer extends React.Component{
    render() {
        return (
            <div id="footer">
                <img src="http://img.duolayimeng.com/pc/footer.png" />
                <div className="contact-list">
                    <ul>
                        <li><a href="http://mp.weixin.qq.com/s?__biz=MzIyMjA0ODAwMg==&mid=402289697&idx=1&sn=64b42d446b7fc6125670696e74d25331#rd">帮助中心</a></li>
                        <li><a href="/paidway">支付方式</a></li>
                        <li><a href="/disway">配送方式</a></li>
                        <li><a href="/aboutus">关于我们</a></li>
                        <li><a href="/contactus">联系我们</a></li>
                    </ul>
                    <div className="copyright">© 成都必酷科技有限公司    Chengdu Becool Technology Co.Ltd</div>
                </div>
            </div>
        )
    }
}

export default Footer;
