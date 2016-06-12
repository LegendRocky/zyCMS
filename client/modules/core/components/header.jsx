import React from 'react';

class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            current_index: 0,
        };
    }
    render() {
        let that = this;
        //获取当前激活页面
        let current_index = this.props.CURRENT_MENU_INDEX;
        console.log(this.props);
        return (
            <div id="header">
                <div className="menu">
                    <ul>
                        {
                            _.map(DATA.MENUS, function(item, index) {
                                return (
                                    <li key={index}>
                                        <a  onClick={that.menuClick.bind(that)}                                               
                                            href={item.route}><span name={index} className={current_index == index ? 'active' : ''}>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="operate">
                    <ul>
                        <li>登录</li>
                        <li>注册</li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
    menuClick(event) {
        this.state.current_index = event.target.getAttribute('name');
        let {menuClick} = this.props;
        menuClick(event.target.getAttribute('name'));
    }
}

export default Header;
