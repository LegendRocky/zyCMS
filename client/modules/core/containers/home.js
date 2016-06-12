import Home from '../components/home.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    const dots = [
        {
            id: '',
            title: '你的专属云衣橱！',
            anchor: 'react-root',
        },
        {
            id: 'dot-2',
            title: '多啦衣展，女神来袭',
            anchor: 'case-two',
        },
        {
            id: 'dot-3',
            title: '每月249，无限穿衣！',
            anchor: 'case-three',
        },
        {
            id: 'dot-4',
            title: '联系我们吧',
            anchor: 'case-four',
        }
    ]

    onData(null, {dots});
};

export const depsMapper = (context, actions) => ({
    loginUser: actions.app.login,
    dotClick: actions.app.dotClick,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Home);
