import React from 'react';
import {mount} from 'react-mounter';

import BlankLayout from './components/blank_layout.jsx';
import MainLayout from './components/main_layout.jsx';

import Login from '../users/containers/login';

import Home from './containers/home';

export default function (injectDeps, {FlowRouter}) {

    //生成一个依赖组件。
    //const BlankLayoutCtx = injectDeps(BlankLayout);
    const MainLayoutCtx = injectDeps(MainLayout);

    // FlowRouter.route('/login', {
    //     name: 'login',
    //     action() {
    //         mount(BlankLayoutCtx, {
    //             content: () => (<Login />)
    //         })
    //     }
    // })
}
