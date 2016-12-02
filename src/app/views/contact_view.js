import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jQuery';

// Question: What do I actually need to import?
import Contact from 'app/models/contact';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.cardTemplate = _.template($('#tmpl-contact-card').html());
    this.contactTemplate = _.template($('#tmpl-contact-details').html());
  },

  render: function() {
    // console.log(this.model);
    var html = this.cardTemplate({name: this.model.get('name')});
    // console.log(html);
    $(this.el).html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    "click": "triggerDisplayHandler"
  },

  triggerDisplayHandler: function(event){

    console.log("triggerDisplayHandler called");

    this.trigger("displayHander");

    // $(this.el).html(html);
    // console.log($(this.el).html(html));
    // $(#"contact-details").append(html);
  }

});

export default ContactView;
