var test = require('tape');
var merkle = require('..');

test('tree', function(t) {
  t.plan(2);
  merkle(__dirname + '/fixtures/a', function(err, tree) {
    t.error(err);
    t.deepEqual(tree, {
      path: '',
      hash: 'f2b56ada1b768c6004c3ceec862bd07f367c934471ccd3e8d34f5b5b1b532951',
      tree: [
        {
          path: 'file.txt',
          hash: '197e199545eca4b58d335b7e671871a63e4e5b3ca6361cfa9605b654bc3bbfa1'
        }
      ]
    });
  });
});

test('same hash on repeat', function(t) {
  t.plan(3);
  merkle(__dirname + '/fixtures/a', function(err, treeA) {
    t.error(err);
    merkle(__dirname + '/fixtures/a', function(err, treeB) {
      t.error(err);
      t.equal(treeA.hash, treeB.hash);
    });
  });
});

test('different contents differend hashes', function(t) {
  t.plan(3);
  merkle(__dirname + '/fixtures/a', function(err, treeA) {
    t.error(err);
    merkle(__dirname + '/fixtures/b', function(err, treeB) {
      t.error(err);
      t.notEqual(treeA.hash, treeB.hash);
    });
  });
});

