import $ from 'jquery';
import Backbone from 'backbone';
import RolodexView from 'app/views/rolodex_view'

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.htmlElement = this.$el;
  },

  render: function() {
    var roloView = new RolodexView( {
      el: '#contact-cards',
      model: this.model.rolodex
    });

    roloView.render();
    // this.model.rolodex.render();
    // console.log(" uhh wat????" + roloView)
    return this;
  },

  events: {
    "click body": "hideDetailsBox"
  },

  hideDetailsBox: function() {
    console.log(">> box should hide!")
    $("#contact-details").hide();
  }
});

export default ApplicationView;
