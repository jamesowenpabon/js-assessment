exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
      var sum = 0;
      $.each(arr, function(index, value)    {
          sum+= value;
      });
    return sum;
  },

  remove: function(arr, item) {
      var newArray = arr.filter(function(el,i,a){return el !== item});
      return newArray;
  },

  removeWithoutCopy: function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] === item) {
              arr.splice(i, 1);
              i--;
          }
      }
      return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
        var count = 0;
        $.each(arr, function(index, value) {
            count += arr[index] === item ? 1 : 0;
        });
        return count;
  },

  duplicates: function(arr) {
      arr.sort();
      var dups = arr.filter(function(el,i,a)  {
          return (arr[i] === arr[i+1] && arr[i] !== arr[i-1]);
      });
      return dups;
  },

  square: function(arr) {
      var newArray = arr.map(function(cv, i, a) {
          return Math.pow(cv,2);
      });
      return newArray;
  },

  findAllOccurrences: function(arr, target) {
      var occurrences = []
      $.each(arr, function(index, value){
          if (value === target) {
              occurrences.push(index);
          }
      });
      return occurrences;
  }
};
