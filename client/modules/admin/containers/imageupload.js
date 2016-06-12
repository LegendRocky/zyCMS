import ImageUpload from '../components/imageupload.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    const {FlowRouter} = context();

    const route = FlowRouter._current.route.name;

    onData(null, {});
};

export const depsMapper = (context, actions) => ({
    upload: actions.admin.upload,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ImageUpload);
