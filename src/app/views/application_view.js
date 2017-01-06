import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    const card = new ContactView({
      model: this.model.contact,
    });
    this.$('#contact-cards').append(card.render().$el);
    return this;
  }
});

export default ApplicationView;
