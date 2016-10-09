//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
  
  //make request to counter eendpoint
  
  //capture the response and store it a variable
  
  //render a variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
    
};