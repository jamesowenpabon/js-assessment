exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var p1 = new Promise(
      function(resolve, reject) {
        //Simulate Asynchronicity
        setTimeout(function(){
          resolve(value);
        },1000);
      }
    );
    return p1;
  },

  manipulateRemoteData: function(url) {
    var p1 = new Promise(
      function(resolve, reject) {
        var peeps = [];
        var newJSON = $.ajax({
          url: url
        });
        newJSON.done(function() {
          peeps = newJSON.responseJSON.people.map(function(cv,i,a){
            return cv.name;
          });
          peeps.sort();
          resolve(peeps);
        });
        newJSON.fail(function(){
          reject("Connection Failed");
        });
      }
    );
    return p1;
  }
};
