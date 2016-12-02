import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options){

    // the input from the "form"
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    // keep track of the contact cards
    this.cardList = [];

    // Compile a template to be shared between the individual tasks
    this.contactCardTemplate = _.template($('#tmpl-contact-card').html());

    this.contactDetailsTemplate =
    _.template($('#tmpl-contact-details').html());

    // this is the list of contacts that we're in charge of:
    this.contactListElement = $('#contact-cards');

    // this is the modal for displaying the details of a contact
    this.contactDetails = $('#contact-details');

    // Create a card for each contact in our data set:
    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);

    // when a model is added to the collection, creating a card for that contact.
    this.listenTo(this.model, 'add', this.addContact);

    // when the model is saved to the collection, want to re-render the list of cards.
    this.listenTo(this.model, 'update', this.render);

  },

  render: function(){

    // make sure my list is empty to start with
    this.contactListElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our task list
      this.contactListElement.append(card.$el);
    }, this);

    // reattach dom even listeners to our brand spanking new HTML
    this.delegateEvents();

    // Enable chained calls
    return this;
  },

  events: {
    'click .btn-cancel': 'clearInput',
    'click .btn-save': 'createContact'
  },

  clearInput: function(event) {
    console.log("clearInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  addContact: function(contact){
    var card = new ContactView({
      model: contact,
      template: this.contactCardTemplate
    });

    this.listenTo(card, 'edit', this.showModal);
    this.cardList.push(card);
  },

  createContact: function(){
    event.preventDefault();
    console.log("create a contact!");

    // grab the task from the form
    var rawContact = this.getInput();

    //add the task to our collection
    this.model.add(rawContact);

    // clear the form for next task
    this.clearInput();
  },

  // Build a task from the data entered in the .new-task form
  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  showModal: function(peep) {
    console.log("showing modal for " + peep.get("name"));

    // replace contents of modal with this peep's info
    this.fillModal(peep);

    // display the modal
    this.contactDetails.show();
  },

  fillModal: function(contact){
    // do I want another view for the modal?

    console.log(contact.attributes);

    this.contactDetails.empty();

    var deets = this.contactDetailsTemplate({name: contact.attributes.name, email: contact.attributes.email, phone: contact.attributes.phone});

    this.contactDetails.append(deets);

  }

  // otherClick: function(event){
  //   console.log("clicking somewhere else");
  // },
  //
  // hideModal: function() {
  //
  // }

});

export default RolodexView;
