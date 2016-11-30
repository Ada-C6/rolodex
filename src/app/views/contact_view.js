import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options){

  },
  render: function(){
    return this;
  },

  events:  {
    // right: name of function that insides page view.
    'click btn-save' : 'createContact',
    'click btn-cancel':'clearInput'

  },

  // clear input function
  clearInput: function(event) {
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  // create Contact function
  createContact: function() {
    event.preventDefault();
    //get input data from the form. and turn it into contact.

    var contact = this.getInput();


  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  }// end getInputl



});



export default ContactView;
