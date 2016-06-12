
import NewsList from '../components/newslist.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState, FlowRouter} = context();

    var route = FlowRouter._current.route.name;
    page = LocalState.get(Constants.routePage[route]) || 1;
    const limit = LocalState.get('PAGE_LIMIT');
    const skip = limit * (page - 1);

    let loadState = LocalState.get('loading');

    const option = {
        sort: {order_no: 1},
        skip: skip,
        limit: limit,
    }
    if ( Meteor.subscribe('get.news.list', option).ready() ) {
        let news = Collections.WeiUI.find().fetch();
        if (news) {
            loadState = false;
            LocalState.set('loading', false);
        } else {
            loadState = true;
            LocalState.set('loading', true);
        }
        onData(null, {news, route, loadState});
    } else {
        onData(null, {loadState});
    }
}

export const depsMapper = (context, actions) => ({
    loadMore: actions.menus.loadMore,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(NewsList);