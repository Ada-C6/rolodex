import Backbone from 'backbone';
import $ from 'jquery';
import Contact from 'app/models/contact';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.input = {
      name: this.$('input[name="name"]'),
      email: this.$('input[name="email"]'),
      phone: this.$('input[name="phone"]')
    };
  },

  render: function() {
    // console.log("WE ARE RENDERING AN APPLICATION VIEW!")
    return this;
  },

  events: {
    'click .btn-cancel': 'clearInput',
    'click .btn-save': 'saveButton',
    'click ': 'hideModal', // this hides the modal if you click anywhere
    'click #contact-details': 'dontHideModal' // EXCEPT if the modal is already there and you click on it again.
  }, //end of events

  hideModal: function() {
    $('#contact-details').hide() // hide!
  },

  dontHideModal: function(event) {
    // alert("you clicked it!");
    event.stopPropagation(); // stopPropagation stops the modal from hiding in this case.
  },

  clearInput: function(event) {
    console.log("clearing");
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");

  }, // end of clear

  saveButton: function(event) {
    event.preventDefault(); // changed this to a form so i could hit enter to submit. thus we need to prevent the default
    var contact = this.getInput();

    // error handling for blank input fields
    if (contact.name == "" || contact.email == "" || contact.phone == "") {
      alert("please enter all contact details to save.")
    } else {
      console.log("saving", contact.name);
      this.model.add(contact);
      this.clearInput();
    }
  }, // end of save

  getInput: function(event) {
    // get input.
    var contact = {
        name: this.input.name.val(),
        email: this.input.email.val(),
        phone: this.input.phone.val()
      };
    return contact;
  }
});

export default ApplicationView;
