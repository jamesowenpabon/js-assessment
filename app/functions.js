exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    var g = arr[0];
    var n = arr[1];
    var p = arr[2];
    var msg = fn(g,n,p);
    return msg;
  },

  speak: function(fn, obj) {
    var msg = fn.call(obj, obj);
    return msg;
  },

  functionFunction: function(str) {
    var msg = function(str2){
      return str + ", " + str2;
    };
    return msg;
  },

  makeClosures: function(arr, fn) {
    for(var i=0; i < arr.length; i++) {
      arr[i] = function(){
        return fn(arr[i]);
      }
    }
    return arr;
  },

  partial: function(fn, str1, str2) {
    var msg = fn.bind(undefined,str1,str2);
    return msg;
  },

  useArguments: function() {
    var sum = 0;
    $.each(arguments, function(index, value)  {
      sum += value;
    })
    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments)
    args.shift();
    fn.apply(undefined, args);
  },

  partialUsingArguments: function(fn) {
    var args1 = Array.prototype.slice.call(arguments)
    args1.shift();
    var pfunc = function() {
      var args2 = Array.prototype.slice.call(arguments);
      var args = args1.concat(args2);
      return fn.apply(undefined, args); 
    }
    return pfunc;
  },

  curryIt: function(fn) {
    return function(x) {
      return function(y) { 
        return function(z) {
          return fn(x,y,z);
        }
      }
    }
  }
};
