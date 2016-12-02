import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    'click': 'detailsHandler'
  },

  detailsHandler: function(event) {
//    console.log("clicked on " + this.model.get('name'));
    event.stopPropagation();
    this.trigger('display', this);
  }

});

export default ContactView;
