import Backbone from 'backbone';
import _        from 'underscore';
import $        from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
  }, //close initialize
  render: function() {
    var html = this.template({contact: this.contact})
    this.$el.html(html);
    return this;
  } //close render
});

export default ContactView;
