import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
// only responsible for rendering the single contact details once popped up; renders the contacts

var ContactView = Backbone.View.extend({
  initialize: function(options) {

    this.contactTemplate = _.template($('#tmpl-contact-details').html());
    this.details = ($('#contact-details').html());
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());
  },

  toggleContactView: function() {
    //make a function to toggle viewStatus based on click handling of the contact cards
    var viewStatus = !(this.get('contactDetails'));
    this.set('contactDetails', viewStatus);
  },
  render: function(){
    var card = {name: (this.model.attributes.name)};
    var html = this.rolodexTemplate(card);
    this.$el.append(html);
    this.delegateEvents();
}
});

export default ContactView;
