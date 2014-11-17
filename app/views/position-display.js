import Ember from 'ember';

export default Ember.View.extend({

  position: null,
  // can be mini, normal or full
  displayMode: 'normal',

  templateName: function(){
    return 'displays/position-'+this.get('displayMode');
  }.property('displayMode'),

});
