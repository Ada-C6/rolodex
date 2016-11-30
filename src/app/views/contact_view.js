import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
    console.log(this.contact);
  },

  render: function() {
    var html = this.template({name: this.contact.name});

    this.$el.html(html);
    // Enable chained calls
    return this;
  },
});

export default ContactView;
