// rolodex_view.js
// this view handles logic for the rolodex collection(collection of contacts)

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
// import contact from app/models/contact
import Contact from 'app/models/contact';
// import contact from app/models/contact_view
import ContactView from 'app/views/contact_view';


// build a rolodex_view with options passed in app (data)
const RolodexView = Backbone.View.extend({

  initialize: function(options){
/* mise en place: putting everything in place before building recipe. */
    this.contactData = options.contactData;
    // console.log("this contactData", this.contactData);
    console.log("options rolodex_view>", options);

    // Compile a template to be shared between the individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    //keep track of the <ul> element
    this.listElement = this.$('#contact-cards');
    // this.model = options.model; // neeed this? works without it.

    // keep track of data being put into form by user.
    this.input = {
      name: this.$('.new-contact input[name="name"]'),
      phone: this.$('.new-contact input[name="phone"]'),
      email: this.$('.new-contact input[name="email"]')

   };

    //
    // console.log("this is model: ",this.model);
    // model is div id application.

    //create a ContactView for each contact
    this.contactBox = [];

    this.model.forEach(function(contact){

      var contactView = new ContactView({
        model: contact,
        template: this.contactTemplate

      });
      this.contactBox.push(contactView);

    }, this); // bind this

    // Whenever the model changes, we should re-render
    // Since our model is a collection, a change means a task
    // was added to or removed from the list.
    this.listenTo(this.model, 'update', this.render);

    // If a model is removed from the collection, we need
    // to remove the corresponding view from our list of views.
    // Removing a model from the collection also triggers an
    // 'update' event, but the 'remove' event will always happen first.
    this.listenTo(this.model, 'remove', this.removeContact);
    // console.log("model", this.model);


  }, // end of initialize


  // http://backbonejs.org/#View-render
  render: function(){
    console.log("rendering that rolodex!");
    // clearing contacts each time. Might need to remove.
    // make sure list in the dorm is empty before start appending.
    this.listElement.empty();

    // console.log("contactbox", this.contactBox);
    // loop through data held in contact box.
    this.contactBox.forEach(function(contactView){
      // causec contact to render.
    contactView.render();
    // add that html to our rolodex?
    this.listElement.append(contactView.$el);
    }, this);
// // http://backbonejs.org/#View-render
    // this.$el.html(this.contactTemplate(this.contactModel.attributes));
    return this; // enable chained calls.
  },

  events:  {
    // right: name of function that insides page view.
    // Submit events are triggered by forms when the
    // submit button is clicked or the enter key pressed
    // 'submit .new-contact' : 'addContact',
    // testing // Ideas
    'click .btn-save' : 'addContact',

    // 'click .btn-save' : 'createContact',
    'click .btn-cancel':'clearInput'
    // added this here, should it be here or in other spot.??
    // 'click .contact-card': 'showDetails'

  },

  // turn contact data into a contact model, add it to our list of contacts?
  addContact: function(event){
    event.preventDefault();

    // Create a new model from the form data
    var contact = new Contact(this.getInput());

    // Create a view around the task and add it to our list
    var contactView = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.contactBox.push(contactView);
    // Add the task itself to the collection. This will trigger
    // the collection's change event, which will call render
    // for us (remember that we set this up in initialize).
    this.model.add(contact);
    this.clearInput();

    },

  // do we need edit feature?
    removeContact: function(model) {
      this.contactBox = this.contactBox.filter(function(contactView){
         // Return false (don't keep) if the view's model matches the removed model
        return contactView.model != model;
      });

    },

// necessary for createContact to complete its action?
// build a contact from data entered in the .new contact form
  getInput: function(event) {
    console.log("getting input from the form");
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    console.log("contact -->", contact); // working now. Though returns undefined when no info used. Will I need validation?

    return contact;
  },// end getInput
//
  // clear input function
  clearInput: function(event) {
    console.log("clear Input called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }


});



export default RolodexView;
