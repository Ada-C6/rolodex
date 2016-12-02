import $ from 'jquery';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Jo',
    phone: '555-5555',
    email: 'j@me.com'
  },
  {
    name: 'Pat',
    phone: '555-5555',
    email: 'p@me.com'
  },
  {
    name: 'Sam',
    phone: '555-5555',
    email: 's@me.com'
  }
];

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {

    this.rolodex = new Rolodex(contactData); // collection
    this.roloView = new RolodexView({  // contact card list view
      el: 'main',
      model: this.rolodex
    });

    this.listenTo(this.roloView, 'edit', this.editInput); // listen for any edit from collection
  },

  render: function() {
    this.roloView.render(); // refresh main section

    return this;
  },

  events: {
    'click .btn-save': 'createContact', // adds new contact to collection or updates contact
    'click .btn-cancel': 'clearInput', // clears form, resets hidden update value to false
    'click': 'hideModal' // hides details section on any click inside body
  },

  hideModal: function(e) {
    if (e.target.id == 'contact-details' || $(e.target).closest('#contact-details').length) {
      return; // do nothing if user clicks inside contact details
    } else {
    $('#contact-details').hide(); // otherwise hide the contact details
    }
  },

  createContact: function(event) {
    var rawContact = this.getInput(); // gets the form data

    if (rawContact.update == 'true') { // if this is an update, not a new contact, just edit
      this.updateModel.set({name: rawContact.name, email: rawContact.email, phone: rawContact.phone});
    } else {
      this.rolodex.add(rawContact); // otherwise add a new contact to the collection
    }

    this.clearInput(); // clear form fields
  },

  editInput: function(e) { // fill form with data from the selected model
    this.$("input[name='name']").val(e.attributes.name);
    this.$("input[name='email']").val(e.attributes.email);
    this.$("input[name='phone']").val(e.attributes.phone);
    this.$("input[name='update']").val('true'); // indicate that this is an existing model to be updated

    this.updateModel = e; // save the model that is being edited so it can be updated when save button is clicked
  },

  clearInput: function(event) { // clears form fields
    this.$("input[name='name']").val('');
    this.$("input[name='email']").val('');
    this.$("input[name='phone']").val('');
    this.$("input[name='update']").val('false'); // resets the update value to false until edit input changes it to true
  },

  getInput: function() { // gets data from form and creates a raw contact
    var contact = {
      name: this.$("input[name='name']").val(),
      email: this.$("input[name='email']").val(),
      phone: this.$("input[name='phone']").val(),
      update: this.$("input[name='update']").val()
    };
    return contact;
  }

});

export default ApplicationView;
