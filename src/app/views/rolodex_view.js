import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';
import ContactDetailView from 'app/views/contact_detail_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options){
    this.input = options.input;

    this.cardList = [];//create empty array variable.

    //loop through collection of models and add contacts to cardList
    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.listenTo(this.model, "update", this.render);

    this.listenTo(this.model, "add", this.addContact);

    this.listenTo(this.model, "remove", this.removeContact);

  },

  render: function() {
    $('#contact-cards').empty();//empties every time rerendered; elements are bound in contact-vew
    // $('#contact-cards').empty(); <----things were weird when I ran this. Still not sure why this is unneccessary. Is it because of the listenTo update above?
    //loops through cardList and appends each card to correct tag in index.html
    this.cardList.forEach(function(card) {
      card.render();
      $('#contact-cards').append(card.$el);
    }, this);

    // Enable chained calls
    return this;
  },

  makeDetail: function(model){
    $('#contact-details').empty();
    var cardDetail = new ContactDetailView({
      model: model
    });
    cardDetail.render();
    this.listenTo(cardDetail, "editMe", this.editCard);
    $('#contact-details').append(cardDetail.$el);
    $('#contact-details').show();
  },

  editCard: function(cardModel) {
  console.log("Editing a card");

  this.input.name.val(cardModel.get("name"));
  this.input.email.val(cardModel.get("email"));
  this.input.phone.val(cardModel.get("phone"));
  this.model.remove(cardModel);
},

  addContact: function(contact) {
    var card = new ContactView({
      // el: $('#contact-cards'), <---still unsure why when el was specified (and direct li objects were added to ul tag), .contact-card tags could not be clicked independently
      model: contact, //contacts created with each individual model passed through
      input: this.input,
      collection: this.model
    });
    this.listenTo(card, "deetsplz", this.makeDetail);
    this.cardList.push(card); //add each contact view to cardlist matrix
  },

  removeContact: function(model, collection, options) {
    var filteredList = [];
    for(var i = 0; i < this.cardList.length; i++) {
      if(this.cardList[i].model == model) {
        console.log("Found the bugger!");
      } else {
        filteredList.push(this.cardList[i]);
      }
    }
    this.cardList = filteredList;
  }

});

export default RolodexView;
