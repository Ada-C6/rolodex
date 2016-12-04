import Backbone from 'backbone';

var ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }
});

export default ApplicationView;
