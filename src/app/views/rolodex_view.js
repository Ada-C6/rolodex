import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {

    // template for the individual contact cards
    this.contactCardTemplate = _.template($('#tmpl-contact-card').html());

    this.contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

    // keep track of the elements that will be used to render the contact card and the contact details
    this.listElement = this.$('#contact-cards');
    this.detailsElement = this.$('#contact-details');

    // list of card views:
    this.cardList = [];

    // process each task as they are created:
    this.model.forEach(function(contact){
      this.addContact(contact);
    }, this); // bind 'this' so it's available inside forEach (????)
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[email="email"]'),
      phone: this.$('.contact-form input[phone="phone"]')
    };

    // when a model is added to the collection, add a contactCard for it
    this.listenTo(this.model, 'add', this.addContact);

    // re-render the list when the collection changes:
    this.listenTo(this.model, 'update', this.render);


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
  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',

  },

  createContact: function(event) {
    event.preventDefault(); // supress the refreshing of page with a form submission

    // get the input and turn it into a contact:
    var rawContact = this.getInput();

    // add the contact to the model??
    var contact = this.model.add(rawContact);

    // this.addContact(contact);
    // this.render();
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
    // this is to make a view for new contacts and add them to the cardList:
    var contactCard = new ContactView({
      model: contact,
      template: this.contactCardTemplate
    });
    // have each card listen for a click event:
    this.listenTo(contactCard, 'showCardDetails', this.showDetails);
    // add the card to the list
    this.cardList.push(contactCard);

  },

  clearInput: function(event){
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },
// need to show the details when a name is clicked:
  showDetails: function(contactModel){
    var details = this.contactDetailsTemplate({name: contactModel.get('name'), email: contactModel.get('email'), phone: contactModel.get('phone')})
    this.detailsElement.html(details);
  }

}); // end of RolodexView

export default RolodexView;
