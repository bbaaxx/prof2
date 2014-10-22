import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('company', 'Company', {
  // Specify the other units that are required for this test.
  needs: [
    'model:position',
    'model:position-activity',
    'model:positionset'
    ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
