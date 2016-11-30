import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },
  render: function() {
    console.log(this.model.attributes);
    console.log("This should be the name: " + this.model.get('name'));
    var html = this.template({name: this.model.get('name')});
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
