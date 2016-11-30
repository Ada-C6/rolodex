import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
  },

  render: function() {
    var html = this.template(this.contact.attributes);
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
