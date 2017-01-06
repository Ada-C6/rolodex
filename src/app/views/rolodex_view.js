import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact.js';
import ContactView from 'app/views/contact_view.js';
import Rolodex from 'app/collections/rolodex.js';


const RolodexView = Backbone.View.extend({
  initialize: function(options){

    console.log(this.$('.btn_save'));
    console.log($('.btn_save'));

    this.contactTemplate = _.template($('#tmpl-contact-card').html());


    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]'),
    };

    this.listElement = $('#contact-cards');


    this.cardList = [];

    this.model.forEach(function(contact){
      this.addContact(contact);
    }, this);

    this.listenTo(this.model, "add", this.addContact);
    this.listenTo(this.model, "update", this.render);
    // this.listenTo(this.model, "update", console.log('at update'));
  },

  events: {
    'click #save-button': 'createContact',

    'click #clear-button':  'clearInput'
  },

  createContact: function(event){
    // event.preventDefault();

    var contact = new Contact(this.getInput());
    this.model.add(contact);
    this.clearInput();

  },
  getInput: function(){
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    }
    return contact;
  },
  addContact: function(contact){
    console.log('at add')
    var cardList = this.cardList;

    var card = new ContactView({
      model: contact
    });

    cardList.push(card);

    // this.model.update();
    console.log('just pushed');
  },
  clearInput: function(event){
    console.log('at clear')
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");
  },

  render: function(){

    this.listElement.empty();

    this.cardList.forEach(function(card){

      card.render();

      this.listElement.append(card.$el);
      }, this);


    return this;

  }

});

export default RolodexView;
