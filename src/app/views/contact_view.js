import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    var html = this.template(this.model.attributes);
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
    'click': 'showDetailsHandler',
  },

  showDetailsHandler: function(){
    this.trigger('showDetails', this);
    return false;
  }
});

export default ContactView;
