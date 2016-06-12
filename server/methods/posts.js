import {ExperiencesList, Images, Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
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
            let findUser = ExperiencesList.findOne({mobile: obj.mobile});
            if ( findUser ) {
                throw new Meteor.Error('user exists!', '您的电话号码已注册!');
            }
            ExperiencesList.insert(user);
        }
    })
    Meteor.methods({
        'image.upload'(image) {
            Images.insert(image);
        }
    })
    Meteor.methods({
        'post.create'(post) {
            check(post, Object);
            Posts.insert(post);
        }
    })
}
