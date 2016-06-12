import React from 'react';

import { 
    Link,
    Element,
    Events,
    scroll
} from 'react-scroll';

class Home extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            hide: {display:'block'},
            active: 'active',
            current_index: 0,
            _now: 1,
            _now2: 0,
        };
    }
    slider() {
        var _now = this.state._now;
        var _now2 = this.state._now2;
        var oul = $("ul.wrap-ul");
        var ali = $('ul.wrap-ul li');
        var that = this;
        var aliWidth = $(".show-wrap").width();
        if( _now === ali.size() - 1 ) {
            ali.eq(0).css({
                'left': oul.width()
            })
            this.state._now = 0;
        } else {
            this.state._now = this.state._now + 1;
        }
        this.state._now2 = this.state._now2 + 1;
        oul.animate({left: -aliWidth * that.state._now2}, 2000, function() {
            if ( _now == 0 ) {
                ali.eq(0).css({
                    'left': 0
                })
                oul.css('left', 0);
                that.state._now2 = 0;
            }
        })
    }
    // turnLeft() {
        
    //     console.log(this.state._now2);
    //     var _now2 = this.state._now2;
    //     var oul = $("ul.wrap-ul");
    //     var ali = $('ul.wrap-ul li');
    //     var that = this;
    //     var aliWidth = $(".show-wrap").width();

    //     var _now2 = this.state._now2;

    //     ali.eq(0).css({
    //         'left': 0
    //     });
    //     //this.state._now2 = this.state._now2 - 1;
    //     if ( _now2 == 0 ) {
    //         ali.eq(3).css({
    //             'left': -aliWidth * 4
    //         })
    //     }

    //     oul.animate({left: -aliWidth * (that.state._now2 - 1)}, 2000, function() {
    //         if ( _now2 == 0 ) {
    //             ali.eq(3).css({
    //                 'left': 0
    //             })
    //             oul.css('left', -aliWidth * 3);
    //             that.state._now2 = 3;
    //         } else {
    //             that.state._now2 = that.state._now2 - 1;
    //         }
    //     })
    // }
    turnRight() {
        this.slider();
    }
    componentDidMount() {
        var that = this;
        var ali = $("#banner");

        this.interval = setInterval(() => {
            that.slider()
        }, 4000);

        ali.hover(function(){
            clearInterval(that.interval);
        },function(){
            that.interval = setInterval(() => {
                that.slider();
            },4000);
        });

        Events.scrollEvent.register('begin', function(to, element) {
            //console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            //console.log("end", arguments);
        });
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    // scroll() {
    //     clearInterval(this.interval);
    // }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    scrollMore() {
        scroll.scrollMore(100);
    }
    render() {
        let that = this;
        let banner = Meteor.settings.public;
        return (
            <div id="home" style={this.state.hide}>
                <Element name="main">
                <section id="banner">
                    <div className="content">
                        <div className="show-wrap">
                            <ul className="wrap-ul">
                                <li className="show-pic-2">
                                    <a href={banner.banner1.link}>
                                        <div className="bg"><img src={banner.banner1.img_bg} /></div>
                                    </a>
                                </li>
                                <li className="show-pic-1">
                                    <a href={banner.banner2.link}>
                                    <div className="bg"><img onLoad={this.loadOk} src="http://img.duolayimeng.com/pc/banner-bg.png@!768w" /></div>
                                    <div className="bg-2">
                                        <img src="http://img.duolayimeng.com/pc/banner-bg-2.png@!768w" />
                                    </div>
                                    <div className="show-girl">
                                        <img src="http://img.duolayimeng.com/pc/show-girl.png@!768w" />
                                    </div>
                                    <div className="endless">
                                        <img src="http://img.duolayimeng.com/pc/endless.png@!768w" />
                                    </div>
                                    <div className="yourcloset">
                                        <img src="http://img.duolayimeng.com/pc/yourcloset.png@!768w" />
                                    </div>
                                    </a>
                                </li>

                                <li className="show-pic-2">
                                    <a href={banner.banner3.link}>
                                    <div className="bg"><img onLoad={this.loadOk} src="http://img.duolayimeng.com/pc/banner-bg-2-1.jpg@!768w" /></div>
                                    </a>
                                </li>
                            
                                <li className="show-pic-3">
                                    <a href={banner.banner4.link}>
                                    <div className="bg"><img onLoad={this.loadOk} src="http://img.duolayimeng.com/pc/banner-bg-3-1.jpg@!768w" /></div>
                                    <div className="show-girl">
                                        <img src="http://img.duolayimeng.com/pc/show-pic-3-show-girl.png@!768w" />
                                    </div>
                                    </a>
                                </li>
                                <li className="show-pic-4">
                                    <a href={banner.banner5.link}>
                                    <div className="bg"><img src="http://img.duolayimeng.com/pc/banner-bg-4-1.jpg@!768w" /></div>
                                    </a>
                                </li>
                            </ul>
                            <div className="button-area">
                                <ul>
                                    <li onClick={this.turnLeft}><img src="http://img.duolayimeng.com/pc/left-arrow.png@!768w" /></li>
                                    <li><img src="http://img.duolayimeng.com/pc/middle-arrow.png@!768w" /></li>
                                    <li onClick={this.turnRight.bind(this)}><img src="http://img.duolayimeng.com/pc/right-arrow.png@!768w" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                </Element>
                <Element name="case-two">
                <section id="case-two">
                    <div className="content">
                        <div className="intro-1">
                            <a href="javascript:;"><img src="http://img.duolayimeng.com/pc/model-2.jpg@!768w" /></a>
                        </div>
                        <div className="intro-2">
                            <a href="javascript:;"><img className="model-1" src="http://img.duolayimeng.com/pc/model-1.jpg@!768w" /></a>
                            <a href="javascript:;"><img className="model-4" src="http://img.duolayimeng.com/pc/model-4.jpg@!768w" /></a>
                        </div>
                        <div className="intro-3">
                            <a href="javascript:;"><img src="http://img.duolayimeng.com/pc/model-3.jpg@!768w" /></a>
                        </div>
                        <div className="clear"></div>
                    </div>
                </section>
                </Element>
                <Element name="case-three">
                <section id="case-three">
                    <div className="content">
                        <div className="select-1">
                            <img src="http://img.duolayimeng.com/pc/case-three-bg1.jpg@!768w" />
                        </div>
                        <div className="select-2">
                            <img src="http://img.duolayimeng.com/pc/case-three-bg2.jpg@!768w" />
                        </div>
                    </div>
                </section>
                </Element>
                <Element name="case-four">
                <section id="case-four">
                    <div className="content">
                        <div className="ju">
                            <img src="http://img.duolayimeng.com/pc/join-now.jpg@!768w" />
                        </div>
                        <div className="contact bg-fullscreen">
                            <img src="http://img.duolayimeng.com/pc/footer2.png@!768w" />
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
                    </div>
                </section>
                </Element>
                <div className="dora-pagination">
                    {
                        _.map(that.props.dots, (element, index) => {
                            return (
                                <Link key={index} activeClass="active" className="dot" to={element.anchor} spy={true} smooth={true} duration={500} ></Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home;
