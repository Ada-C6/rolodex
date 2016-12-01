import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jQuery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

import Rolodex from 'app/collections/rolodex';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.listElement = this.$('#contact-cards');
    // These are used when you add a card to the list.
    // this.modelList = [];
    // this list carries the list of cards that is displayed
    this.cardList = [];

    this.model.forEach(function(modelName) {

      // eventually : this.addTask(rawTask);

      var contactOptions = new ContactView({
        model: modelName,
        template: this.contactTemplate
      });
      this.cardList.push(contactOptions);
    }, this);

    // WHat is this and where does it go?
    // this.input = {
    //   name: this.$('.new-task input[name="title"]'),
    //   description: this.$('.new-task input[name="description"]')
    // };
  },
  render: function(){
    this.cardList.forEach(function(card){
      card.render();
      console.log(">>>>> Debugging with Dan: DPR: about to log card stuff");
      console.log(card);
      console.log(card.el);
      console.log(card.$el);
      this.listElement.append(card.$el);
    }, this);
    return this;
  }

});

export default RolodexView;
