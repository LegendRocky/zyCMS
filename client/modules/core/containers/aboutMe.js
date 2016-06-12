import AboutMe from '../components/aboutMe.jsx';
import {Images} from '/lib/collections';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    console.log(Images.findOne());
    onData(null, {});
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AboutMe);
