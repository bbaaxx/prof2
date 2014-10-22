import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('profile', 'Profile', {
  // Specify the other units that are required for this test.
  needs: [
    'model:skill',
    'model:skillset',
    'model:position',
    'model:positionset',
    'model:education',
    'model:educationset',
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
