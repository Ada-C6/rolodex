// rolodex_view.js
// this view handles logic for the rolodex collection(collection of contacts)

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

// build a rolodex_view with options passed in app (data)
const RolodexView = Backbone.View.extend({

  initialize: function(options){
    // receipe prep. mise plase .
    //store the full list of contacts
    // console.log("Inside RolodexView::::::" + JSON.stringify(options));

    this.contactData = options.contactData;
    // console.log("this contactData", this.contactData);
    // console.log("options _>", options);

    // Compile a template to be shared between the individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    // not sure if this is how its done.
    this.listElement = this.$('#contact-cards');

    // model/template options.model
     this.contactModel = options.model;


    //create a ContactView for each contact
    // this.modelList = [];
    this.contactBox = [];

    this.contactData.forEach(function(contact){
      var card = new ContactView({
        contact: contact,
        template: this.contactTemplate
      });
      this.contactBox.push(card);
    }, this); // bind this

// -----------------// testing
// when model is added to collect, it will crate and add card to list
  this.listenTo(this.contatData, "add", this.addContact);
  //when model updates, re-render list of cards
  this.listenTo(this.model, 'update', this.render);


    this.input = {
      name: this.$('.new-contact input[name="name"]'),
      phone: this.$('.new-contact input[name="phone"]'),
      email: this.$('.new-contact input[name="email"]')
    };

  }, // end of initialize


  // http://backbonejs.org/#View-render
  render: function(){
    // clearing contacts each time. Might need to remove.
    // make sure list in the dorm is empty before start appending.
    this.listElement.empty();

    // console.log("contactbox", this.contactBox);
    // loop through data held in contact box.
    this.contactBox.forEach(function(card){
      card.render();

      // add card to our contact list.
      this.listElement.append(card.$el);
    }, this);
// // http://backbonejs.org/#View-render
//     this.$el.html(this.contactTemplate(this.contactModel.attributes));
    return this; // enable chained calls.
  },

  events:  {
    // right: name of function that insides page view.
    'click .btn-save' : 'createContact',
    'click .btn-cancel':'clearInput'

  },

  // turn contact data into a contact model, add it to our list of contacts?
  addContact: function(contact){

    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.contactBox.push(card);

  },

  // do we need edit feature?

  createContact: function(event) {
    event.preventDefault();
    console.log("btn save has been clicked.");
    // console.log("createContact");
    //get input data from the form. and turn it into contact.
    // this.model.add(contact);
    // var contact = this.getInput();
    // var contact = new Contact(this.getInput()); // working version
    // var contact = this.getInput();
    // add contact to collection.
    var contact = new Contact(this.getInput());
    this.clearInput();
  },
// necessary for createContact to complete its action
  getInput: function(event) {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    console.log("contact -->", contact); // not displaying.
    return contact;
  },// end getInput
//
// set the incoming input??
  setInput: function(contact) {
    this.input.name.val(contact.get('name'));
    this.input.email.val(contact.get('email'));
    this.input.phone.val(contact.get('name'));


  },

  // clear input function
  clearInput: function(event) {
    // console.log("clear Input called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }


});



export default RolodexView;
