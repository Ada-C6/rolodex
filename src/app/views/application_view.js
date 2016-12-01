import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }
});

export default ApplicationView;
