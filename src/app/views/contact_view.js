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
