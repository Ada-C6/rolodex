import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
    initialize: function(options) {
        // Compile a template to be shared between the individual contacts
        this.contactTemplate = _.template($('#tmpl-contact-card').html());

// THIS SEEMS TO BE THE MAIN PIECE I WAS MISSING EARLIER... WHY IS IT NEEDED HERE AND IT WASN'T NEEDED ONCE WE HAD OUR COLLECTION SET-UP IN OUR LIVE CODE?
        // this.data = options.data;

        // Keep track of the <ul> element where the contact cards will live within
        this.listElement = this.$('#contact-cards'); // this.$() is telling Backbone to search within the element this TaskListView is responsible for (#application--ID, on the HTML) and look for '.task-list' within it.

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
    },

    render: function() {
        // Make sure the list in the DOM is empty before we start appending items
        this.listElement.empty();

        // Loop through the data assigned to this view
        this.cardList.forEach(function(card) {
            card.render(); // cause the contact to render

            // Add that HTML to our contact list
            this.listElement.append(card.$el);
            // this.listElement.append(card.$el.html()); this is jquery only appending what was INSIDE of the div that was created--it creates a copy of the originial stuff. And then the click event handler doesn't work because it's only listening to the REAL stuff, not the copies. So we reverted to our original text from yesterday.
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
