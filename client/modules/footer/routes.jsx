import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';

import PaidWay from './containers/paidway';
import DisWay from './containers/disway';
import AboutUs from './containers/aboutus';
import ContactUs from './containers/contactus';

export default function ( injectDeps, {FlowRouter} ) {
    const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/paidway', {
        name: 'paidway',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<PaidWay />)
            });
        }
    });

    FlowRouter.route('/disway', {
        name: 'disway',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<DisWay />)
            });
        }
    });

    FlowRouter.route('/aboutus', {
        name: 'aboutus',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<AboutUs />)
            });
        }
    });

    FlowRouter.route('/contactus', {
        name: 'contactus',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<ContactUs />)
            });
        }
    });
}