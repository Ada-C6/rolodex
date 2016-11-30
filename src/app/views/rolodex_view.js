import $ from 'jquery';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual contact cards
    this.contactTemplate = _.template($("#tmpl-contact-card").html());

    // Keep track of the <ul> element to append stuff to
    this.listElement = this.$el;

    // We'll keep track of a list of contact models and their views
    this.contactCardsList = [];

    // Process each contact from the collection model
    this.model.forEach(function(contact) {
      this.addContact(contact); //creates Contact objects and throws them in contactCardsList
    }, this);

    // Keep track of our form input fields (NOT THE VALUES INSIDE) - this is just telling us where the name value LIVES
    this.fieldFromNewContactForm = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    // When a model is added to the collection, create a contactCard for that model and add it to contactCardsList
    this.listenTo(this.model, "add", this.addContact);

    // When the model updates, re-render the list of cards
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.contactCardsList.forEach(function(contactCard) {
      contactCard.render();

      // Add that HTML to our task list
      this.listElement.append(contactCard.el); //take the elements inside a contactCard and append them to listElement (which is "#contact-cards")
    }, this);

    return this; // enable chained calls
  },

  events: {
    "click .btn-cancel": "clearInput",
    // "submit .btn-save": "createNewContact"
  },

  clearInput: function(event) {
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");
  },

  createNewContact: function(event) {
    // No post-form-submission refresh for you!
    event.preventDefault();

    // Get the input data from the form and turn it into a task
    var inputFormData = this.getInput();

    // Keep track of this task
    this.model.add(inputFormData)

    // Re-render the whole list, now including the new card
    this.render();

    // Clear the input form so the user can add another task
    this.clearInput();
  },

  // Build a contact from the data inside the fields specified in initialize
  getInput: function() {
    var contact = {
      name: this.fieldFromNewContactForm.name.val(),
      email: this.fieldFromNewContactForm.email.val(),
      phone: this.fieldFromNewContactForm.phone.val()
    };
    return contact;
  },

  // Turn a raw contact into a Contact model, add it to our list of tasks, create a card for it, and add that card to our list of cards.
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
