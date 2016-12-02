import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactDetailView = Backbone.View.extend({

  initialize: function() {
    this.contactTemplate = _.template($('#tmpl-contact-details').html()); //script template for contact details
  },

  render: function() {
    this.$el.show(); //default hidden modal will show
    var html = this.contactTemplate(this.model.attributes); //pass model attributes to template
    this.$el.html(html); //creates div tag with above html elements inside
    // Enable chained calls
    return this;
  },

  events: {
    'click .edit': 'editDetail',
    'click .delete': 'deleteContact'
  },
  //send trigger to rolodexview!
  editDetail: function(event){
    console.log('whyyy');
    this.trigger("editMe", this.model);
    this.$el.hide();
  },
 //delete the model!!
  deleteContact: function(event){
    console.log('hi');
    this.model.destroy();
    this.$el.hide();
  }

});

export default ContactDetailView;
