import Backbone from 'backbone';
import $ from 'jquery';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';


//currently trying to get modal thing working.
//there is a bug when I try to show/hide the modal.
//things only respond to clicks after I add a new card, not when its just defaults
//this is because the el doesn't get set correctly until I add the new card and put
//them all into a collection

//another problem is that I can't get my modal box to show/hide correctly on clicks

const RolodexView = Backbone.View.extend({
	initialize: function(options) {
	    // Compile a template to be shared between the individual tasks
	    // console.log(options.template)
	    this.cardList=[];
	    // this.detailsList=[];

	    this.contactTemplate = options.template;

	    this.model=options.model;
	    this.listElement = this.$('#contact-cards');

	    this.model.forEach(function(contact) {
      		this.addContact(contact);
      		// this.addDetails(contact)
    	}, this)

	    

	    // console.log("$el:",this.$el)
	    this.input = {
     		name: this.$('.contact-form input[name="name"]'),
      		email: this.$('.contact-form input[name="email"]'),
      		phone: this.$('.contact-form input[name="phone"]')
    	};
    	
    	this.listenTo(this.model, "update", this.render);

    	this.listenTo(this.model, "add", this.addContact);

    	// this.listenTo(this.model, "add", this.addDetails);

  	},
  	render: function(){
  		this.listElement.empty();
  		this.delegateEvents();

  		this.cardList.forEach(function(card) {
     		 // Cause the contact to render
      		card.render();
      		console.log("it rendered")
      		console.log(card.el.innerHTML)
      		// Add that HTML to our rolodex
      		this.listElement.append(card.$el);
    	}, this);
    	console.log("card list",this.cardList)
    	return this;
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
    	event.stopPropagation();
    	this.input.name.val('');
    	this.input.email.val('');
    	this.input.phone.val('');
  	},

  	addContact: function(contact) {
    // Create a card for the new contact
	    var card = new ContactView({
	      model: contact,
	      template: this.contactTemplate,
	       // el: ".contact-details"
	    });


	    this.cardList.push(card);
	    console.log("cardList",this.cardList)
	    console.log("el:",card.el);

	},

	// addDetails: function(contact){
	// 	 var card = new ContactView({
	//       model: contact,
	//       template: this.detailsTemplate,
	//        //el: "#application"
	//     });
	//     this.detailsList.push(card);
	//     console.log("detailsList",this.detailsList);
	// },

	createContact: function(event) {
	    // Normally a form submission will refresh the page.
	    // Suppress that behavior.
	    event.stopPropagation();
	    event.preventDefault();
		console.log("This happened");
	    // Get the input data from the form and turn it into a contact
	    var contact = new Contact(this.getInput());
	    this.model.add(contact);
	    console.log("rolodex",this.model)

	    console.log("contact",contact);

	    // Create a card (view for the card)
	    this.addContact(contact);

	    // // Re-render the whole list, now including the new card
	    // this.render();

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
