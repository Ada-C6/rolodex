//  This view handles logic for a single contact
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.template = options.template;
  },

  render: function() {
    var html = this.template({contact:  this.model.attributes});
    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

export default ContactView;
