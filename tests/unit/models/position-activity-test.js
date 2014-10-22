import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('position-activity', 'PositionActivity', {
  // Specify the other units that are required for this test.
  needs: [
    'model:skill',
    'model:skillset',
    'model:skill-indicator',
    'model:position',
    'model:positionset',
    'model:company'
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
