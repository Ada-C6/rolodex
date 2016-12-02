import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import RolodexView from 'app/views/rolodex_view';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // If model is passed in, don't need to keep track of it in initializer
    this.template = options.template;
    // this.template = options.template;

    // Listen to our model, and re-render whenever it changes.
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template(this.model.attributes);
    this.$el.html(html);

    this.delegateEvents();

    // Enable chained calls
    return this;
  },

  events: {
    'click': 'modalHandler'
  },

  modalHandler: function() {
    this.trigger('showModal', this);
    return false; // Won't let it be hidden later without setting this to false - without this, it will be hidden immediately
  }
});

export default ContactView;
