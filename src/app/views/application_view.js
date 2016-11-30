import $ from 'jquery';
import Backbone from 'backbone';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  },

  events: {
    "click #application": "hideDetailsBox"
  },

  hideDetailsBox: function(event) {
    console.log(">> box should hide!")
    $("#contact-details").hide();
  }
});

export default ApplicationView;
