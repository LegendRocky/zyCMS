import Header from '../components/header.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {
    let {LocalState} = context();
    //console.log(LocalState);
    let CURRENT_MENU_INDEX = LocalState.get('CURRENT_MENU_INDEX') || 0;
    onData(null, {CURRENT_MENU_INDEX});
}

export const depsMapper = (context, actions) => ({
    menuClick: actions.app.menuClick,
    logout: actions.app.logout,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Header);