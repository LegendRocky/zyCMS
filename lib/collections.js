import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
export const Users = Meteor.users;

export const NewsList = new Mongo.Collection('news_list');
export const FashionMix = new Mongo.Collection('fashion_mix');

export const Clothes = new Mongo.Collection('clothes');

export const WeiUI = new Mongo.Collection('weiUI');

//一元体验活动
export const ExperiencesList = new Mongo.Collection('experiences_list');

//...
export const Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});
