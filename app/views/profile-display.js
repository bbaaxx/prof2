import Ember from 'ember';

export default Ember.View.extend({

  profile: null,
  // can be mini, normal or full
  displayMode: 'normal',

  templateName: function(){
    return 'displays/profile-'+this.get('displayMode');
  }.property('displayMode'),

});
