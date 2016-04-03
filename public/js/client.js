window.onload = function () {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', dataRequest());
  oReq.open('GET', "http://www.reddit.com/r/music.json");
  oReq.send();
  console.log('after xhr send');
};

var dataRequest = function () {
  var data = JSON.parse(this.responseText);
  var content = document.getElementById('content');
  var dataLink;
  var title;
  var image;
  var views;


  function variables (data){

    for (var i = 0; i < data.data.children.length; i++) {

      dataLink = data.data.children[i].data.Link;

      if(data.data.children[i].data.preview){
         image = data.data.children[i].data.preview.images[0].source.url;
      }else{
        image = 'http://www.mypetchicken.com/catalog/Day-Old-Baby-Chicks/White-Silkie-Bantam-p250.aspx';
      }

      title = data.data.children[i].data.title;
      views = data.data.children[i].data.score;

      display(dataLink, title, image, views);
  }
}


  function display (dataLink, objName, image, views) {
    var linkOp = document.createElement('a');
    linkOp.setAttribute('href', 'http://www.reddit.com' + dataLink );
    linkOp.setAttribute('target', '_blank' + dataLink );
    content.appendChild(linkOp);

    var objDiv = document.createElement('div');
    objDiv.setAttribute('class', 'objDiv');
    linkOut.appendChild(objDiv);

    var imageDisplay = document.createElement('div');
    imageDisplay.setAttribute('class', 'article-pic');
    imageDisplay.style.backgroundImage = image;
    imageDisplay.style.backgroundSize = 'cover';
    objDiv.appendChild(imageDisplay);

    var listGen = document.createElement('ul');
    objDiv.appendChild('listGen');

    var title = document.createElement('h1');
    title.innerHTML = objName;
    objDiv.appendChild(title);

    var viewDisplay = document.createElement('li');
    viewsDisplay.innerHTML = (views + ' views');
    listGen.appendChild(viewDisplay);

  }




  return{
    variables: variables
  };
};