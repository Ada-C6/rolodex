import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import Contact from 'app/models/contact';

//
// // const ContactView = Backbone.View.extend({
// // });
// // ALL COPIED FROM TASKS
var ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.template = _.template($('#tmpl-contact-card').html());

  // this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    // var html = this.template({contact: this.model.attributes});
    // var html = this.template({name: this.model[0].name});
    // console.log('<<<' + 'Render contact view checkpoint');
    // this.$el.append(html);
    // this.$el.html(html);
//     // Re-attach DOM event listeners to our new HTML
//     this.delegateEvents();
    // Enable chained calls
    console.log(this.model.attributes);
    var html = this.template({name: this.model.attributes.name}); //instance of Contact
    console.log(html);
    this.$el.html(html);

    // Re-attach DOM event listeners to our brand-spankin-new HTML
    this.delegateEvents();

    return this;
  },
//
//   events: {
//     'click .delete-button': 'deleteHandler'
//   },
//
//   deleteHandler: function() {
//     // Show a popup box asking the user for confirmation
//     if (window.confirm("Are you sure you want to delete this Contact?")) {
//       this.model.destroy(); // implicitly calls 'remove'
//       // Remove calls: 'remove' on the collection and 'update' on the collection
//       console.log('This contact is destroyed');
//     }
//   }
//
});
//
export default ContactView;
