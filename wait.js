var wait = function(input, callback) {
  setTimeout(function(){
    callback(null,input)
  },2000);
};

module.exports = {
  wait: wait
};
