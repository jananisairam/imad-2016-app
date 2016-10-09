console.log('Loaded!');
// change the text of main element div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';
//move the image
var img = document.getElementById('madi');
var marginRight = 0;
function moveLeft()
{
    marginRight = marginRight + 2;
    img.style.marginRight = marginRight + 'px';
}

img.onclick = function() {
  var interval = setInterval(moveLeft,50);  
};