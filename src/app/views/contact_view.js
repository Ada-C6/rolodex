import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.model = options.contact;
    this.contactTemplate = options.contactTemplate;
    this.modalTemplate = options.modalTemplate;
    // this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.delegateEvents();
    var html = this.contactTemplate(this.model.toJSON());
    this.$el.html(html);

    return this;
  },

  events: {
    'click .contact-card': 'showModal'
  },

  showModal: function() {
    console.log("showModal");
    var html = this.modalTemplate(this.model.toJSON());
    $('#contact-details').html(html);
    $('#modal-container').show();
    $('#modal-container-button').show();
  }

}); // end ContactView

export default ContactView;
