import {Images} from '/lib/collections';

Images.allow({
    'insert': function () {
        // add custom authentication code here
        return true;
    }
});