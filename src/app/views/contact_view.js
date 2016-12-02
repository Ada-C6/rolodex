import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(template) {
    if (!template) {
      // Compile a Underscore template
      this.template = _.template($('#tmpl-contact-card').html());
    } else {
      this.template = template;
    }

    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    // reconnect all Event Handlers
    this.delegateEvents();

    var html = this.template(this.model.toJSON());

    this.$el.html(html);

    return this;
  },
});

export default ContactView;
