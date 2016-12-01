import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';
const RolodexView = Backbone.View.extend({
  initialize: function(options){
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());
    this.element = this.$('#contact-cards');

    this.nameList = [];

    this.model.forEach(function(names){
      this.addName(names);
    },this);
  },
  addName: function(name){
    var carta = new ContactView({
      model: contact,
      template: this.rolodexTemplate
    });
    this.nameList.push(carta);
  }
});

export default RolodexView;
