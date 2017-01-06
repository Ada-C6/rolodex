import _ from 'underscore';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template(Backbone.$('#tmpl-contact-card').html());
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

export default ContactView;
