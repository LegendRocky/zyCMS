import {Posts, Comments, NewsList, Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.publishComposite('posts.list', function (option) {
        check(option, {
            skip: Number,
            limit: Number
        })
        const selector = {};
        const options = {
            fields: {
                _id: 1, 
                articleName: 1,
                conent: 1,
                createdAt: 1,
                type: 1,
                createdBy: 1,
            },
            sort: {createdAt: -1},
            skip: option.skip,
            limit: option.limit
        };
        return {
            find: function () {
                Counts.publish(this, 'total_posts', Posts.find(selector ,{fields: {_id: 1}}), {noReady: true});
                return Posts.find(selector, options);
            },
            children: [
                {
                    find: function ( post ) {
                        return Users.find({_id: post.createdBy});
                    }
                }
            ]
        }
        
    });

    Meteor.publish('posts.single', function (postId) {
        check(postId, String);
        const selector = {_id: postId};
        return Posts.find(selector);
    });

    Meteor.publish('posts.comments', function (postId) {
        check(postId, String);
        const selector = {postId};
        return Comments.find(selector);
    });

    
    Meteor.publish('news.single', function(id) {
        check(id, String);
        return NewsList.find(id);
    })
}
