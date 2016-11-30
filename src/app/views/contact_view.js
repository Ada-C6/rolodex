import Backbone from 'backbone';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.cardTemplate = _.template($('#tmpl-contact-details').html());

  },

  render: function() {
    console.log(this.model.attributes);
    var html = this.cardTemplate({contact: this.model.attributes});
    $(this.el).html(html);
    this.delegateEvents();
    return this;
  }

});

export default ContactView;
