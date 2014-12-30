# express-noop

A middleware that does nothing, except execute the `next` middleware. Useful when you want to disable other middleware inside `app.use`.

You'll want to weigh the convenience this module provides with the additional performance implications. 

## Install

```bash
npm install express-noop --save
```

## Usage

Using `noop()` without any arguments immediately executes `next()`.

```javascript
app.use(app.get('production') ? noop() : delay(1000));
```

Alternatively, passing `condition` and `middleware` will execute `middleware` if `condition` is `true`, otherwise the `next()` middleware is run.

```javascript
// app.use(noop([condition], [middleware]));
// If condition is true, execute middleware, otherwise next();
app.use(noop(!app.get('production'), delay(1000)));
```

Both ways do essentially the same thing.

## Example

```javascript
var express = require('express');
var delay = require('express-delay');
var noop = require('express-noop');

var app = express();

app.set('production', process.env.NODE_ENV === 'production');

// Use noop() without arguments.
app.use(app.get('production') ? noop() : delay(1000));

// Or, wrap a middleware with noop().
app.use(noop(!app.get('production'), delay(1000)));

app.get('/', function(req, res, next){
  res.send('Hello, world!');
});

// ...
```

## License

[The MIT License (MIT)](http://flesch.mit-license.org/)

Copyright © 2015 John Flesch, [http://fles.ch](http://fles.ch/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.