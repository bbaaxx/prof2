import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('skill-indicator', 'SkillIndicator', {
  // Specify the other units that are required for this test.
  needs: [
    'model:skill',
    'model:skillset',
    'model:skill-metric',
    'model:position-activity',
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
