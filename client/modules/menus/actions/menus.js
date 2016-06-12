let reg = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;

export default {
    create({Meteor, LocalState, FlowRouter}, email, password) {
        if (!email) {
            return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
        }

        if (!password) {
            return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
        }

        if (!reg.test(email)) {
            return LocalState.set('LOGIN_ERROR', 'Email format error.')
        }

        LocalState.set('CREATE_USER_ERROR', null);

        Accounts.createUser({email, password}, function(error){
            if (error) {
                LocalState.set('CREATE_USER_ERROR', error);
            } else {
                FlowRouter.go('/');
            }
        });
    },

    login({Meteor, LocalState, FlowRouter}, email, password) {
        if (!email) {
            return LocalState.set('LOGIN_ERROR', 'Email is required.');
        }

        if (!password) {
            return LocalState.set('LOGIN_ERROR', 'Password is required.');
        }

        if (!reg.test(email)) {
            return LocalState.set('LOGIN_ERROR', 'Email format error.')
        }

        LocalState.set('LOGIN_ERROR', null);

        Meteor.loginWithPassword(email, password, function(error){
            if (error) {
                LocalState.set('LOGIN_ERROR', 'Login error!');
            } else {
                FlowRouter.go('/');
            }   
        });
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    },

    loadMore({Meteor, LocalState, FlowRouter}, route) {
        LocalState.set(Constants.routePage[route], (LocalState.get(Constants.routePage[route]) || 1)+1);
        LocalState.set('loading', true);
    }
};