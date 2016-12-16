import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jQuery';

// Question: What do I actually need to import?
import Contact from 'app/models/contact';

var ContactView = Backbone.View.extend({
  initialize: function(options) {

    this.cardTemplate = _.template($('#tmpl-contact-card').html());

  },

  render: function() {
    // console.log(this.model);
    var html = this.cardTemplate({name: this.model.get('name')});
    // console.log(html);
    $(this.el).html(html);
    // QUESTION: what is delegate events. It seems to be magic
    this.delegateEvents();
    // QUESTION: not sure what is being tiggered? how is this different than the tigger in triggerDisplayHandler
    this.trigger("displayHander");
    return this;
  },

  events: {
    "click": "triggerDisplayHandler"
  },

  triggerDisplayHandler: function(event){
    if ($("#contact-details").is(':visible')) {
      return;
    }

    console.log("triggerDisplayHandler called");

    this.trigger("displayHandler", this);
    // QUESTION
    // I am doing this because I don't want to bubble up to the application DOM when I click the card contact. I ONLY want to select the contact and then stop or else further in the code, the whole thing will go blank again and my work is pointless.
    event.stopPropagation();


    // $(this.el).html(html);
    // console.log($(this.el).html(html));
    // $(#"contact-details").append(html);
  }

});

export default ContactView;
