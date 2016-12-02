import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($('#tmpl-contact-card').html());
    this.contact = options.model;
  },

  render: function() {
    console.log(this.model.attributes);

    var html = this.template({
      name: this.model.get("name")
    });
    this.$el.html(html);

  // Enable chained calls
    return this;
  }

});

export default ContactView;
