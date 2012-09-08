module.exports = function(array) {
  var func;

  function start() {
    func = array.shift();
    func(waterfall);
  }

  function waterfall() {
    var args = Array.prototype.slice.call(arguments);

    args.push(waterfall);
    func = array.shift();

    process.nextTick(function() {
      func.apply(this, args);
    });
  }

  start(array);
};