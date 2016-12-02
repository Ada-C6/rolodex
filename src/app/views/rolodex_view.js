import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
    initialize: function(options) {

        this.contactDetailSection = this.$('#contact-details');

        this.contactDetailSection.hide();

        this.detailsTemplate = _.template($('#tmpl-contact-details').html());

        // Compile a template to be shared between the individual contacts
        this.contactTemplate = _.template($('#tmpl-contact-card').html());

        // Keep track of the <ul> element where the contact cards will live within
        this.listElement = this.$('#contact-cards'); // this.$() is telling Backbone to search within the element this RolodexView is responsible for (#application--ID, on the HTML) and look for '#contact-cards' within it.

        // We'll keep track of a list of contact models and a list of contact views.
        this.cardList = [];

        this.model.forEach(function(rawContact) {
            this.addContact(rawContact);
        }, this); // bind `this` to the initialize 'this' so it's available inside forEach

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

    // Turn a raw contact into a Contact model, add it to our list of contacts, create a card for it, and add that card to our list of cards.
    addContact: function(contact) { // this could have three arguments, we only have one: model, collection, options
        var card = new ContactView({ // create a card for the new contact
            model: contact,
            template: this.contactTemplate
        });

        this.cardList.push(card); // add the card to our card list

        this.listenTo(card, 'show', this.showDetails); // this event handler listens to each contact card as soon as it's created, so that if a click happens on the card, the showDetails function will trigger.
    },

    showDetails: function(contact) {
        console.log('inside showDetails function for contact ' + contact.get('name'));

        var html = this.detailsTemplate({contact: contact.attributes});

        this.contactDetailSection.html(html);

        this.contactDetailSection.show();
    }

});

export default RolodexView;
