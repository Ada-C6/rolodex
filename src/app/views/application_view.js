import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {

  }, // end initialize function

  render: function() {

  }, // end render function



  ////////////// ADDING A NEW CONTACT //////////////
  events: {
    'click .btn-save': 'createContact',   // "We're intercepting a form submit event"
    'click .btn-cancel': 'clearInput',
    'mouseup ': 'hidePopup',
  },

  createContact: function(event) {
    console.log('createContact called');
    // Suppress the default behavior (might be unnecessary since this is not a form).
    event.preventDefault();

    // Get the input data from the form and turn it into a task
    var contact = this.getInput();
    console.log(contact);

    // This is calling a built in function ".add" on the Rolodex collection (passed in here with the name 'model')
      // the contact data from getInput is passed to rolodex.js Collection,
      // which calls contact.js model,
      // the Listening event in rolodex "senses" that this.model (i.e. the rolodex) has been added to,
      // and subsequently calls the addContact method.
    this.model.add(contact);

    // Clear the input form so the user can add another task
    this.clearInput();
  },

  // Clear the inputs in the boxes
  clearInput: function() {
    console.log("clearInput called");

    $( 'input[name="name"]' ).val('');
    $( 'input[name="email"]' ).val('');
    $( 'input[name="phone"]' ).val('');
  },

  // Build a contact from the data entered in the .new-task form
  getInput: function() {
    var contact = {
      name: $( 'input[name="name"]' ).val(),
      email: $( 'input[name="email"]' ).val(),
      phoneNumber: $( 'input[name="phone"]' ).val()
    };
    return contact;
  },

  hidePopup: function(e) {
    // console.log("hidePopup called");
    // console.log($(e.target).closest(".contact-card").length === 0);


    // OMG... this took FOREVER to figure out. there was a weird problem with identifying if
    // I clicked on the h4 part of a contact-card it didnt identify as clicking $('.contact-card') -- i.e. juse $('.contact-card').is(e.target) did not work
    // but if I don't limit to clicking anywhere EXCEPT on a contact-card, it would get confused showing and hiding them at the same time.
    if ($(e.target).closest(".contact-card").length === 0) {
      $('#contact-details').fadeOut(200); // Close the popup element
    }
  }

});

export default ApplicationView;
