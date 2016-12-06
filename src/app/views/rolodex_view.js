import $ from 'jquery';    // Letting us use jquery within this document
import Backbone from 'backbone'; // importing backbone
import _ from 'underscore'; // underscore library - works a lot like erb

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactModelList = [];

    this.contactViewList = [];

    // Compile a template to be shared between the individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.modalTemplate = _.template($('#tmpl-contact-details').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');
    this.modalElement = this.$('#contact-details');

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'add', this.addContact);
    // this.listenTo(this.model, 'remove', this.addContact);
  }, // end initialize


  render: function() {
    // Make sure the list in the DOM is empty before appending items (to keep from doubling)
    this.listElement.empty();

    this.contactViewList.forEach(function(contact) {
      contact.render();
      this.listElement.append(contact.$el);
    }, this)

    return this;
  }, // end render


  events: {
    'submit .contact-form': 'createContact',
    'click .btn-cancel': 'cancelInput',
  }, // end events



  addContact: function(contact) {
    console.log("addContact");
    var contact = new ContactView({
      model: contact,
      contactTemplate: this.contactTemplate,
      modalTemplate: this.modalTemplate
    });
    this.contactViewList.push(contact);
  }, // end addContact


  createContact: function(event) {
    console.log("createContact");
    event.preventDefault();
    var contact = new Contact(this.getInput());

    this.model.add(contact);
    this.cancelInput();
  }, // end createContact


  getInput: function(event) {
    console.log("getInput");

    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    }
    return contact;
  }, // end getInput

  cancelInput: function(event) {
    // event.preventDefault();
    console.log("cancelInput");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }, // end cancelInput

  clearInput: function() {
    console.log("clearInput");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }
});


// var tripInfomation = function(trip) {
//   var spotsLeft = randSpot()
//   $('#trip-name').text(trip.name);
//   $('#trip-continent').text("Continent: " + trip.continent);
//   $('#trip-category').text("Category: " + trip.category);
//   $('#trip-about').text(trip.about);
//   $('#trip-weeks').text("Duration: " + trip.weeks);
//   $('#trip-cost').text("Cost: $" + trip.cost);
//   $('#trip-spots').text("Spots Left: " + spotsLeft);
//   $('#trip-info').append(reserveTrip(trip.id));
// }
//
// $('#trips-list').on('click', 'a', function(e) { //e is short for 'event'
//   e.preventDefault();
//   $('#trip-info').show();
//   var showTripUrl = $(this).attr('href');  // attr() = attributes
//   var tripID = $.get(showTripUrl, tripInfomation).fail(function() {
//     alert("Page Not Found");
//   });
// });









export default RolodexView;
