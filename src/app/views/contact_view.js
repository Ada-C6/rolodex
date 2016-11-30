import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;

    // Listen to our model, and re-render whenever it changes.
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log("creating a human contact: " + this.model.attributes.name);
    console.log(this.model.attributes);
    var html = this.template(
      { contact: this.model.attributes }
    );
    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

export default ContactView;
