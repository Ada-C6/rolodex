import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
// import ApplicationView from 'app/views/application_view';

// import Contact from 'app/models/contact';

var ContactView = Backbone.View.extend({

  initialize: function(options) {
    // this.options = this.model
    this.template = _.template($('#tmpl-contact-card').html());

    // this.listenTo(options.model, 'saving', this.render);
    // this.listenTo(options.model, 'saving', console.log('THIS?'));
  },
  render: function() {
    // console.log('Rendering ContactView');
    var cardName = {name: this.model.attributes.name};
    var html = this.template(cardName); //instance of Contact
    this.$el.html(html);

    // Re-attach DOM event listeners to our brand-spankin-new HTML
    this.delegateEvents();

    return this;
  },
  events: {
    'click': 'onClick'

  },
  onClick: function(event) {
    console.log('onClick contact');
    //trigger event CLV
    this.trigger('show-details', this.model); //this.model is just the data and that's all clv needs
  },

});
export default ContactView;
