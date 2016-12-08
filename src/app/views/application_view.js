// applicationview is holding it's view plus rolodex & the new form

// 11.30.16 may not need these but...
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }
});

export default ApplicationView;
