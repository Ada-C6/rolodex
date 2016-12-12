import $ from 'jquery';
import Backbone from 'backbone';
import ContactDetailsView from 'app/views/contact_details_view';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    // reconnect all Event Handlers
    this.delegateEvents();

    var html = this.template(this.model.toJSON());

    this.$el.html(html);

    return this;
  },

  events: {
    'click': "showThisContactDetails",
  },

  showThisContactDetails: function(event) {
    event.stopPropagation();
    var contactDetailsView = new ContactDetailsView({
      model: this.model,
    });

    contactDetailsView.render();
    contactDetailsView.show();
  },
});

export default ContactView;
