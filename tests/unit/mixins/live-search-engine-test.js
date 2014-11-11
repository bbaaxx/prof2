import Ember from 'ember';
import LiveSearchEngineMixin from 'prof2/mixins/live-search-engine';

module('LiveSearchEngineMixin');

// Replace this with your real tests.
test('it works', function() {
  var LiveSearchEngineObject = Ember.Object.extend(LiveSearchEngineMixin);
  var subject = LiveSearchEngineObject.create();
  ok(subject);
});
