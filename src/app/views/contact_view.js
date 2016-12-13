import Backbone from 'backbone';
import Contact from 'app/models/contact';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // Store the incoming contact and template
    this.contact = options.contact;
    this.template = options.cardTemplate;

    // Locate the modal in the html file and generate a template for it
    this.modalPlacement = $('#contact-details');
    this.modalTemplate = _.template($('#tmpl-contact-details').html());

  },
  render: function() {
    // Generate html for this contact using the appropriate template and store it in this element
    var html = this.template({name: this.contact.name, phone: this.contact.phone, email: this.contact.email});
    this.$el.html(html);

    // Return this element to the caller
    return this;
  },

  events: {
    'click .contact-card' : 'showModal',
  },

  showModal: function(event) {
    console.log("Trying to show!!");
    // Generate html for the modal using the appropriate template and store it in this element
    var html = this.modalTemplate({name: this.contact.name, phone: this.contact.phone, email: this.contact.email});
    this.modalPlacement.html(html);

    // Show the modal
    this.modalPlacement.show();

    // Stop RolodeView hide Modal from firing
    event.stopImmediatePropagation();

  },

});

export default ContactView;
