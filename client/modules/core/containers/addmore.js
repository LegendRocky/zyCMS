import AddMore from '../components/addmore.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    const {FlowRouter} = context();

    const route = FlowRouter._current.route.name;

    onData(null, {route});
};

export const depsMapper = (context, actions) => ({
    addMore: actions.app.addMore,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(AddMore);
