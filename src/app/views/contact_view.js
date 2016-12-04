import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
// import ContactView from 'app/views/contact_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
// only responsible for rendering the single contact details once popped up
var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.Template = _.template($('#tmpl-contact-card').html());
  },
  toggleContactView: function() {
    //make a function to toggle viewStatus based on click handling of the contact cards
    var viewStatus = !(this.get('contactDetails'));
    this.set('contactDetails', viewStatus);
  },
  render: function(){
    var card = {name: (this.model.attributes.name)};
    var html = this.Template(card);
    this.$el.append(html);
    this.delegateEvents();
}
});

export default ContactView;
