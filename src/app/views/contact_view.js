import Backbone from 'backbone';
import Contact from 'app/models/contact';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.contact = options.contact;
    this.template = options.template;
  },

  render: function() {
    this.delegateEvents();
    var html = this.template({name: this.model.get("name")});
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
    'click': 'showDetail'
  },

  showDetail: function(){
    this.trigger( 'contactInfo', this.model);
    event.stopPropagation();
  }
});

export default ContactView;
