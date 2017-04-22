var posts = [
{
	title: "Week 3",
	entry: "I'm having a hard time describing in words what week three was like so I'll suffice it to say that basically everything turned out pretty cool in the end and I came away from it with a deeper committment to learning how to read and write computer code. On Tuesday I had a cut and run moment and walked out of the building and said to myself, 'F this, I'm out of here', but ended up making a phone call to a friend who ended up a) validating that yes, I could get up and leave no problem and no one was going to stop me, and b) giving me some larger perspective about where I was in comparison to where I have been. I took some deep breaths and decided that staying was clearly the best thing to do and that humility was going to be key for me in seeking some help on how to understand core concepts. I had many moments this week where I really felt like I had to set aside an inflated ego and simply admit to my instructors that I was where I was at, which some exercises and challenges had revealed was way less competant than I had expected. I had so much pent up shame about it I actually cried on the way home Monday and Tuesday. Sad but true, and pretty much laughable in retrospect. I was left with a curiosity about myself I hadn't noticed, which was that I have carried some deep emotional baggage into this journey that I am consequently letting go of as I continue forward. So in a way, all the confusion of not knowing how to approach an exercise, or ask for help, or not even knowing what question to ask has been a perfect tool to use for establishing a platform to a true and higher learning. I also got a chance to present the project we made las week for which I was the team lead. Minus some technical difficulties and the fact that I was jittery to be standing in front of the class, the presentation went down okay. I found out I'm not a huge fan of being team lead.",
	thingsLearned: "SASS, Bootstrap, Materialize, adding event listeners, greater efficiency with functions, callback functions, anonymous functions, getting elements by class name, working through problems step by step, gitHub markdown for README files, consolelogging as I go, greater use of for..in..., chaining methods used on arrays.",
	imageOfTheWeek: "images/turtle.jpg"
},
{	title: "Week 2",
	entry: "The biggest takeaways from this week have been from working on group projects. The experience revealed a lot to me about how group dynamics can work on a software building project and it also effectively showed me how there are multiple factors that definitely go beyond the realm of simply coding which can determine the success of the project. I think the group project experiences this week tested my abilities to hang in there and get something done with fellow cohort members. I really appreciated the experience of being a team lead the second time. I enjoyed the process of working together and creating the color scheme and basic MVP design we were going for, and I think it set us off on the right track. We also did the javascript for our products page together and for me it felt like we were all on the same page as far as what it was doing with our array of products that we had created. In the end I liked how we all learned from one another for the good of the group and in the process became better coders and teammates for it.",
	thingsLearned: "forEach method for arrays, greater understanding of how to write DRYer javascript, Template literals for strings, if else, embedded functions, document.getElementByID().innerHTML stuff Project management skills using git flow and the various bells and whistles on git hub to see previously committed code.",
	imageOfTheWeek: "images/larkspur1.jpg"
},

{
	title: "Week One",
	entry: "Without going too much into the details I think it would be a true to say that week one Nashville Software School went pretty well for me overall. The experience of being in an adult learning environment is teaching me a lot about my reactions and responses to life itself and in my own personal experience this type of awareness has allowed me to grow into a better person. I'm really glad that the staff and instructors stress to not compare myself to others along the path of completing the bootcamp. This has really helped me to relax and enjoy the time at school, and address what I need to focus on in the present moment each day. I completed the suggested pre-work leading up to the start. Previously, I had no coding experience, so all of the material was new to me. I think I did a pretty good job of hanging in there and completing the exercises, and came away from it with a decent understanding of how javascript works and feeling prepared to begin the class. HTML seemed much more straight forward to me. The people in the cohort all come from different backgrounds and it is refreshing to be around others who have a drive to learn and share what they are learning as well. I've enjoyed getting to know some of the people so far and hope to continue that. I completed some of the initial exercises for this module though not all of them. I made a bank form for a loan application, the beginning of a personal website, and this current blog, as well as made some style sheets for other exercises. I had some trouble with the product card exercise and ended up deleting a large chunk of html work, which in retrospect doesn't really seem appropriate to do. I should probably keep my html work no matter how frustrating the css ends up being. I learned about github and how to make branches and work on them locally and then push them up remotely and to create pull requests to merge my work on to the master branch, and then to pull the master down when I want to do more work. I'm really quite amazed that I picked up on that so far.",
	thingsLearned: "plugins, communicating with Slack, terminal aliases, linking to .css and .js files, pseudoclasses, semantical tags, basic html layouts, making Sublime snippets, MVP, and the deeper fundamentals of 'for loops'.",
	imageOfTheWeek: "images/fireclouds.jpg",
	secondImg: "images/turtle.jpg"
}
];



var blogPost = "";
for (var i = 0; i < posts.length; i++) {
	blogPost +=
	`<h2>${posts[i].title}</h2>
	<section class="entry">${posts[i].entry}</section>
	<section class="thingsLearned"><h4>Things I learned:</h4>${posts[i].thingsLearned}</section><h4>Image of the Week:</h4>
	<div class="card-panel hoverable"><img src="${posts[i].imageOfTheWeek}" name="imageOfTheWeek" ></div>`};
document.getElementById("main").innerHTML = blogPost;

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