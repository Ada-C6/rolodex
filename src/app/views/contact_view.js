import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';


const ContactView = Backbone.View.extend({
	initialize: function(options) {
	  // Compile a template to be shared between the individual tasks
	  this.contactTemplate = options.template;
	  console.log(this)
	  // console.log("conData",options.con)
	  // this.render();

	  // // Keep track of the <ul> element
	  this.listElement = this.$('.contact-card');

	  // // We'll keep track of a list of task models and a list
	  // // of task views.
	  // this.modelList = [];
	  options.model
	  this.cardList = [];

	  // // Process each contact card
	  // options.con.forEach(function(contact) {
	  //   this.addContact(contact);
	  // }, this); // bind `this` so it's available inside forEach

	  // Keep track of our form input fields
	  // this.input = {
	  //   name: this.$('.contact-card input[name="name"]'),
	  //   description: this.$('.contact-card input[name="email"]')
	  // };
  },
	addContact: function(rawContact) {
	//   // Create a contact card from this raw data
	//   var contact = new Contact(rawContact);

	//   // Add the contact  model to our list
	//   this.cardList.push(contact);

	//   // Create a card for the new task
	//   var card = new ContactView({
	//     model: contact,
	//     template: this.contactTemplate,
	//     // con: cardList
	//   });

	//   // Add the card to our card list
	//   this.cardList.push(card);
	 },
	render: function() {
	    
	    //could use .attributes but that's bad for some reason
	    // var html = this.contactTemplate({contact: this.model.attributes})
	    var html = this.contactTemplate({contact: this.model.toJSON()})
	    
	  	//I need to take the data from the model
	  	//insert it into the html 
	  	//in the spot where <%-name %> is in the underscore template
	  	this.$el.html(html);


    return this;
  } 
});

export default ContactView;
