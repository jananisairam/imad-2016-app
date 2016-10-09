//counter code
var button = document.getElementById('counter');
button.onclick = function () {
  
  //create the request object
  var request = new XMLHttpRequest(); 
  
  //capture the response and store it a variable
  
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        //TAKE SOME ACTIONS
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    //not done yet
  };
    //make the request
    request.open('GET', 'http://http://jananisairam.imad.hasura-app.io/counter', true);
    request.send(null);
};