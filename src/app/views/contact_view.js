import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    _.bindAll(this, 'render', 'toggleContactView');
    this.listenTo(this.model, 'show-details', this.showModal);
    this.contactTemplate = _.template($('#tmpl-contact-details').html());
    this.details = ($('#contact-details'));
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());
  },

  toggleContactView: function(event) {
    this.details.empty();
    this.singleItem=  $(this.contactTemplate(this.model.attributes));
    this.singleItem.appendTo(this.details);
    this.details.show();
  },

  render: function(){
    this.details.hide();
    var card = {name: (this.model.attributes.name)};
    var html = this.rolodexTemplate(card);
    this.CardItem = $(html);
    this.CardItem.appendTo(this.$el);
    this.CardItem.on('click', this.toggleContactView);
    this.delegateEvents();
  },
});

export default ContactView;
