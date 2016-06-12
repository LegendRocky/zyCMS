import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';

import FashionMix from './containers/fashionmix';
import Test from './containers/test';
import DressTalent from './containers/dresstalent';
import NewsList from './containers/newslist';
import Home from '/client/modules/core/containers/home';
import AboutMe from '/client/modules/core/containers/aboutMe';

export default function ( injectDeps, {FlowRouter, LocalState} ) {
    const MainLayoutCtx = injectDeps(MainLayout);
    FlowRouter.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Home />)
            });
        }
    });
    FlowRouter.route('/fashionmix', {
        name: 'fashionmix',
        action() {
            LocalState.set(Constants.routePage['fashionmix'], 1);
            mount(MainLayoutCtx, {
                content: () => (<FashionMix />)
            });
        }
    });
    
    FlowRouter.route('/dresstalent', {
        name: 'dresstalent',
        action() {
            LocalState.set('CURRENT_MENU_INDEX', 3);
            mount(MainLayoutCtx, {
                content: () => (<DressTalent name="dresstalent" />)
            });
        }
    });

    FlowRouter.route('/newsList', {
        name: 'newsList',
        action() {
            LocalState.set('CURRENT_MENU_INDEX', 4);
            mount(MainLayoutCtx, {
                content: () => (<NewsList name="newslist" />)
            });
        }
    });

    FlowRouter.route('/test', {
        name: 'test',
        action() {
            LocalState.set(Constants.routePage['test'], 1);
            mount(MainLayoutCtx, {
                content: () => (<Test name="test" />)
            });
        }
    });

    FlowRouter.route('/aboutMe', {
        name: 'aboutMe',
        action() {
            LocalState.set('CURRENT_MENU_INDEX', 4);
            mount(MainLayoutCtx, {
                content: () => (<AboutMe name="aboutMe" />)
            });
        }
    });
}