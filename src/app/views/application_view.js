import Backbone from 'backbone';
import $ from 'jquery';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    // console.log("WE ARE RENDERING AN APPLICATION VIEW!")
    return this;
  },

  events: {
    'click .btn-cancel': 'clearInput',
    'click .btn-save': 'saveButton'
  }, //end of events

  clearInput: function(event) {
    event.preventDefault();
    console.log("clearing");
    $('input[name="name"]').val("");
    $('input[name="email"]').val("");
    $('input[name="phone"]').val("");

  }, // end of clear

  saveButton: function(event) {
    console.log("saving that")
  } // end of save

});

export default ApplicationView;
