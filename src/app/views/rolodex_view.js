import Backbone from 'backbone';

const RolodexView = Backbone.View.extend({

  initialize: function(options) {
    // store the static contact
    this.contactData = options.contactData;
  //
    this.contactTemplate = _.template($("#tmpl-contact-card").html());
  //
    // keep track of the ul element that we will attach the cards to
    this.listElement = _.template($("#contact-cards").html());
  //
    this.render();

    this.cardList = [];

    this.model.contactList.forEach(function(contact) {
      this.addContact(contact);
    }, this);

  }
  //




});

export default RolodexView;
