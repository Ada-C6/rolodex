import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.model;
    this.template = _.template($('#tmpl-contact-card').html());
  },
  render: function() {
    console.log(this.model.attributes);
    console.log("This should be the name: " + this.model.get('name'));
    var html = this.template({name: this.model.get('name')});
    this.$el.html(html);
    $('#contact-details').hide();
    return this;
  }
});

export default ContactView;
