//contact_view.js
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    //store the full list of contacts
    this.contactData = options.contactData;

    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    // not sure if this is how its done.
    this.listElement = this.$('#contact-list');

    // model/template options.model
     this.contactModel = options.model;


    //create a ContactView for each contact
    // this.modelList = [];
    this.cardList = [];

  }, // end of initialize

  // http://backbonejs.org/#View-render
  render: function(){
    this.$el.html(this.contactTemplate(this.contactModel.attributes));
    return this;
  },

  events:  {
    // right: name of function that insides page view.
    'click btn-save' : 'createContact',
    'click btn-cancel':'clearInput'

  },

  // clear input function
  clearInput: function(event) {
    console.log("clear Input called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  // create Contact function
  createContact: function() {
    event.preventDefault();
    //get input data from the form. and turn it into contact.

    var contact = this.getInput();

    // add the dat
    var card = new RolodexView({
      contact: contact,
      template: this.contactTemplate

    });
    this.cartList.push(card);

  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },// end getInputl

});



export default ContactView;
