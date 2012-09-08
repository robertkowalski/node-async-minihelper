[![Build Status](https://secure.travis-ci.org/robertkowalski/node-async-minihelper.png)](http://travis-ci.org/robertkowalski/node-async-minihelper)

#async-minihelper

##minimalistic async functions helper

##Install

```
npm install async-minihelper
```

##Example usage

```javascript
var async = require('async-minihelper');

async([
  function(callback) {
    callback('hello', 'world');
  },
  function(arg1, arg2, callback) {
    //arg1 == hello, arg2 == world
    callback(1, 2);
  },
  function(arg1, arg2, callback) {
    //arg1 == 1, arg2 == 2
    callback('foo', 'bar');
  },
  function(arg1, arg2) {
    //arg1 == foo, arg2 == bar
  }
]);
```

##Tests

```
make
```

##License

Copyright (c) 2012, Robert Kowalski
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.