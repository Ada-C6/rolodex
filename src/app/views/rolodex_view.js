import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
// this will be like task-list_view

const RolodexView = Backbone.View.extend({

  initialize: function(options){
    // receipe prep. mise plase .
    //store the full list of contacts

    this.contactData = options.contactData;
    // console.log("this contactData", this.contactData);
    // console.log("options _>", options);

    // Compile a template to be shared between the individual tasks
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

    this.input = {
      name: this.$('.new-contact input[name="name"]'),
      phone: this.$('.new-contact input[name="phone"]'),
      email: this.$('.new-contact input[name="email"]')
    };

  }, // end of initialize


  // http://backbonejs.org/#View-render
  render: function(){
    // clearing contacts each time. Might need to remove.
    this.listElement.empty();

    // console.log("contactbox", this.contactBox);

    this.contactBox.forEach(function(card){
      card.render();


      this.listElement.append(card.$el);
    }, this);
// // http://backbonejs.org/#View-render
//     this.$el.html(this.contactTemplate(this.contactModel.attributes));
    return this;
  },

  // addContact: function(contact) {
  //
  // }

  events:  {
    // right: name of function that insides page view.
    'click btn-save' : 'createContact',
    'click btn-cancel':'clearInput'

  },

  cancelInput: function(event) {
    console.log("cancel inout");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  // clear input function
  clearInput: function(event) {
    // console.log("clear Input called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  // create Contact function
  createContact: function(event) {
    event.preventDefault();
    console.log("createContact");
    //get input data from the form. and turn it into contact.

    // var contact = this.getInput();
    var contact = new Contact(this.getInput());
    this.model.add(contact);
    this.clearInput();

    // add the dat
    // var card = new RolodexView({
    //   contact: contact,
    //   template: this.contactTemplate
    //
    // // });
    // this.cartList.push(card);

  },

  getInput: function(event) {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },// end getInputl

  addContact: function(contact){

    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.contactBox.push(card);

  }

});



export default RolodexView;
