//change the function to do what you think it's supposed to do.
//I assume it should print out each number, one second after another.

var arr = [1,2,3];
var wait = 0;

arr.forEach(function(number) {
  setTimeout(function(){
    console.log(number);
  }, 1000 + wait);
  wait += 1000;
});