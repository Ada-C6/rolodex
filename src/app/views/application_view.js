import $ from 'jquery';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';

import Rolodex from 'app/collections/rolodex';

var contactData = [
    {
        name: 'hello world',
        email: 'testing@world.com',
        phone: 2345678901
    },
    {
        name: 'second...',
        email: 'testing2@world.com',
        phone: 3456789012
    }
];

const ApplicationView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },

    render: function() { // render a new instance of RolodexView
        var rolodex = new Rolodex(contactData);
        var options = {
            el: $('#application'),
            model: rolodex
        };
        var application = new RolodexView(options);

        return this;
    }
});

export default ApplicationView;
