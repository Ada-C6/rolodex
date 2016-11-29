import Backbone from 'backbone';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import $ from 'jquery';

const RolodexView = Backbone.View.extend({
  initialize: function(){
    this.template = _.template($('#tmpl-contact-card').html());
    this.element = this.$('#contact-cards');

    this.contactList = [];

    this.model.forEach(function(contact){
      var card = new ContactView({model: contact, template: this.template});
      console.log("new contactview");

      this.contactList.push(card);
    }, this);
  },
  render: function(){
    this.element.empty();

    this.contactList.forEach(function(card){
      card.render();
      console.log("render contact");
      this.element.append(card.$el);
    }, this);

    return this;
  }
});

export default RolodexView;
