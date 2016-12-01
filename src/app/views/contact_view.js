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
    var html = this.template({name: this.model.name});
    this.$el.html(html);
    return this;
  }
});

export default ContactView;
