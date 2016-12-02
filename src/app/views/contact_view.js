import $ from 'jquery';
import Backbone from 'backbone';

import ModalView from 'app/views/modal_view';


const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.cardTemplate = options.cardTemplate;
    this.modalTemplate = options.modalTemplate;
    this.modal = $('#contact-details');
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
      'click .contact-card': 'createModal',
  },

  createModal: function(event) {
    var modal = new ModalView({
      model: this.model,
      template: this.modalTemplate,
      el: this.modal
    });

    // this.listenTo(modal, 'edit', this.editHandler);

    modal.render();

    return this;
  },

  // editHandler: function(contact) {
  //   console.log('in editHandler');
  //   this.trigger('populateForm', contact);
  // }

});

export default ContactView;
