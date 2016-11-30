import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // If model is passed in, don't need to keep track of it in initializer
    this.template = options.template;

    // Listen to our model, and re-render whenever it changes.
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);

    this.delegateEvents();

    // Enable chained calls
    return this;
  }
});

export default ContactView;
