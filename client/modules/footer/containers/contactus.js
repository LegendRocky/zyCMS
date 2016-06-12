
import ContactUs from '../components/contactus.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {

    const {Meteor, Collections, LocalState, FlowRouter} = context();

    onData(null, {});
}

export const depsMapper = (context, actions) => ({
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(ContactUs);
