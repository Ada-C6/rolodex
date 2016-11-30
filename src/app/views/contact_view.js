import $ from 'jquery';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.cardTemplate = options.cardTemplate;
    this.modalTemplate = options.modalTemplate;
    this.modal = $('#contact-details');

    console.log(this.el);

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
      'click .contact-card': 'showModal',
  },

  showModal: function(event) {
    event.stopPropagation();
    var html = this.modalTemplate({
      contact: this.model.attributes
    });

    this.modal.html(html);
    console.log('Make modal triggered');
    this.modal.show();
  },

  hideModal: function() {
    console.log('Hide modal triggered');
    this.modal.hide();
  },
});

export default ContactView;
