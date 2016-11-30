import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // console.log('options: ' + options.model.attributes.name);
    this.template = _.template($('#tmpl-contact-card').html());
    this.name = options.model.attributes.name;
  },

  render: function() {
    console.log(this.model.attributes);
    console.log(this.template);
    var html = this.template({name: this.name});
    this.$el.html(html);
    console.log(html);

    // // Re-attach DOM event listeners to our new HTML
    // this.delegateEvents`();

    // Enable chained calls
    return this;
  }


});

export default ContactView;
