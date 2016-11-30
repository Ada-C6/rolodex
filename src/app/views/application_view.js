import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

// import ContactView from 'app/views/contact_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // this.template = _.template($("#tmpl-contact-card").html());
    // //
    // this.ulEl = this.$("#contact-cards");

    // var roloView = new RolodexView({
    //   el: '#application',
    //   model: application
    // });
    // this.viewList = [];
    // // this.model..
    // this.cView = new ContactView({
    //   template: this.template
    // });
    this.render();
  },

  render: function() {
    // this.ulEl.empty();
    //
    // this.cView.render();
    //
    // this.ulEl.append(this.cView.$el);

    return this;
  }
});

export default ApplicationView;
