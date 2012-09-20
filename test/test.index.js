var chai = require('chai'),
    async = require('../index'),
    sinon = require('sinon');

var expect = chai.expect;

describe('async-helper', function(done) {

  it('should be an instance of Object', function() {
    expect(async instanceof Object).to.equal(true);
  });

  it('should pass arguments to the next callback', function(done) {
    async([
      function(callback) {
        callback('hello', 'mocha');
      },
      function(arg1, arg2, callback) {
        expect(arg1).to.equal('hello');
        expect(arg2).to.equal('mocha');
        callback(1, 2);
      },
      function(arg1, arg2, callback) {
        expect(arg1).to.equal(1);
        expect(arg2).to.equal(2);
        callback('foo', 'bar');
      },
      function(arg1, arg2) {
        expect(arg1).to.equal('foo');
        expect(arg2).to.equal('bar');
        done();
      }
    ]);
  });

  it('should not call the second argument by own', function(done) {
    async([
      function(callback) {
        var spy = sinon.spy();
        callback('hello', spy);
      },
      function(arg1, spy) {
        expect(arg1).to.equal('hello');
        expect(spy.called).to.equal(false);
        done();
      }
    ]);
  });
});