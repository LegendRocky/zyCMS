import Login from '../components/login.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState} = context();

    const error = LocalState.get("LOGIN_ERROR");
    const createError = LocalState.get("CREATE_USER_ERROR");

    onData(null, {error, createError});
}

export const depsMapper = (context, actions) => ({
    loginUser: actions.users.login,
    createUser: actions.users.create,
    clearErrors: actions.users.clearErrors,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Login);