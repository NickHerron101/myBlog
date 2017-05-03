var addBlogButton = document.getElementById("addBlogEntry");
addBlogButton.addEventListener("click", function(event){

});



var dataRequest = new XMLHttpRequest();
dataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataRequest2.addEventListener("error", dataRequest2Error);

function dataRequest2LoadComplete(event) {
	console.log("blog data has LOADED");
	var entryData = JSON.parse(event.target.responseText);
	console.log("smallData",entryData);

	showEntry(entryData);
}

function showEntry(tacoMeat) { //being called from above...
	var outPutDiv = document.getElementById("main");
	var entryData = "";

	for (lettuce in taco) { // for each item in the data, dont' matter what it's called
		var colorItem = taco[lettuce]; // one particular item in our json file
		colorData += "<div>";
		colorData += "<h2>" + colorItem.color + ":" + colorItem.value + "</h2>";
		colorData += "</div>";
	}
	colorDiv.innerHTML += colorData;
}

function dataRequest2Error(event) {
	console.log("dataRequest2 has error");
}

dataRequest2.open("GET", "color.json");
dataRequest2.send();































console.log("testing load.js");

function populateDom

var blogPost = "";
for (var i = 0; i < posts.length; i++) {
	blogPost +=
	`<h2>${posts[i].title}</h2>
	<section class="entry">${posts[i].entry}</section>
	<section class="thingsLearned"><h4>Things I learned:</h4>${posts[i].thingsLearned}</section><h4>Image of the Week:</h4>
	<div class="row">
        <div class="col s12 l5">
          <div class="card medium center">
            <div class="card-image">
              <img src="${posts[i].imageOfTheWeek}" height='450' width='650'>
              <span class="card-title">${posts[i].cardTitle}</span>
            </div>
            <div class="card-content">
              <p>${posts[i].cardInfo}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
	<footer> By Nick Herron | <time datetime=${posts[i].publishDate}>${posts[i].writtenDate}</time></footer>`};
document.getElementById("main").innerHTML = blogPost;

// <div class="row">z
//         <div class="col s12 m7">
//           <div class="card">
//             <div class="card-image">
//               <img src="images/sample-1.jpg">
//               <span class="card-title">Card Title</span>
//             </div>
//             <div class="card-content">
//               <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p>
//             </div>
//             <div class="card-action">
//               <a href="#">This is a link</a>
//             </div>
//           </div>
//         </div>
//       </div>



		// console.log(posts.title);
		// console.log(posts.thingsILearned)
		// console.log(posts.imageOfTheWeek);
// var i = 0;
// var prop;
// for (prop in posts) {
// }






// var quoteBlock = `<div id="quote--${index}">
// 						<h3>"${quote}" - Star Wars</h3>
// 						<p>this is awesome</p>
// 					  </div>`;