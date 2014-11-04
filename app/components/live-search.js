import Ember from 'ember';

export default Ember.Component.extend({

  allResults: null,
  searchString: '',
  targetProperty: 'name',
  normalizeString: function(arg){
    if (typeof arg !== 'string') {return '';}
    return arg.toLowerCase();
  },

  filteredResults: function() {
    var searchString = this.normalizeString(this.get('searchString'));
    var targetProperty = this.get('targetProperty');
    if (!searchString) {return null;}
    return this.get('allResults').filter(function(result){
      var target = this.normalizeString(result.get(targetProperty));
      return target.indexOf(searchString) === 0;
    },this);
  }.property('searchString','allResults.@each')

});
