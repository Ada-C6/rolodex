import Backbone from 'backbone';
import $ from 'jquery';
import ContactView from 'app/views/contact_view';



const RolodexView = Backbone.View.extend({
	initialize: function(options) {
	    // Compile a template to be shared between the individual tasks
	    console.log(options.template)
	    this.contactTemplate = options.template;

	    this.model=options.model;
	    this.listElement = this.$('#contact-cards');

	    // console.log("$el:",this.$el)
	    this.input = {
     		name: this.$('.contact-form input[name="name"]'),
      		email: this.$('.contact-form input[name="email"]'),
      		phone: this.$('.contact-form input[name="phone"]')
    	};
    	
    	this.listenTo(this.model, "update", this.render);

    	this.listenTo(this.model, "add", this.addTask);

  	},
  	render: function(){
  		this.listElement.empty();

  		this.model.each(function(contact){
  			var html = this.contactTemplate({contact: contact.toJSON()})
  			// console.log("the html:", contact)
  			$("#contact-cards").append(html);
  		},this);
  	},
  	getInput: function() {
		var contact = {
      		name: this.input.name.val(),
      		email: this.input.email.val(), 
      		phone: this.input.phone.val()
    	};
    	return contact;
	},
	clearInput: function(event) {
    	this.input.name.val('');
    	this.input.email.val('');
    	this.input.phone.val('');
  	},

  	addContact: function(contact) {
    // Create a card for the new task
	    var card = new ContactView({
	      model: contact,
	      template: this.contactTemplate
	    });
	},

	createContact: function(event) {
	    // Normally a form submission will refresh the page.
	    // Suppress that behavior.
	    
	    event.preventDefault();
		console.log("This happened");
	    // Get the input data from the form and turn it into a contact
	    var rawContact = this.getInput();
	    var contact = this.model.add(rawContact);

	    console.log("contact",contact);
	    console.log("rawContact", rawContact);

	    // Create a card
	    this.addContact(contact);

	    // Re-render the whole list, now including the new card
	    this.render();

	    // Clear the input form so the user can add another task
	    this.clearInput();
  	},

  	events: {
    	"click .btn-cancel": "clearInput",
   		// "submit .contact-form": "createContact"
   		"click .btn-save": "createContact",
  	}
});

export default RolodexView;
