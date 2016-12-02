import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(){
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());//template provided in script tag in index.html
    this.cardList = [];//create empty array variable.

    //loop through collection of models and add contacts to cardList
    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.listenTo(this.model, "update", this.render);

    this.listenTo(this.model, "add", this.addContact);

  },

  render: function() {
    // $('#contact-cards').empty(); <----things were weird when I ran this. Still not sure why this is unneccessary. Is it because of the listenTo update above?
    //loops through cardList and appends each card to correct tag in index.html
    this.cardList.forEach(function(card) {
      card.render();

      $('#contact-cards').append(card.$el);//.$el adds the div tag since $el was not specified (see below)
    }, this);

    // Enable chained calls
    return this;
  },

  addContact: function(contact) {
    var card = new ContactView({
      // el: $('#contact-cards'), <---still unsure why when el was specified (and direct li objects were added to ul tag), .contact-card tags could not be clicked independently
      model: contact, //contacts created with each individual model passed through
      template: this.rolodexTemplate //pass through rolodex template
    });
    this.cardList.push(card); //add each contact view to cardlist matrix
  }

});

export default RolodexView;
