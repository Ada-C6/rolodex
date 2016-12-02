import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    console.log("Loaded a ContactView!");
    var html = this.template({
      name: this.model.name,
    });
    console.log("Name: " + this.model.name);
    this.$el.html(html);

    // Ensure that event listeners re-initialize when re-rendering contact cards
    this.delegateEvents();
    return this;
  },

  events: {
    'click .contact-card': 'cardClick'
  },

  cardClick: function(event) {
    console.log("cardClick! " + this.model.name);
    // event.stopPropagation();
    this.trigger('contact:click', this.model);
    return false;
  }
});

export default ContactView;
