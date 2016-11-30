import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    console.log("Bueller?");
    this.render();
  },

  render: function() {
    return this;
  }
});

export default ApplicationView;
