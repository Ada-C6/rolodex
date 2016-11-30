import $ from 'jquery';
import Backbone from 'backbone';

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
      'click .contact-card': 'makeModal',
  },

  makeModal: function(event) {
    var html = this.modalTemplate({
      contact: this.model.attributes
    });

    var editButton = '<h3 class="button btn-edit" id=' + this.model.cid + '>Edit</h3>';
  // the contact view is reponsible for filling in the details
    this.modal.html(html);
    this.modal.append(editButton);
  },
});

export default ContactView;
