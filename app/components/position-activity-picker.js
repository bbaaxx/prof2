import Ember from 'ember';
import LiveSearchEngine from '../mixins/live-search-engine';

export default Ember.Component.extend(LiveSearchEngine, {

  searchString: null,
  activities: null,
  activity: null,
  newActivity: null,
  addingActivity: false,
  allActivities: function(){
    return this.store.find('position-activity');
  }.property(),
  searchResults: function() {
    return this.filterSearch(
      this.get('searchString'),
      this.get('allActivities')
    );
  }.property('searchString', 'allActivities'),

  actions: {
    linkActivity: function(activity){
      this.get('activities').pushObject(activity);
    },
    newActivity: function() {
      this.set('addingActivity', true);
      this.set('searchString', '');
      this.set('newActivity', this.store.createRecord('position-activity'));
    },
    saveNewActivity: function(){
      this.get('activities').pushObject(this.get('newActivity'));
    }
  }
});
