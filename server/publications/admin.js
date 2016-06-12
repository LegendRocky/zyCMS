
import { Article } from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.publish('article.list', function () {
        const selector = {};
        const options = {
            fields: {
                _id: 1, 
                title: 1,
                conent: 1,
                createdAt: 1,
            },
            sort: {createdAt: -1},
            limit: 10
        };

        return Article.find(selector, options);
    });
}
