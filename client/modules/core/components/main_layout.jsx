import React from 'react';
//import Navigation from './navigation.jsx';
//通过container去构建组件，就可以把上下文注入了;如果不需要上下文就可以直接构建一个无状态组件
import Header from '../containers/header';
import AddMore from '../containers/addmore';

const Layout = ({content = () => null }) => (
    <div>
        <div>
            <Header />
        </div>

        <div id="main">
            {content()}
        </div>
    </div>
);

export default Layout;
