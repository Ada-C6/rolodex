// wave 2 is almost complete, except the new instance in the Rolodex collection isn't showing on the app correctly. The input name is showing up in the console.log. And then it's being replaced with the default name in a duplication of the console.log--as well as showing the default on the app view--perplexing me.

import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
    initialize: function(options) {
        // Compile a template to be shared between the individual contacts
        this.contactTemplate = _.template($('#tmpl-contact-card').html());

        // Keep track of the <ul> element where the contact cards will live within
        this.listElement = this.$('#contact-cards'); // this.$() is telling Backbone to search within the element this RolodexView is responsible for (#application--ID, on the HTML) and look for '#contact-cards' within it.

        // We'll keep track of a list of contact models and a list of contact views.
        this.cardList = [];

        this.model.forEach(function(rawContact) {
            this.addContact(rawContact);
        }, this); // bind `this` to the initialize 'this' so it's available inside forEach

        // Keep track of our form input fields
        this.input = {
            name: this.$('.contact-form input[name="name"]'),
            email: this.$('.contact-form input[name="email"]'),
            phone: this.$('.contact-form input[name="phone"]')
        };

        // when a model is added to the collection, create a card for that model and add it to our list of cards
        this.listenTo(this.model, 'add', this.addContact);
        this.listenTo(this.model, 'update', this.render);
    },

    render: function() {
        // Make sure the list in the DOM is empty before we start appending items
        this.listElement.empty();

        // Loop through the data assigned to this view
        this.cardList.forEach(function(card) {
            card.render(); // cause the contact to render

            // Add that HTML to our contact list
            this.listElement.append(card.$el);
            // this.listElement.append(card.$el.html()); this is jquery only appending what was INSIDE of the div that was created--it creates a copy of the originial stuff. And then the click event handler doesn't work because it's only listening to the REAL stuff, not the copies. So we reverted to what's above.
        }, this);

        return this; // enable chained calls
    },

// TYPICALLY, DO THESE BACKBONE KEYWORDS HAVE AN ORDER? Initialize, Render, Events, then custom created methods at the end?
    events: {
        'click .btn-save': 'createContact',
        'click .btn-cancel': 'clearInput'
    },

    clearInput: function(event) {
        console.log("clearInput called!");
        this.input.name.val('');
        this.input.email.val('');
        this.input.phone.val('');
    },

    getInput: function() {
        var contact = {};
        var name = this.input.name.val();
        // console.log('is it this line... ' + this.input.name);
        // console.log('or this second line? ' + this.input.name.val());
        if (name) { // this will return true if name is not an empty string, undefined, etc.
            contact.name = name;
        }
        var email = this.input.email.val();
        if (email) {
            contact.email = email;
        }
        var phone = this.input.phone.val();
        if (phone) {
            contact.phone = phone;
        }
        return contact;
    },

    createContact: function(event) {
        event.preventDefault();

        // Get the input data from the form and turn it into a contact
        var rawContact = this.getInput();

        // add the contact to our collection
        this.model.add(rawContact);

        // Clear the input form so the user can add another contact
        this.clearInput();
    },

    // Turn a raw contact into a Contact model, add it to our list of contacts, create a card for it, and add that card to our list of cards.
    addContact: function(contact) { // this could have three arguments, we only have one: model, collection, options
        var card = new ContactView({ // create a card for the new contact
            // contact: contact, // WHAT IS THIS LINE? I'D LIKE TO UNDERSTAND IT'S PURPOSE. :)
            model: contact,
            template: this.contactTemplate
        });

        this.cardList.push(card); // add the card to our card list
    }

});

export default RolodexView;
