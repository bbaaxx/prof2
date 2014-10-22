import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('skill', 'Skill', {
  // Specify the other units that are required for this test.
  needs: [
    'model:skillset',
    'model:skill-indicator',
    'model:skill-metric',
    'model:position',
    'model:position-activity',
    'model:profile'
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
