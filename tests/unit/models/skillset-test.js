import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('skillset', 'Skillset', {
  // Specify the other units that are required for this test.
  needs: [
    'model:skill',
    'model:skill-indicator',
    'model:profile',
    'model:position-activity',
    'model:positionset',
    'model:educationset',
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
