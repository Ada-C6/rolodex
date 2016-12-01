// initially a copy of contact_view.js
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


//
// // const ContactView = Backbone.View.extend({
// // });
var ContactListView = Backbone.View.extend({
  initialize: function(options) {
  this.template = _.template($('#tmpl-contact-card').html());

  this.modelList = [];
  this.cardList = [];

  options.contacts.forEach(function(rawData) {
    this.addContact(rawData);
  }, this);
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

      // Add that HTML to our task list
      this.$el.append(card.$el);
    }, this);


    return this;
  },
  addContact: function(rawData) {
    // Create a Task from this raw data
    var contact = new Contact(rawData);

    // Add the new task model to our list
    this.modelList.push(contact);

    // Create a card for the new task
    var card = new ContactView({
      model: contact,
      template: this.template
    });

    // Add the card to our card list
    this.cardList.push(card);
  },
//
//   events: {
//     'click .delete-button': 'deleteHandler'
//   },
//
//   deleteHandler: function() {
//     // Show a popup box asking the user for confirmation
//     if (window.confirm("Are you sure you want to delete this Contact?")) {
//       this.model.destroy(); // implicitly calls 'remove'
//       // Remove calls: 'remove' on the collection and 'update' on the collection
//       console.log('This contact is destroyed');
//     }
//   }
//
});
//
export default ContactListView;
