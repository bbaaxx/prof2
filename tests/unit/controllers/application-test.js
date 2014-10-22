import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:application', 'ApplicationController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('toggleNav action toggles the showNav property', function(){
  expect(2);
  var controller = this.subject();
  equal(controller.get('showNav'), false);
  controller.send('toggleNav');
  equal(controller.get('showNav'), true);
});
