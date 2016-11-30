const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.render();
  },

  render: function() {
    return this;
  },

  events: {
    'click .btn-cancel': 'clearForm',
  },

  clearForm: function(event) {
    console.log("form cleared");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  getInput: function() {
    var contactInfo = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    };
    return contactInfo;
  },

});

export default ApplicationView;
