import $ from 'jquery';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    // console.log("Loaded a ContactView!"); // NOTE: log

    // Populate the template with model values
    var html = this.template({
      name: this.model.name,
    });
    // console.log("Name: " + this.model.name); // NOTE: log
    this.$el.html(html);

    // Ensure that event listeners are active whenever rendering contact cards
    this.delegateEvents();

    return this;
  },

  events: {
    'click .contact-card': 'cardClick'
    // TODO: remove!
    // 'click .btn-edit': 'editClick'
  },

  cardClick: function(event) {
    // console.log("cardClick! " + this.model.name); // NOTE: log

    // stopPropagation prevents event from bubbling up; in this case, it prevents clicks on this contactView from triggering as clicks on 'html' element (which hides the modal)
    event.stopPropagation();

    // Trigger event to pass up to RolodexView for showModal
    this.trigger('contact:click', this.model);
  },

  // TODO: remove!
  // editClick: function(event) {
  //   console.log("Ready to edit! " + this.model); // NOTE: log
  //   this.trigger('edit:click');
  // },
});

export default ContactView;
