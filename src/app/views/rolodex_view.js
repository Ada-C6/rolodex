import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jQuery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.listElement = this.$('#contact-cards');
    this.modelList = [];
    this.cardList = [];

    this.model.forEach(function(raw) {
      var contactOptions = new ContactView({
        name: raw,
        template: this.contactTemplate
      });
      this.cardList.push(contactOptions);
    }, this);
    // For posting
    // this.input = {
    //   title: this.$('.new-task input[name="title"]'),
    //   description: this.$('.new-task input[name="description"]')
    // };
  },
  render: function(){
    this.cardList.forEach(function(card){
      card.render();
      this.listElement.append(card.$el);
    }, this);
    return this;
  }
});

export default RolodexView;
