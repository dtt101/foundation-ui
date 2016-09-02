import { test } from 'qunit';
import moduleForAcceptance from 'foundation-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users', {
  beforeEach() {
    server.createList('user', '10');
  }
});

test('visiting /users', function(assert) {
  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users');
    assert.equal(
      find('table tbody tr').length,
      10,
      'assertion');
  });
});
