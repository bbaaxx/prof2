import Ember from 'ember';
import LiveSearchEngine from '../mixins/live-search-engine';

// TODO: improve with Typeahead
export default Ember.Component.extend(LiveSearchEngine, {
  store: null,
  searchString: null,
  skill: null,
  skillsArray: null,
  allSkills: function(){
    return this.store.find('skill');
  }.property(),
  searchResults: function() {
    return this.filterSearch(
      this.get('searchString'),
      this.get('allSkills')
    );
  }.property('searchString', 'allSkills'),

  actions: {
    linkSkill: function(selectedSkill){
      this.set('skill', selectedSkill);
    },
    pushSkill: function(selectedSkill){
      this.get('skillsArray').pushObject(selectedSkill);
    },
  }
});
