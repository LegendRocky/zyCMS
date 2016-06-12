import Manage from '../components/manage.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState, FlowRouter} = context();

    let limit = LocalState.get('POSTS_LIST_LIMIT') || 10;
    let page = LocalState.get('POSTS_LIST_PAGE') || 1;

    let option = {
        skip: page * limit - limit,
        limit: limit
    }
    
    let sub = Meteor.subscribe('posts.list', option);

    let data;
    if ( sub.ready() ) {
        let data = Collections.Posts.find().fetch().map(function(item, index) {
            console.log(item);
            let user = Collections.Users.findOne({_id: item.createdBy});
            if ( !user ) {
                return item;
            }
            _.extend(item, {
                username: user.username
            })
            return item;
        });
        let counts = Counts.get('total_posts')
        onData(null, {data, FlowRouter, LocalState, counts});
    }
};

export const depsMapper = (context, actions) => ({
    login: actions.admin.login,
    createUser: actions.admin.createUser,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Manage);
