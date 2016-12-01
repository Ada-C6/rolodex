import $ from 'jquery';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.name = options.model.attributes.name;
    // console.log('options: ' + options.template);
    this.template = options.template;
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);
    // console.log(html);
    // console.log(this.model.attributes);

    // // Re-attach DOM event listeners to our new HTML
    // this.delegateEvents`();

    // Enable chained calls
    // console.log(this);
    $('#contact-details').hide();
    return this;
  }


});

export default ContactView;
