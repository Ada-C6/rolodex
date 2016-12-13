import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.template = options.template;

  this.listenTo(this.model, 'change', this.render);
},

render: function() {
  console.log(this.model.attributes.name);
  var html = this.template({contact: this.model.attributes});
  this.$el.html(html);

  return this;
},
});

export default ContactView;
