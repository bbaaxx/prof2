import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('positionset', 'Positionset', {
  // Specify the other units that are required for this test.
  needs: [
    'model:position',
    'model:position-activity',
    'model:profile',
    'model:company',
    'model:skillset',
    'model:educationset',
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
