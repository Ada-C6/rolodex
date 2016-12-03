import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // this.contactsData = options.contactsData; //stores the full list of contacts
    $('#contact-details').hide();
    this.contactTemplate = _.template($('#tmpl-contact-card').html()); //compiles a template to be shared between the contacts
    this.listElement = this.$('#contact-cards'); //keep track of the <li> elements

    // this.modelList = [];
    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
  }, //close initialize

  render: function() {
    // $('#contact-details').hide();
    this.listElement.empty(); //make sure the DOM is empty before we start adding to it
    this.cardList.forEach(function(card) {
      card.render(); //cause the contact to render
      this.listElement.append(card.$el); //add the html to the rolodex
    }, this);
    return this;
  }, //close render

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  }, //close events

  clearInput: function(event) {
    event.preventDefault();
    console.log('clear input button pressed');
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }, //close clearInput

  createContact: function(event) {
    event.preventDefault();
    console.log('creating a contact button pressed!');
    var contact = new Contact( this.getInput() );
    this.model.add(contact);
    this.clearInput(event);
  }, //close createContact

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  }, //close getInput

  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.cardList.push(card);
    this.listenTo(card, "showMe", this.showCard);
  }, //close addContact

  showCard: function(contact) {
    console.log('youre trying to show the card in the rolodex view');
    var mycardsname = contact.get("name");
    console.log( 'mycardsname ' + mycardsname);
    // var this.contact.showing = true;
    // console.log("contact.showing is " + contact.showing);
    // return mycardsname
    // this.model.remove(cardModel);
  }

});

export default RolodexView;
