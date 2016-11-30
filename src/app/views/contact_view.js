import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    // console.log(this.template);

    // this.listenTo(this.model, "change", this.render); I think we only needed this for delete/complete
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    // console.log(html);
    this.$el.html(html);

    // When we add new html, reattach our DOM event listeners to the new html
    this.delegateEvents();
    // Enable chained calls
    return this;
  },

  events: {
    "click #contact-details": "contactDetailsHandler"
  },

  contactDetailsHandler: function(event) {
    console.log("And this is when the details popup should appear!");
  }

});

export default ContactView;
