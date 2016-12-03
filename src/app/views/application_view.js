// This view handles logic for the overall application
import Backbone from 'backbone';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
// import Rolodex from 'app/collections/rolodex';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  },

  events: {'click': 'toggleDetails'},

  toggleDetails: function(e) {
    $(e.currentTarget).toggle('#contact-details');
  },
});

export default ApplicationView;
