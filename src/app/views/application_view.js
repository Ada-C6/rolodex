import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    //create object which holds selectors for specific inputs in index.html
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

  },

  render: function() {
    //render RolodexView and pass in collection of models made in app.js
    var rolodexView = new RolodexView({
      model: this.model,
      input: this.input,
      el: $('main')
    });
    rolodexView.render();

    return this;
  },

  events: {
    'click .btn-save': 'saveInput',
    'click .btn-cancel': 'clearInput',
  },

  clearInput: function(event) {
    $('input').val('');//clear all values in any input tags
  },

  saveInput: function(event) {

    // event.preventDefault(); <---I had this here before, but I guess it isn't needed since inputs are not in a form, and therefore the page won't refresh?

    var contact = new Contact({ //create new instance in model of contact passing in values in input fields.
      name: this.input.name.val(),
      phone: this.input.phone.val(),
      email: this.input.email.val()
    });

    this.model.add(contact); //make an add call which model will listenTo and run addContact in rolodexview

    this.clearInput(); //clear input fields

  },

});

export default ApplicationView;
