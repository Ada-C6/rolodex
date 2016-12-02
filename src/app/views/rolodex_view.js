import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#contact-card').html());

    this.listElement = this.$('#contact-cards');

    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.input = {
     name: this.$('.contact-form input[name="name"]'),
     phone: this.$('.contact-form input[name="phone"]'),
     email: this.$('.contact-form input[name="email"]')
    };

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // var contacts = $('#contact-cards');
    // this.$el.append(contacts);
    //
    // var contact = new ContactView({
    //   el: contacts
    // });
    // contact.render();

    this.listElement.empty();

    this.cardList.forEach(function(contactCard){
      contactCard.render();

      this.listElement.append(contactCard.$el);
    }, this);

    return this;

  },

  events: {
    'click .btn-save' : 'createContact',
    'click .btn-cancel': 'clearInput'
  },


  addContact: function(contact) {
    var contactCard = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.cardList.push(contactCard);
    console.log(contactCard);
  },

  createContact: function(event) {
    console.log("createContact called");
    event.preventDefault();

    //get input data from the form and turn it into a contact
    var contactInput = this.getInput();
    this.model.add(contactInput);


    this.clearInput();
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  // setInput: function(contact) {
  //   this.input.name.val(contact.get('name'));
  //   this.input.email.val(contact.get('email'));
  //   this.input.phone.val(contact.get('phone'));
  // },

  clearInput: function() {
    console.log("clearInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');

  }

});



export default RolodexView;
