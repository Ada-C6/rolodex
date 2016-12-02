// this is the view for an individual contact card

import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($('#tmpl-contact-card').html());
  },

  render: function() {
    var html = this.template({name: this.model.get('name')});
    // console.log("===========" + this.model.attributes);
    this.$el.html(html);
    return this;
  },

  events: {
    'click .contact-card': 'detailsHandler'
  },

  detailsHandler: function() {
    event.stopPropagation();

    console.log("detailsHandler called on: " + this.model.attributes.name);
    this.trigger('modal', this.model);
    }
});

export default ContactView;
