import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }
});

export default ApplicationView;
