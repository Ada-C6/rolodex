import $ from 'jquery';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';

import Rolodex from 'app/collections/rolodex';

var contactData = [
    {
        name: 'hello world',
        email: 'testing@world.com',
        phone: 2345678901
    },
    {
        name: 'second...',
        email: 'testing2@world.com',
        phone: 3456789012
    }
];

const ApplicationView = Backbone.View.extend({
    initialize: function() {
        var rolodex = new Rolodex(contactData);

        var options = {
            el: $('#rolodex-zone'),
            model: rolodex
        };
        this.application = new RolodexView(options);

        // Keep track of our form input fields
        this.input = {
            name: this.$('.contact-form input[name="name"]'),
            email: this.$('.contact-form input[name="email"]'),
            phone: this.$('.contact-form input[name="phone"]')
        };

        // this.listenTo(this.model, 'add', this.addContact);
        // this.listenTo(this.model, 'update', this.render);
    },

    render: function() { // render a new instance of RolodexView


        this.application.render();

        return this;
    },

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
        this.application.model.add(rawContact);

        // Clear the input form so the user can add another contact
        this.clearInput();
    }

});

export default ApplicationView;
