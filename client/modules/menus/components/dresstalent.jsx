import React from 'react';

class DressTalent extends React.Component{
    render() {
        let {news} = this.props;
        return(
            <div id="dress-talent">
                <div className="wrap-ul">
                    <div className="img-wrap">
                        <img src="http://img.duolayimeng.com/pc/banner-bg-2-1.jpg@!768w" />
                        <div className="detail-1">
                            <p className="head">多啦衣梦</p>
                            <p className="head">穿衣从此不用买</p>
                            <p className="divide">你会在时尚大牌面前驻足良久，看着价格却下不去手吗？</p>
                            <p>你会每次去到一家喜欢的店，恨不得把衣服全部买回家吗？</p>
                            <p>你花上千元买下的那些衣服，现在还会经常穿吗</p>
                            <p>你会想买在杂志文章里看到好看的衣服，却找不到途径吗？</p>
                            <p>你每年买那么多衣服，真正常穿的有几件呢？</p>
                        </div>
                    </div>
                    <div className="detail-2">
                        <p>多啦衣梦开放了最新福利<span className="warn">选衣达人</span></p>
                        <p>你可以自己再选衣达人中选择你喜欢的衣服，由多啦衣梦<span className="warn">为你购买，为你清洗。</span></p>
                        <p><span className="warn">甚至，</span>你可能只需花一次钱，这辈子都可能不用再买衣服了。而且还有机会<span className="warn">免费游泰国喔！</span></p>
                        <p>选衣达人由原来的每周赠送1名月费服务，变为<span className="warn">每天送1名！</span></p>
                        <p><span className="warn">是的，没错！</span>每天多啦衣梦会选取得分最高的选衣达人，送出<span className="warn">一个月的会员服务！</span></p>
                    </div>
                    <div className="detail-3">
                        <p className="title">什么是选衣达人？</p>
                        <p>为了让多啦一梦称为您真正的衣橱，我们开放【选衣达人】功能，把选择服装的权利交给您，再由我们为您购买。让您真正的不用再为购置服装烦恼。</p>
                        <p>①我们每天将在选衣达人中挑选百款服装，再由您投票选择您想穿的衣服，每人每天至少有10个选票。</p>
                        <p>②您每挑选一件服装，系统会自动刷新该服装的热度（热度不同服装积分不同）。</p>
                        <p>③每天积分最高的女神，可获得1个月的多啦衣梦服务时间。</p>
                        <p>④每月积分最高的女神，可获得3个月的多啦衣梦服务时间。</p>
                        <p>⑤每年累积积分最高的女神，可享受免费泰国游，并获得价值2688元的多啦衣梦一年服务时间。</p>
                        <p className="footer-1">详细规则请进入选衣达人</p>
                        <p className="footer-2">让我们花一次钱，享一生美衣～</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DressTalent;