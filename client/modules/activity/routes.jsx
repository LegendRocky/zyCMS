import React from 'react';
import {mount} from 'react-mounter';

import BlankLayout from '../core/components/blank_layout.jsx';

import ActivityPage from './containers/activitypage';

export default function ( injectDeps, {FlowRouter, LocalState} ) {
    const MainLayoutCtx = injectDeps(BlankLayout);
    FlowRouter.route('/activityPage', {
        name: 'activityPage',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<ActivityPage />)
            });
        }
    });
}