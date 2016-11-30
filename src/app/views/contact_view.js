import $ from 'jquery';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.cardTemplate = options.cardTemplate;
    this.modalTemplate = options.modalTemplate;
    this.modal = $('#contact-details');

    // modal must be hidden until we hover a contact
    this.modal.hide();

  },

  render: function() {
    var html = this.cardTemplate({
      contact: this.model.attributes
    });
    this.$el.html(html);

  // so we don't destroy buttons by emptying
  // re-attach DOM event listeners to our brand-new HTML
  this.delegateEvents();

  // Enable chained calls
    return this;
  },

  events: {
      'mouseover .contact-card': 'showModal',
      'mouseleave .contact-card': 'hideModal'
  },

  showModal: function() {
    var html = this.modalTemplate({
      contact: this.model.attributes
    });

    this.modal.html(html);
    this.modal.show();
  },

  hideModal: function() {
    this.modal.hide();
  }

});

export default ContactView;
