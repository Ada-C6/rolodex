import $ from 'jquery';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';
import Backbone from 'backbone';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($("#tmpl-contact-card").html());

    this.listElement = $("#contact-cards");

    this.contactCardsList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact); //creates Contact objects and throws them in contactCardsList
    }, this);

    // When a model is added to the collection, create a contactCard for that model and add it to contactCardsList
    this.listenTo(this.model, "add", this.addContact);

    // When the model/collection updates, re-render the list of cards
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.contactCardsList.forEach(function(contactCard) {
      contactCard.render();

      // Add that HTML to our task list
      this.listElement.append(contactCard.$el); //take the elements inside a contactCard and append them to listElement (which is "#contact-cards")
    }, this);

    return this; // enable chained calls
  },

  addContact: function(contact) {
   // Create a card for the new contact
   var contactCard = new ContactView({
     model: contact,
     template: this.contactTemplate
   });

   // Add the contactCard to our contactCard list
   this.contactCardsList.push(contactCard);
 }
});

export default RolodexView;
