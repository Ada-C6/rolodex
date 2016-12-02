import Backbone from 'backbone';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';
import $ from 'jquery';

// rolodex_view == contact_list_view ~= task_list_view

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // this template is shared between all contacts.
    this.template = _.template($('#tmpl-contact-card').html());
    // Keep track of the <ul> element
    this.listElement = $('#contact-cards');
    // Create a ContactView for each contact & store them here
    this.cardList = [];

    this.model.forEach(function(contact) {
      // console.log("in the forEach loop", contact.attributes.name)
      this.addContact(contact);
      }, this); // bind `this` so it's available inside forEach

    this.listenTo(this.model, "remove", this.removeContact);
    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact)
  }, //end of initialize

  render: function(){
    // console.log('we are rendering')
    // console.log(this.cardList)
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      card.render();
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  }, // end of render

  addContact: function(contact) {
    // console.log("we are in the addContact function and this is the template:",this.template);
    var contactModel = new Contact(contact.attributes);
    var card = new ContactView({
      model: contactModel,
      template: this.template
    });
    this.cardList.push(card);
  }, // end of addContact

  removeContact: function(model) {
    // there is no convenient method to take out one element from an array.
    // this is kinda hacky

    var filteredList = [];
    for (var i = 0; i < this.cardList.length; i++) {
      if (this.cardList[i].model == model) {
        alert('deleted it!')
        console.log('found the bugger!');
      } else {
        // alert("deleted it!")
        filteredList.push(this.cardList[i]);
      }
    }
    this.cardList = filteredList;
  } // end of removeContact


});

export default RolodexView;
