



// Making a New Blog Entry:

var addBlogEntryLink = document.getElementById("addBlogEntry");
var formFill = document.getElementById("formFill");
var mainEntryDivOutput = document.getElementById("main");
var blogList = document.getElementById("blogList");
addBlogEntryLink.addEventListener("click", function(){
  mainEntryDivOutput.classList.add("hidden");
  formFill.classList.add("visible");
});

blogList.addEventListener("click", function(){
  formFill.classList.add("hidden");
  formFill.classList.remove("visible");
  mainEntryDivOutput.classList.remove("hidden");
});

///Adding to the DOM and it will fill out page

var postArray = [];
addButton.addEventListener("click", function (event){
console.log("click event", event);
var title = document.getElementById("title").value;
var entry = document.getElementById("entry").value;
var learned = document.getElementById("learned").value;
var imgOfWeek = document.getElementById("weekImage").value;
var imgTitle = document.getElementById("imgTitle").value;
var caption = document.getElementById("caption").value;
var pubDate = document.getElementById("pubDate").value;
var writtenOn = document.getElementById("writtenOn").value;
var newBlogPost = document.getElementById("main");
var addButton = document.getElementById("addButton");
newBlogPost.innerHTML =
  `<h2>${title}</h2>
	<section class="entry">${entry}</section>
	<section class="thingsLearned"><h4>Things I learned:</h4>${learned}</section><h4>Image of the Week:</h4>
	<div class="row">
        <div class="col s12 l5">
          <div class="card medium center">
            <div class="card-image">
              <img src="${imgOfWeek}" height='450' width='650'>
              <span class="card-title">${imgTitle}</span>
            </div>
            <div class="card-content">
              <p>${caption}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
	<footer> By Nick Herron | <time datetime=${pubDate}>${writtenOn}</time></footer>` + newBlogPost.innerHTML;
	console.log("blogPostDOM",newBlogPost);
	postArray.push({title: `${title}`, entry: `${entry}`, learned: `${learned}`, imgOfWeek: `${imgOfWeek}`, imgTitle: `${imgTitle}`, caption: `${caption}`, pubDate: `${pubDate}`, writtenOn: `${writtenOn}`});
	console.log("postArray", postArray);
});

/////////////////////////


var dataRequest2 = new XMLHttpRequest();
dataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataRequest2.addEventListener("error", dataRequest2Error);

function dataRequest2LoadComplete(event) {
  console.log("blog data has LOADED");
  var blog = JSON.parse(event.target.responseText);
  console.log("blogData",blog);
  showData(blog);
}

function showData(taco) { //being called from above...
  var blogDiv = document.getElementById("main");
  var blogEntry = "";
  for (var i = 0; i < taco.posts.length; i++) {
    console.log("taco.posts[i].title", taco.posts[i].title);
    blogEntry = `<article id="entry${i}"><h2>${taco.posts[i].title}</h2>
  <section class="entry">${taco.posts[i].entry}</section>
  <section class="thingsLearned"><h4>Things I learned:</h4>${taco.posts[i].thingsLearned}</section><h4>Image of the Week:</h4>
  <div class="row">
        <div class="col s12 l5">
          <div class="card medium center">
            <div class="card-image">
              <img src="${taco.posts[i].imageOfTheWeek}" height='450' width='650'>
              <span class="card-title">${taco.posts[i].cardTitle}</span>
            </div>
            <div class="card-content">
              <p>${taco.posts[i].cardInfo}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
  <footer> By Nick Herron | <time datetime=${taco.posts[i].publishDate}>${taco.posts[i].writtenDate}</time></footer><button class="deletePost">delete</button></article>`;
  var blogPostDOM = document.getElementById("main");
  blogPostDOM.innerHTML += blogEntry;
  }

  var deleteButton = document.getElementsByClassName("deletePost")
    for (var j = 0; j < deleteButton.length; j++) {
      deleteButton[j].addEventListener("click", function (event){
      console.log("click",event);
      var divEntry = document.getElementById("entry" + j);
      blogPostDOM.removeChild(event.target.closest('article'));

    }

  )};
}

//delete from DOM part



function dataRequest2Error(event) {
  console.log("dataRequest2 has error");
}

dataRequest2.open("GET", "entry.json");
dataRequest2.send();


