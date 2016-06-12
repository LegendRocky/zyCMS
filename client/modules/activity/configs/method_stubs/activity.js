
import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
    Meteor.methods({
        'experience.list.create'(obj) {
            check(obj, Object);
            const createdAt = new Date();
            const user = {
                // _id, title, content, createdAt,
                // saving: true
                createdAt: createdAt,
                realName: obj.name,
                mobile: obj.mobile,
                address: obj.addr
            };
            Collections.ExperiencesList.insert(user);
        }
    });
}
