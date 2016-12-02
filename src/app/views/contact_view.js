import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    var html = this.template({name: this.model.get('name')});
    $(this.el).html(html);
    this.delegateEvents();
    // ?? this.$el.append(html);
  },

  events: {
    'click .contact-card': 'detailHandler'
  },

  detailHandler: function(event) {
    event.stopPropagation();

    console.log("detailHandler was called." + this.model.attributes.name);
    this.trigger('modal', this.model);
  }
});


export default ContactView;
