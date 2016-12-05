import $ from 'jquery';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    // console.log("Loaded a ContactView!"); // NOTE: log

    // Populate the card template with the model name
    var html = this.template({
      name: this.model.name,
    });
    // console.log("Name: " + this.model.name); // NOTE: log
    this.$el.html(html);

    // Ensure that event listeners are active whenever (re-)rendering contact cards
    this.delegateEvents();

    return this;
  },

  events: {
    'click .contact-card': 'cardClick'
  },

  cardClick: function(event) {
    // console.log("cardClick! " + this.model.name); // NOTE: log

    // stopPropagation prevents event from bubbling up; in this case, it prevents clicks on this contactView from triggering as clicks on its ancestor 'html' element (which hides the modal)
    event.stopPropagation();

    // Trigger 'contact:click' event to pass up to RolodexView for showModal
    this.trigger('contact:click', this.model);
  },
});

export default ContactView;
