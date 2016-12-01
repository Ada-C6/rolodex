import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;

  },

  render: function() {
    var html = this.template(this.model.attributes);
    this.$el.append(html);

    // Enable chained calls
    return this;
  }

});

export default RolodexView;
