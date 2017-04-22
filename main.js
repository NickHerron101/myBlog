var posts = [
{
	title: "Week 3",

	entry: "I'm having a hard time describing in words what week three was like so I'll suffice it to say that basically everything turned out pretty cool in the end and I came away from it with a deeper committment to learning how to read and write computer code. On Tuesday I had a cut and run moment and walked out of the building and said to myself, 'F this, I'm out of here', but ended up making a phone call to a friend who ended up a) validating that yes, I could get up and leave no problem and no one was going to stop me, and b) giving me some larger perspective about where I was in comparison to where I have been. I took some deep breaths and decided that staying was clearly the best thing to do and that humility was going to be key for me in seeking some help on how to understand core concepts. I had many moments this week where I really felt like I had to set aside an inflated ego and simply admit to my instructors that I was where I was at, which some exercises and challenges had revealed was way less competant than I had expected. I had so much pent up shame about it I actually cried on the way home Monday and Tuesday. Sad but true, and pretty much laughable in retrospect. I was left with a curiosity about myself I hadn't noticed, which was that I have carried some deep emotional baggage into this journey that I am consequently letting go of as I continue forward. So in a way, all the confusion of not knowing how to approach an exercise, or ask for help, or not even knowing what question to ask has been a perfect tool for a true and higher learning. I also got a chance to present the project we made las week for which I was the team lead. Minus some technical difficulties and the fact that I was jittery to be standing in front of the class, the presentation went down okay. I found out I'm not a huge fan of being team lead.",

	thingsILearned: "SASS, Bootstrap, Materialize, adding event listeners, greater efficiency with functions, callback functions, anonymous functions, getting elements by class name, working through problems step by step, gitHub markdown for README files, consolelogging as I go, greater use of for..in..., chaining methods used on arrays.",

	imageOfTheWeek: "images/turtle.jpg"
}];

var blogPost = "";
for (var i = 0; i < posts.length; i++) {
	blogPost +=
	`<h2>${posts[i].title}</h2>
	<section class="entry">${posts[i].entry}</section>
	<section class="thingsLearned"><h3>Things I learned:</h3>${posts[i].thingsILearned}</section><h3>Image of the Week</h3>
	<img src="${posts[i].imageOfTheWeek}" name="imageOfTheWeek">`
	};
		// console.log(posts.title);
		console.log(posts.thingsILearned)
		console.log(posts.imageOfTheWeek);
document.getElementById("three").innerHTML = blogPost;




// var quoteBlock = `<div id="quote--${index}">
// 						<h3>"${quote}" - Star Wars</h3>
// 						<p>this is awesome</p>
// 					  </div>`;