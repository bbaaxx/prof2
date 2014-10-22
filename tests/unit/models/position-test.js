import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('position', 'Position', {
  // Specify the other units that are required for this test.
  needs: [
    'model:profile',
    'model:skill',
    'model:company',
    'model:positionset',
    'model:position-activity'
    ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
