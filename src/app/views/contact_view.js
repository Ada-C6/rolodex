import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({contact: this.contact.attributes});
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
