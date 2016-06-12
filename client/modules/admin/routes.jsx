import React from 'react';
import {mount} from 'react-mounter';
import Meteor from 'meteor/meteor';

import BlankLayout from '../core/components/blank_layout.jsx';
import AdminMainLayout from './components/admin_main_layout.jsx';

import ImageUpload from './containers/imageupload';
import Login from './containers/login';
import Reg from './containers/reg';
import Manage from './containers/manage';
import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter}) {

    //生成一个依赖组件。
    const BlankLayoutCtx = injectDeps(BlankLayout);
    const AdminMainLayoutCtx = injectDeps(AdminMainLayout);

    FlowRouter.route('/admin/login', {
        name: 'login',
        action() {
            mount(BlankLayoutCtx, {
                content: () => (<Login />)
            })
        }
    });

    FlowRouter.route('/admin/reg', {
        name: 'reg',
        action() {
            mount(BlankLayoutCtx, {
                content: () => (<Reg />)
            })
        }
    })

    FlowRouter.route('/admin', {
        name: 'admin',
        action() {
            // console.log(Meteor.userId)
            // if ( Meteor.userId ) {
                mount(AdminMainLayoutCtx, {
                    content: () => (<Manage />)
                })
            // } else {
            //     FlowRouter.go('/admin/login');
            // }
            
        }
    });

    FlowRouter.route('/admin/manage', {
        name: 'manage',
        action() {
            mount(AdminMainLayoutCtx, {
                content: () => (<Manage />)
            })
        }
    });

    FlowRouter.route('/admin/addpost', {
        name: 'addpost',
        action() {
            mount(AdminMainLayoutCtx, {
                content: () => (<NewPost />)
            })
        }
    })
    // FlowRouter.route('/admin', {
    //     name: 'admin',
    //     action() {
    //         //if ( Meteor.userId ) {
    //             mount(AdminMainLayoutCtx, {
    //                 content: () => (<Manage />)
    //             })
    //         //} else {
    //             //FlowRouter.go('/admin/login');
    //         //}
    //     }
    // });

    FlowRouter.route('/admin/imageupload', {
        name: 'imageupload',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<ImageUpload />)
            })
        }
    });
}
