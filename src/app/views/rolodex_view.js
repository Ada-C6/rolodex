import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import Application from 'app/models/application';
import ApplicationView from 'app/views/rolodex_view';
import ContactView from 'app/views/rolodex_view';


//I will make the rolodex view responsible for compiling and rendering the whole list of contacts

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.rolodexTemplate = _.template($('#tmpl-contact-cards').html());
    this.listElement = this.$('.contact-cards');}
});


export default RolodexView;
