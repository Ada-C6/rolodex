import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import ModalView from 'app/views/modal_view';


const RolodexView = Backbone.View.extend({
	initialize: function(options) {
		//make a template
		this.contactTemplate = _.template($('#tmpl-contact-card').html());

// track my list element 
		this.listElement = this.$('#contact-cards');

// track my contact card views
		this.cardList = [];

		this.modalView = new ModalView({
			el: this.$('#contact-details'),
			model: null
		});

// process my contact cards
		this.model.forEach(function(contact) {
			this.addContact(contact);
			// this.listenTo(contact, 'cardPicked');

		}, this );

// take in new contacts
		this.input = {
			name: this.$('.contact-form input[name="name"]'),
			email: this.$('.contact-form input[name="email"]'),
			phone: this.$('.contact-form input[name="phone"]')
		};

// re-render the list when my rolodex/contact collection changes
		this.listenTo(this.model, 'update', this.render );
// when a model is removed from the collection, take their contact from the rolodex

	}, //initialize end



	events: { 
		'click .btn-save': 'createContact',
		'click .btn-cancel': 'clearInput',
	},  //events end



	render: function() {
		// make sure my list is empty before i render stuff
		this.listElement.empty();

// // loop through the array of contact cards
		this.cardList.forEach(function(card) {
			//show the card

			card.render();

			this.listElement.append(card.$el);
		}, this );


// // do it this way so you can chain calls to it
		return this;

	}, //render end



  addContact: function(contact) {
  	var card = new ContactView({
  	model: contact,
  	template: this.contactTemplate,
  });
  	this.listenTo(card, 'cardPicked', this.zoomHandler);;

  	// console.log(card);

  	this.cardList.push(card);
  }, //addContact end



  getInput: function() {

  	var contact = {
  		name: this.input.name.val(),
  		email: this.input.email.val(),
  		phone: this.input.phone.val()
  	};

  	return contact;
  }, //getInput end



  clearInput: function(event) {
  	this.input.name.val('');
  	this.input.email.val('');
  	this.input.phone.val('');
  }, //clearInput end



  createContact: function(event) {

  	event.preventDefault();

  	var contactInfo = this.getInput();

  	var contact = this.model.add(contactInfo);

  	this.addContact(contact);

  	this.render();

  	this.clearInput();
  }, //createContact end

  zoomHandler: function(card) {
  	this.modalView.model = card.model;
  	this.modalView.render().$el.show();
  }

});  //RolodexView end

export default RolodexView;
