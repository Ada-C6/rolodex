import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.name = options.name
    this.template = options.template;
  },
  render: function(){
    var html = this.template({name: this.name});
    this.$el.html(html);
    return this;
  }
});

export default ContactView;
