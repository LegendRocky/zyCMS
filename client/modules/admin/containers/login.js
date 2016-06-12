import Login from '../components/login.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    onData(null, {});
};

export const depsMapper = (context, actions) => ({
    login: actions.admin.login,
    createUser: actions.admin.createUser,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Login);
