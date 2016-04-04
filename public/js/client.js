var clicked = 0;
var subReddit = document.getElementById('subreddit');
  subReddit.addEventListener('click', function(event){
  clicked ++;
  console.log(clicked);
  moveInput();
  event.preventDefault();
  console.log(clicked);
  var category = document.getElementById('category');
  var dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener('load', getData);
  dataRequest.open('GET', "https://www.reddit.com/r/" + category.value + ".json");
  dataRequest.send();
});



function getData(){
  data = JSON.parse(this.responseText);
  variables(data);
}

function variables (data) {

  var content = document.getElementById('content');
  var tempFrag = document.createDocumentFragment();


  for (var i = 0; i < data.data.children.length; i++) {

    var dataLink = data.data.children[i].data.permalink;
    var image;

    if(data.data.children[i].data.preview){
       image = data.data.children[i].data.preview.images[0].source.url;
    } else{
      image = 'http://www.metrohnl.com/wp-content/uploads/2015/04/metro-042915-strictly-business-jason-sewell.jpg';
    }

    var title = data.data.children[i].data.title;
    var author = data.data.children[i].data.author;
    var creation = Date(data.data.children[i].data.created_utc);
    var views = data.data.children[i].data.score;


    var newArticle = display(dataLink, image, title, author, creation, views);
    tempFrag.appendChild(newArticle);
  }
  content.appendChild(tempFrag);
}


function display (dataLink, image, title, author, creation, views) {
    var articleDiv = document.createElement('article');

    var title_ = document.createElement('h1');
    title_.innerHTML = title;
    articleDiv.appendChild(title_);

    var linkOut = document.createElement('a');
    linkOut.setAttribute('href', 'http://www.reddit.com' + dataLink);
    linkOut.setAttribute('target', "_blank" + dataLink);
    linkOut.textContent = 'Link to Reddit Article';
    articleDiv.appendChild(linkOut);


    var articlePic = document.createElement('div');
    articlePic.setAttribute('class', 'articlePic');
    articlePic.style.backgroundImage = image;
    articlePic.style.backgroundSize = 'cover';
    articleDiv.appendChild(articlePic);

    var articlePicImage = document.createElement('img');
    articlePicImage.setAttribute('src', image);
    articlePicImage.setAttribute('opacity', '0');
    articlePicImage.setAttribute('width', '275px');
    articlePicImage.setAttribute('height', '170px');
    articlePic.appendChild(articlePicImage);

    var listGen = document.createElement('ul');
    articleDiv.appendChild(listGen);

    var viewsList = document.createElement('li');
    viewsList.innerHTML = (views + ' views');
    listGen.appendChild(viewsList);

    var authorList = document.createElement('li');
    authorList.innerHTML = 'posted by: ' + author;
    listGen.appendChild(authorList);

    var created = document.createElement('li');
    created.innerHTML = 'Date Created: '+ creation;
    listGen.appendChild(created);

   return articleDiv;
}
