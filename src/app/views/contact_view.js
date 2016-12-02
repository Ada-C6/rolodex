import Backbone from 'backbone';
import Contact from 'app/models/contact';
import $ from 'jquery';
import _ from 'underscore';


const ContactView = Backbone.View.extend({
  initialize: function(options){
    //Takes the template passed as a parameter (from RolodexView) and sets as this.template
    this.template = options.template;

    //Listens for changes to the model
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    //Reattaches events
    this.delegateEvents();

    //Creating the contact HTML with the template passed from RolodexView
    var contactHTML = this.template({name: this.model.toJSON().name});

    //Taking this view's el and setting it's HTML to the contact HTML
    this.$el.html(contactHTML);
    return this;
  },
  events: {
    //Event for clicking a card to start chain for opening modal
    'click .contact-card': 'showDetails'
  },
  showDetails: function(e){
    //Broadcasts "showThis" for RolodexView to know to call its specific function, also passing the model so RolodexView has the right info
    this.trigger("showThis", this.model);
  }
});

export default ContactView;
