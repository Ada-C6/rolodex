import $ from 'jquery';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';

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
        var rolodex = new RolodexView({ // give the application the rolodex view to render within the #application div
            el: $('#application'),
            data: contactData
        });

        rolodex.render();

        return this;
    }
});

export default ApplicationView;
