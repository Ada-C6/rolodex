import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
  },

  render: function() {
    var html = this.contactTemplate(this.model.attributes);
    this.$el.html(html);

    // Enable chained calls
    console.log(this);
    return this;
  },
});

export default ContactView;
