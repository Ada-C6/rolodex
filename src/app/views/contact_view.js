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
    'click .contact-card': 'detailsHandler'
  },

  detailsHandler: function(event) {
    // is this where I'd stop the propogation? I want the trigger to go up exactly ONE level.
    event.stopPropagation();
    
    console.log("detailsHandler called on: " + this.model.attributes.name);
    this.trigger('edit', this.model);
  }
});

export default ContactView;
