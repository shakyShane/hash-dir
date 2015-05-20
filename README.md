# hash-dir

> A fork of merkle-dir that also takes filenames into account.



## Installation

With [npm](https://npmjs.org) do:

```bash
npm install hash-dir
```

## Usage
```js
var hashdir = require('hash-dir');

hashdir(__dirname + '/test/fixtures', function(err, tree) {
  console.log(tree.hash);
});

```