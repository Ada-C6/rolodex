import Backbone from 'backbone';
import Contact from 'app/models/contact';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({name: this.contact.name});
    this.$el.html(html);

    // Enable chained calls
    return this;
  }

});

export default ContactView;
