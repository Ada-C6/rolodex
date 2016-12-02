import Backbone from 'backbone';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import $ from 'jquery';

const RolodexView = Backbone.View.extend({
  initialize: function(){
    //Sets the template to pass to the ContactView
    this.template = _.template($('#tmpl-contact-card').html());

    //Sets the element that all the contact cards are put into
    this.element = this.$('#contact-cards');

    //Sets the template & element for the modal
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.detailsElement = $('#contact-details');

    //Gets the inputs from the contact form
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    };

    //Initializes an array to put the ContactViews
    this.contactList = [];

    //Goes through the Rolodex collection, makes a ContactView for each Contact, and pushes that into the contactList array
    this.model.forEach(function(contact){
      var card = new ContactView({model: contact, template: this.template});
      this.contactList.push(card);
    }, this);

    //Listens for if the Rolodex collection is added to or updated
    this.listenTo(this.model, "add", this.addContact);
    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    //Empties the contact cards ul because items are appended each time (don't want repeats)
    this.element.empty();

    //Goes through the array of ContactViews, renders them, and appends them to the contact cards ul. Also listens for if a ContactView broadcasts that a modal should be opened with that view's info
    this.contactList.forEach(function(card){
      card.render();
      this.listenTo(card, "showThis", this.showCard);
      this.element.append(card.$el);
    }, this);

    return this;
  },
  events: {
    //Events for the form (cancel & save) and hiding the modal
    'click .btn-cancel': 'clearForm',
    'click .btn-save': 'createContact',
    // 'click .btn-edit': 'editDetails',
    'click .popup': 'hideDetails'
  },
  clearForm: function(){
    //Clears the form after it's submitted or if the user presses clear
    this.input.name.val("");
    this.input.phone.val("");
    this.input.email.val("");
  },
  createContact: function(e){
    //Prevents the default action for submit
    e.preventDefault();

    //Creates Contact with the input values
    var newContact = new Contact({name: this.input.name.val(), phone: this.input.phone.val(), email: this.input.email.val()});

    //Adds the Contact to the Rolodex collection
    this.model.add(newContact);

    //Clears the form
    this.clearForm();
  },
  addContact: function(contact){
    //Creates a ContactView for a new Contact and adds it to the array for appending in the contact cards ul (this is called in initialize)
    var newContactView = new ContactView({model: contact, template: this.template});
    this.contactList.push(newContactView);
  },
  hideDetails: function(e){
    //Sets the container element for the modal
    var container = $('#contact-details');

    //Goes through a bunch of if statements to make sure the user is clicking outside the modal to close it. Also removes the class used in the event so that the event doesn't always fire.
    if (!container.is(e.target) && container.has(e.target).length === 0 && !$(e.target).is('.contact-card') && !$(e.target).is('.contact-card h4')) {
      $('#contact-details').hide();
      $('#application').removeClass('popup');
    }
  },
  showCard: function(contactModel){
    //Creates the HTML with the detailsTemplate and the modal info
    var detailsHTML = this.detailsTemplate({name: contactModel.get("name"), email: contactModel.get("email"), phone: contactModel.get("phone")});

    //Sets the element that will be displayed to the modal HTML
    this.detailsElement.html(detailsHTML);

    //Shows the element (now with the modal HTML)
    $('#contact-details').show();

    //Adds a class that is used in the above event to close the modal (aka gives a brand new target that it only there to hit if the modal is showing)
    $('#application').addClass('popup');
  }
});

export default RolodexView;
