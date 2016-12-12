// initially a copy of contact_view.js
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

// el: '#contact-cards'

var ContactListView = Backbone.View.extend({ // parent
  initialize: function(options) {
    // below: if we had done this.$, backbone this here will make sure we only look at THIS area for the id
    $('#contact-details').hide();
    this.template = _.template($('#tmpl-contact-card').html());

    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    // the function collection.add sends out events 'add' and 'update'
    this.listenTo(this.model, 'add', this.addContact); // rolodex model
    this.listenTo(this.model, 'update', this.render);

    //
    // this.listenTo(this.model, 'change', this.render);
  },
  //
  render: function() {
    // this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // WANT TO SEE IF THIS WILL LISTEN TO CONTACT VIEW CHANGES
      this.listenTo(this.contacts, 'saving', this.createContact);

      // Add that HTML to our task list
      this.$el.append(card.$el);
    }, this);


    return this;
  },
  addContact: function(contact) {
    // console.log("addContact called");
    // Create a card for the new task
    var card = new ContactView({
      model: contact,
      template: this.template
    });

    this.listenTo(card, 'show-details', this.showModal);

    // Add the card to our card list
    this.cardList.push(card);
  },
  showModal: function(contact) {
    $('#contact-details').empty();
    var template = _.template($('#tmpl-contact-details').html());
    // this.$el.append(contact.$el);
    var contact_details = {name: contact.attributes.name, email: contact.attributes.email, phone: contact.attributes.phone};
    var html = template(contact_details);

    $('#contact-details').append(html);

    console.log('show the modal');
    $('#contact-details').show();
  }

});
//
export default ContactListView;
