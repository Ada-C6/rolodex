// This view handles logic for the rolodex collection (collection of contacts)
//similar to task-list-view
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';
import Backbone from 'backbone';

//building RolodexView with the options passed in app (includes el and Data)
const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    console.log("Inside RolodexView::::::" + JSON.stringify(options));
    console.log("Inside rolodex");
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element in the main section of index.html. Sames as saying this.el
    // this.listElement = this.$el;
    this.listElement = this.$('#contact-cards');

    this.cardList = [];
    // console.log("THESE ARE THE OPTIONS" + options);
    //   console.log("This is this" + this);
    //   console.log(">>> This is this.model:  " + this.model);
    this.model.forEach(function(contact) {
      console.log("happening in this.model.forEach, adding card for: " +contact.attributes.name);
      this.addContact(contact);
    }, this); // bind `this` so it's available inside forEach

    //when model is added to collection, it will create a card and add it to the list of cards
    this.listenTo(this.model, 'add', this.addContact);
    //when model updates, re-render list of cards
    this.listenTo(this.model, 'update', this.render);

    this.contactDetails = $('#contact-details');

    this.hideModal();

    this.contactDetailsTemplate =_.template($('#tmpl-contact-details').html());

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]'),
    };

  }, //end initialize

  render: function() {
   // Make sure the list in the DOM is empty before we start appending items
   this.listElement.empty();

   // Loop through the data assigned to this view
   this.cardList.forEach(function(card) {
     // Cause the task to render
     card.render();

     // Add that HTML to our task list
     this.listElement.append(card.$el);

   }, this);

   return this; // enable chained calls
 },

 events: {
  'click .btn-save': 'createContact',
  'click .btn-cancel': 'clearInput',
  'click': 'outsideClick'

},

  addContact: function(contact) {

    var card = new ContactView({
      // model: rawContact,
      model: contact,
      template: this.contactTemplate
    });

    this.listenTo(card, 'showDetails', this.showModal);
    // Add the card to our card list
    this.cardList.push(card);
  },

  editContact: function(card) {
    console.log('we are now in editContact for ' + card.model.get('name'));
    this.setInput(card.model);
    card.model.destroy();
  },

  createContact: function(event) {
    event.preventDefault();
    // Get the input data from the form and turn it into a task
    // var contact = new Contact(this.getInput());

    // Create a card for the task
    // this.addContact(contact);

    var contact = this.getInput();
    // Add the task to our Collection
    this.model.add(contact);

    this.clearInput();
  },
  //from form, passes information to create contact
  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    console.log(contact);

    return contact;
  },

  setInput: function(contact) {
  this.input.title.val(contact.get('name'));
  this.input.description.val(contact.get('phone'));
  this.input.description.val(contact.get('email'));
},

  clearInput: function(event) {
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  showModal: function(info) {
   console.log("showing modal for " + info.get("name"));

   // replace contents of modal with this info
   this.fillModal(info);

   // display the modal
   this.contactDetails.show();
 },

 fillModal: function(contact){

   // clear the modal out if there's something in there already.
   this.contactDetails.empty();

   // the data I'm passing to the template
   var specificDetails = this.contactDetailsTemplate({name: contact.attributes.name, email: contact.attributes.email, phone: contact.attributes.phone});

   // putting the html from this contact into the modal.
   this.contactDetails.append(specificDetails);

 },

 outsideClick: function(event){
   this.hideModal();
 },

 hideModal: function() {
   this.contactDetails.hide();
 }

});

export default RolodexView;
