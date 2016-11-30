import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';


const ApplicationView = Backbone.View.extend({

  initialize: function() {
    this.rolodexView = new RolodexView({
      el: '#contact-cards',
      model: this.model.contactList
      });
  },

  render: function() {
    this.rolodexView.render();
    this.el.append(this.rolodexView.el);

    return this;
  }
});

export default ApplicationView;
