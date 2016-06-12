export default {
    // create({Meteor, LocalState, FlowRouter}, title, content) {
    //     if (!title || !content) {
    //         return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    //     }

    //     LocalState.set('SAVING_ERROR', null);

    //     const id = Meteor.uuid();
    //     const userId = Meteor.userId();
    //     // There is a method stub for this in the config/method_stubs
    //     // That's how we are doing latency compensation
    //     Meteor.call('posts.createee', id, title, content, userId, (err) => {
    //         if (err) {
    //             return LocalState.set('SAVING_ERROR', err.message);
    //         }
    //     });
    //     FlowRouter.go(`/post/${id}`);
    // },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    },

    logout({Meteor, FlowRouter}) {
        Meteor.logout();
        FlowRouter.go('/login');
    },

    dotClick({Meteor, FlowRouter}) {
        
    },

    addMore({Meteor, LocalState, FlowRouter}, route) {
        LocalState.set(Constants.routePage[route], (LocalState.get(Constants.routePage[route]) || 1)+1);
    },

    menuClick({Meteor, FlowRouter, LocalState}, index) {
        LocalState.set('CURRENT_MENU_INDEX', parseInt(index));
    },

    count({Meteor, LocalState, FlowRouter}, index) {
        LocalState.set('SLIDER_INDEX', parseInt(index));
    },
};
