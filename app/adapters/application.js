import Ember from 'ember';
import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
  latency: 1000,
  queryFixtures: function(fixtures, query, type) {
    console.log(query);
    console.log(type);
    var key = Ember.keys(query)[0];
    return fixtures.filterBy(key, query[key]);
  }
});
