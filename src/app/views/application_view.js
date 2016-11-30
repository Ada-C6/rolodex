import $ from 'jquery';
import Backbone from 'backbone';
import RolodexView from 'app/views/rolodex_view'

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.htmlElement = this.$el;
    // $("body").on("click", function() {
    //   console.log(">> box should hide!")
    //   $("#contact-details").hide();
    // })
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
    "click ": "hideDetailsBox"
  },

  hideDetailsBox: function(event) {
    console.log(">> box should hide!")
    debugger
    if (true/* ! event triggered on #contact-details*/) {
      $("#contact-details").hide();
    }
  }

  // remove: function() {
  //   $("body").off("click")
  // }

});

export default ApplicationView;
