import Backbone from 'backbone';
import _        from 'underscore';
import $        from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.contact = options.contact;
    this.template = options.template;
  }, //close initialize

  render: function() {
    var html = this.template({contact: this.model.attributes})
    this.$el.html(html);
    return this;
  }, //close render

  events: {
    'click .contact-card': 'displayContact',
    'click #contact-details': 'hideContact'
  }, //close events

  displayContact: function() {
    console.log('now youre in displayContact function');
    var theReturnThing = this.trigger("showMe", this.model);
    this.model.toggleShowing();

    // var contactDetails = $('#tmpl-contact-details')
    var contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

    console.log("attributes: " + this.model.attributes);
    var html = contactDetailsTemplate(this.model.attributes)//{contact: this.model.attributes.name})
    console.log("html: " + html);
    // debugger
    $('#contact-details').html(html);


  }, //close displayContact

  hideContact: function() {
    console.log("now you're trying to hide the contact");
    // this.model.toggleShowing();
  }

});

export default ContactView;
