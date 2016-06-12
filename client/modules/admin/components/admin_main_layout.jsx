
import React from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class AdminMainLayout extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            collapse: true
        };
    }
    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }
    handleClick(e) {
        console.log('click ', e);
        window.location.href = e.key;
    }
    render() {
        const content = this.props.content;
        const collapse = this.state.collapse;
        return (
            <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo"></div>
                    <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}
                        onClick={this.handleClick.bind(this)}>
                            <Menu.Item>
                                <Icon type="setting" /><span className="nav-text">系统管理</span>
                            </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
                            <Menu.Item key="setting">
                                <Icon type="setting" /><span className="nav-text">系统管理</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="file" /><span>文档管理</span></span>}>
                            <Menu.Item key="/admin/manage">
                                <Icon type="book" /><span className="nav-text">文档管理</span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="user">
                            <Icon type="user" /><span className="nav-text">会员管理</span>
                        </Menu.Item>
                    </Menu>
                    <div className="ant-aside-action" onClick={this.onCollapseChange.bind(this)}>
                        {collapse ? <Icon type="right" /> : <Icon type="left" />}
                    </div>
                </aside>
                <div className="ant-layout-main">
                    <div className="ant-layout-header"></div>
                    <div className="ant-layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                            <Breadcrumb.Item>某应用</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            <div>
                                {content()}
                            </div>
                        </div>
                    </div>
                    <div className="ant-layout-footer">
                        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMainLayout;
