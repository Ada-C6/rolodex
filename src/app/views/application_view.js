import $ from 'jquery';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';

var contactData = [
    {
        name: 'hello world',
        email: 'testing@world.com',
        phone: '2345678901'
    }
];

const ApplicationView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },

// I WILL WANT TO UNDERSTAND THE DETAILS OF THIS RENDER FUNCTION (rolodexTag) AS IT SEEMS DIFFERENT THAN OUR LIVE CODING...
    render: function() { // render a new instance of RolodexView

        var rolodexTag = $('#application'); // set a HTML tag for this to end up in the rolodex section

        var rolodex = new RolodexView({ // give the application the rolodex view to render
            el: rolodexTag,
            data: contactData
        });

        rolodex.render();

        return this;
    }
});

export default ApplicationView;
