import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.modelList = [];
    // template for the individual contact cards
    this.contactCardTemplate = _.template($('#tmpl-contact-details').html());
    // keep track of the <ul> element
    this.listElement = this.$('#contact-cards');
    // create a ContactView for each contactCard:
    // list of contact card model instances:
    this.cardList = [];
    // process each task as they are created:
    this.model.forEach(function(contact){
      this.addContact(contact);
    }, this); // bind 'this' so it's available inside forEach (????)
    this.input = {
      name: this.$(''),
      email: this.$('')
      phone: this.$('')
    };

    // listen for the save click
    this.listenTo(this.model, 'add', this.addContact);
  },
  render: function() {
    // need to make sure the list in the DOM is empty before appending new items
    this.listElement.empty();

    // iterate through the data assigned:
    this.cardList.forEach(function(contactCard){
      contactCard.render();
      this.listElement.append(contactCard.$el);
    }, this);
    return this;
  },
  createContact: function(event) {
    event.preventDefault(); // supress the refreshing of page with a form submission
    var contact = new Contact(this.getInput());
    this.model.add(contact);
    // clear the input form:
    this.clearInput();
  }, // end create contact

  getInput: function(){
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  }, // end getInput

  addContact: function(contact){
    var contactCard = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
  }

}); // end of RolodexView

export default RolodexView;
