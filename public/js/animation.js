function moveInput () {
  console.log('poop', clicked);
  if(clicked === 1){
    frame();
  }
}

function frame () {
  var elem = document.getElementById("welcome");
  var pos = 0;
  var id = setInterval(frame, 5);
  if(pos === 350){
    clearInterval(id);
    } else {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.top = pos + 'px';
  }
}