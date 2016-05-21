exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var intCounter = parseInt(start, 10);
    var timer = setInterval(function(){
      if (intCounter > end) {
        clearInterval(timer);
      } else {
        console.log(intCounter);
        intCounter ++
      }
    },100,end);

    var stop = {
      cancel : function(){
        clearInterval(timer);
      }
    }
    return stop;
  }
};
