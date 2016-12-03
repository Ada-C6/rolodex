import Backbone from 'backbone';

const Application = Backbone.Model.extend({
  // This model represents the overall application.

  // toggleShowContactCard: function() {
  //   console.log('you reached the thing!!!');
  //   var showing = !this.get('visible');
  //   this.set('visible', showing);
  //   $('#contact-details').show();
  //   $('#tmpl-contact-details').show();
  // } //close toggleShowContactCard
});

export default Application;
