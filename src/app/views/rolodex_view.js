import Backbone from 'backbone';
import $ from 'jquery';
import Contact from 'app/models/contact'

const RolodexView = Backbone.View.extend({
  initialize: function(incomingContacts) {
    console.log("You've created the RolodexView");
    console.log(incomingContacts);

    this.contacts = incomingContacts.contacts;
    this.template = incomingContacts.template;

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    };


  },
  render: function() {
    console.log("You are rendering the RolodexView");
    console.log(this);

    this.placement = $("#contact-cards");

    this.contacts.forEach(function(individualContact){
      console.log("You're in the RolodexView initialize one contact!");
      console.log(individualContact.attributes.name);
      console.log(this.template);


      var html = this.template({name: individualContact.attributes.name, email: individualContact.attributes.email, phone: individualContact.attributes.phone});

      this.placement.append(html);
    }, this);

    return this;
  },

  createContact: function(event) {
    event.preventDefault();
    console.log("trying to create a new contact!!");
    console.log("******************");
    console.log(this.input.name.val());

    this.contacts.push(this.getInput());

    this.placement.empty();
    this.render();
    this.clearInput();
  },

  events: {
    'click .btn-save' : 'createContact',
    'click .btn-cancel' : 'clearInput'
  },


  getInput: function() {
    var actualContactData = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };

    return actualContactData;
  },

  clearInput: function() {
    console.log("clearInput called");
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");
    console.log('Form area should now be clear');
  }


});

export default RolodexView;
