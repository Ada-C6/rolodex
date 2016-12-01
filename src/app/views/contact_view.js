import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    var html = this.template({
      name: this.model.attributes.name,
    });
    console.log(this.model.attributes);

    this.$el.html(html);
    // Enable chained calls
    return this;
  },

  events: {
    'click .contact-card': 'editHandler'
  },

  editHandler: function(event) {
    console.log("editHandler called on: " + this.model.attributes.name);
    this.trigger('edit', this.model);
  }
});

export default ContactView;
