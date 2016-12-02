import $ from 'jquery';
import Backbone from 'backbone';
import RolodexView from 'app/views/rolodex_view'

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.htmlElement = this.$el;

    // This is just telling us where the form values LIVE
    this.fieldFromNewContactForm = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };
  },

  render: function() {
    var roloView = new RolodexView( {
      el: '#contact-cards',
      model: this.model.rolodex
    });

    roloView.render();

    return this;
  },

  events: {
    "click": "hideDetailsBox",
    "click #contact-details": (e) => { e.stopPropagation() }, // Thanks, Jay

    "click .btn-cancel": "clearInput",
    "click .btn-save": "createNewContact"
  },

  hideDetailsBox: function(event) {
    $("#contact-details").hide();
  },

  clearInput: function(event) {
    this.fieldFromNewContactForm.name.val("");
    this.fieldFromNewContactForm.email.val("");
    this.fieldFromNewContactForm.phone.val("");
  },

  createNewContact: function(event) {
    console.log("createNewContact")
    // No post-form-submission refresh for you!
    event.preventDefault();
    // Get the input data from the form and turn it into a task
    var inputFormData = this.getInput();

    // Keep track of this task
    this.model.rolodex.add(inputFormData)

    // Re-render the whole list, now including the new card
    this.render();

    this.clearInput();
  },

  // Build a contact from the data inside the fields specified in initialize
  getInput: function() {
    var contact = {
      name: this.fieldFromNewContactForm.name.val(),
      email: this.fieldFromNewContactForm.email.val(),
      phone: this.fieldFromNewContactForm.phone.val()
    };
    return contact;
  },



});

export default ApplicationView;
