import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({

  initialize: function(options) {
    // Store a the full list of contacts
    this.modelList = [];

    // Compile a template to be shared between the individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // Create a ContactView for each task
    this.rolodex = [];
    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    // Keep track of our form input fields
    this.input = {
    name: this.$('.contact-form input[name="name"]'),
    email: this.$('.contact-form input[name="email"]'),
    phone: this.$('.contact-form input[name="phone"]')
  };

    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, "remove", this.removeContact);
    // this.listenTo(this.model, "show", this.showModal);
    // this.listenTo(this.model, "hide", this.hideModal);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.rolodex.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our contacts
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  },

   events: {
     'click #contact-details': 'hideModal',
     'click .btn-cancel': 'clearInput',
     'click .btn-save': 'createContact'
   },

 hideModal: function(event) {
   console.log("getting here!");
   // $(document).click(function(event) {
   //     if(!$(event.target).closest('#contact-details').length) {
   if($('#contact-details').is(":visible")) {
       $('#contact-details').hide();
    }
   //     }
  //  $('#contact-details').hide();
 },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.rolodex.push(card);
  },
  removeContact: function(model) {
    var filteredList = [];
    for(var i=0; i<this.rolodex.length; i++) {
      if(this.rolodex[i].model == model) {
        console.log("found it!");
      }
      else {
        filteredList.push(this.rolodex[i]);
      }
    }
    this.rolodex = filteredList;
  },

  clearInput: function(event) {
   this.input.name.val('');
   this.input.email.val('');
   this.input.phone.val('');
  },
  createContact: function(event) {
   // Normally a form submission will refresh the page.
   // Suppress that behavior.
   event.preventDefault();

   // Get the input data from the form and turn it into a contact
   var contact = new Contact(this.getInput());

   // add contact to the model but don't need to add to view.
   this.model.add(contact);

   // Clear the input form so the user can add another contact
   this.clearInput();
  }
});

export default RolodexView;
