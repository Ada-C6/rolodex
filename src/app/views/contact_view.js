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
    // ?? this.$el.append(html);
  }
});
//
// var contactViewOne = new ContactView({ model: contactOne });

export default ContactView;
