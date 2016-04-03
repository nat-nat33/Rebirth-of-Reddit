window.onload = function () {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', dataPull);
  oReq.open('GET', "http://www.reddit.com/r/javascript.json");
  oReq.send();
  console.log('after xhr send');
};

function dataRequest () {
  var data = JSON.parse(this.responseText);

}







