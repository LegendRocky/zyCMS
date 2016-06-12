import ActivityPage from '../components/activitypage.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    onData(null, {});
};

export const depsMapper = (context, actions) => ({
    createUser: actions.activity.create,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ActivityPage);
