// this is the view for the entire webpage
// do the things on this page need to be a separate view or can they just live in the main application page view?
import $ from 'jquery';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Alan Watts',
    email: 'alan@philosophy.com',
    phone: '098-765-4321'
  }, {
    name: 'Bo Burnham',
    email: 'bo@allisonsdreamboyfriend.com',
    phone: '123-456-7890'
  }, {
    name: 'Kurt Vonnegut',
    email: 'kurt@absurd.com',
    phone: '123-098-4756'
  }
];

var ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    //render a new instance of RolodexView
    var rolodexTag = $('#application'); //set a HTML tag for this to end up in the rolodex section

    var rolodex = new RolodexView({ //give the application the rolodex view to render
      el: rolodexTag,
      data: contactData
    });

    rolodex.render();
    return this;
  }
});

export default ApplicationView;
