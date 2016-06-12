import {FashionMix, WeiUI, Clothes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.publish('fashion.mix', function (option) {
        check(option, Object);
        let selector = {};
        let options = {
            fields:{
                _id: 1,
                title: 1, 
                detail: 1,
                createdAt: 1,
                imgURL: 1,
                detailURL: 1,
                key: 1,
            },
            sort: {createdAt: -1, key: 1},
            skip: option.skip,
            limit: option.limit
        };

        return FashionMix.find(selector, options);
    });

    Meteor.publish('get.news.list', function(option) {
        check(option, Object);
        let selector = {
            option_context: 'news'
        }
        let options = {
            fields:{
                _id: 1,
                name: 1,
                title: 1,
                order_no: 1,
                detail: 1,
                url: 1,
            },
            sort: {order_no: 1},
            skip: option.skip,
            limit: option.limit,
        }
        return WeiUI.find(selector, options);
    });

    Meteor.publish('test.cloth', function(option) {
        check(option, Object);
        let options = {
            fields:{
                _id: 1,
                name: 1,
                description: 1,
                createAt: 1,
            },
            sort: {createAt: -1},
            skip: option.skip,
            limit: option.limit
        }
        return Clothes.find({}, options);
    });
}