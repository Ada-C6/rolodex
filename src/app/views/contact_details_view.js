import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

const ContactDetailsView = Backbone.View.extend({
    initialize: function(args){
      this.template = _.template($('#tmpl-contact-details').html());
      this.dialogElement = $('#contact-details');
    },
    render: function() {
      // reconnect all Event Handlers
      this.delegateEvents();

      var html = this.template(this.model.toJSON());

      this.$el.html(html);

      this.dialogElement.empty();
      this.dialogElement.append(this.$el);
      return this;
    },

    show: function() {
      this.dialogElement.show();
    },
 });

 export default ContactDetailsView;
