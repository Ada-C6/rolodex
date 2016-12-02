import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jQuery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

import Rolodex from 'app/collections/rolodex';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {

    this.contactTemplate = _.template($('#tmpl-contact-details').html());
    this.cardTemplate = _.template($('#tmpl-contact-card').html());

    this.listElement = this.$('#contact-cards');
    // These are used when you add a card to the list.
    // this.modelList = [];
    // this list carries the list of cards that is displayed
    this.cardList = [];

    this.model.forEach(function(modelName) {

      // eventually : this.addTask(rawTask);

      var contactCard = new ContactView({
        model: modelName,
        template: this.contactTemplate
      });

      this.listenTo(contactCard, "displayHandler", this.displayContactDetails);
      this.cardList.push(contactCard);
    }, this);

    // WHat is this and where does it go?
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };
  },
  render: function(){
    this.cardList.forEach(function(card){
      card.render();
      // console.log(">>>>> Debugging with Dan: DPR: about to log card stuff");
      // console.log(card);
      // console.log(card.el);
      // console.log(card.$el);
      this.listElement.append(card.$el);

    }, this);
    return this;
  },

  events: {
    'click .btn-cancel': 'cancelInput',

    // NOTE, there is not a typical HTML-form for this form, so I think to submit, I need to click the button in and then pass in the values some other way.
    'click .btn-save': 'createContact'
  },

  addContact: function(rawContact){
    var contact = new Contact (rawContact);
    this.modelList.push(contact);

    var contactCard = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    // Need to include the listenTo displayHandler in both the initialize and the addContact because the add contact adds it to new contacts and the initialize includes it in the creating of the built in contacts
    this.listenTo(contactCard, "displayHandler", this.displayContactDetails);
    // this.listenTo(contactCard, "displayHandler", function(){console.log("EnETTERED ANAD PRINTING!!");});

    this.cardList.push(contactCard);
  },


  // No event, because it is triggered by another event.
  displayContactDetails: function(contactCard){
    console.log("displayHandler called");
    var element = this.$("#contact-details");
    var name = contactCard.model.get('name');
    var html = this.contactTemplate({contact: contactCard.model.attributes});
    console.log(html);
    element.append(html);
    // console.log(html);
    // console.log(element);
  },

  cancelInput: function(event){
    console.log("cancelInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  createContact: function(event){
    console.log("createContact called");
    event.preventDefault();
    var contact = this.getInput();
    this.addContact(contact);
    this.render();
    this.cancelInput();
  },

  getInput: function(){
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  }

});

export default RolodexView;
