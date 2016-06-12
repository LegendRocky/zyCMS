
export default {
    create({Meteor, LocalState, FlowRouter}, obj) {
        console.log(obj);
        // if (!obj.name || !obj.mobile || obj.addr) {
        //     return LocalState.set('SAVING_ERROR', 'Name & Mobile & addr are required!');
        // }

        LocalState.set('SAVING_ERROR', null);

        // const id = Meteor.uuid();
        // const userId = Meteor.userId();
        // There is a method stub for this in the config/method_stubs
        // That's how we are doing latency compensation
        Meteor.call('experience.list.create', obj, (err) => {
            
            if (err) {
                return alert(err.reason);
                //return LocalState.set('SAVING_ERROR', err.message);
            }
            alert('申请成功!');
        });
        //FlowRouter.go(`/post/${id}`);
    }
};
