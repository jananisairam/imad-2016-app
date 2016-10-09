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
    request.open('GET', 'http://jananisairam.imad.hasura-app.io/counter', true);
    request.send(null);
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
button.onclick = function() {
    //maje a request to server and send the name
    
    //capture a list of name and render it in a list.
    var names = ['name1','name2','name3'];
    var list ='';
    for(var i=0;i<names.length;i++) {
        
    }
};