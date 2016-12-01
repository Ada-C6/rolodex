// import Backbone from 'backbone';

import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const ContactView = Backbone.View.extend({
    initialize: function(options) {
        this.template = _.template($('#tmpl-contact-card').html());
    },
// I'D LIKE TO UNDERSTAND WHY THIS FILE AND ROLODEX_VIEW FILE BOTH USE UNDERSCORE AND HAVE THEIR OWN TEMPLATE POINTING TO THE EXACT SAME SPOT IN THE HTML. IS THERE A WAY I COULD "CLEAN" THIS UP?

    render: function() {
        console.log(this.model.attributes);
        var html = this.template({name: this.model.name});
        this.$el.html(html);

        // will need to uncomment this once I re-render views:
        // this.delegateEvents(); // this re-attaches DOM event listeners to our 'brand new' HTML every time we re-render the view

        return this;
    }
});

export default ContactView;
