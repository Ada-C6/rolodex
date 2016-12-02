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

    // reattach dom even listeners to our brand spanking new HTML
    this.delegateEvents();
    
    // Enable chained calls
    return this;
  },

  events: {
    'click .contact-card': 'detailsHandler'
  },

  detailsHandler: function(event) {
    // I only want clicks on the cards to register on the cards and not bubble up to the application.
    event.stopPropagation();

    console.log("detailsHandler called on: " + this.model.attributes.name);
    this.trigger('showDetail', this.model);
  }
});

export default ContactView;
