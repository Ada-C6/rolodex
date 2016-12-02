import Backbone from 'backbone';
import $ from 'jquery';
import Contact from 'app/models/contact';

const ApplicationView = Backbone.View.extend({


  initialize: function() {
    // this.render();
    this.input = {
      name: this.$('input[name="name"]'),
      email: this.$('input[name="email"]'),
      phone: this.$('input[name="phone"]')
    };
    // this.listenTo(this.model, "update", this.render)
    // this.listenTo(this.model, "add", this.addContact)
  },

  render: function() {
    // console.log("WE ARE RENDERING AN APPLICATION VIEW!")
    return this;
  },

  events: {
    'click .btn-cancel': 'clearInput',
    'click .btn-save': 'saveButton',
    'click ': 'hideModal',
    'click #contact-details': 'dontHideModal'
  }, //end of events

  hideModal: function() {
    $('#contact-details').hide()
  },

  dontHideModal: function(event) {
    // alert("you clicked it!");
    event.stopPropagation();
  },

  clearInput: function(event) {
    console.log("clearing");
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");

  }, // end of clear

  saveButton: function(event) {
    event.preventDefault();
    var contact = this.getInput();
    if (contact.name == "" || contact.email == "" || contact.phone == "") {
      alert("please enter all contact details to save.")
    } else {
      console.log("saving", contact.name);
      this.model.add(contact);
      this.clearInput();
    }
  }, // end of save

  getInput: function(event) {
    var contact = {
        name: this.input.name.val(),
        email: this.input.email.val(),
        phone: this.input.phone.val()
      };
    return contact;
  }
});

export default ApplicationView;
