// 1. What is the 'class' attribute in HTML? 1
// use to declare class names for html element for styling and grouping purposes

// 2. What is the difference between 'id' and 'class' attribute in an HTML element? 1
// id is unique, class not unique

// 3. Name 4 tags you can put inside the <head> tags. 1
// title, style, link, meta

// 4. Suppose I have this element <h1>My Webpage Title</h1> and I want to make only the text color of the word "Webpage" blue, what should I do? 1
// <h1>My <span class="webpage-word">Webpage<span> Title</h1>

// 5. What is the difference between (<b> and <strong>) and (<i> and <em>) tag? 1
// different tags carry different semantic meaning although they have same appearance

// 6. What is semantic HTML? 1
// semantic is the proper use of HTML tags <div> <article> <footer> <header> - <p> <div> - semantic tags provide meta information and gives more accessible meaning to the content

// 7. What display property does the <span> tag have by default? 1
// display: inline

// 8. What display property does the <div> tag have by default? 1
// display: block

// 9. What does the property: target="_blank" do in an <a> tag? 1
// open link in new tab

// 10. What is the difference between <link> tag and <a> tag? 1
// link: links resources
// a: links external sites

// 11. What is the <form> tag used for? 1
// bundle a bunch of inputs into a form wrapper tag
<form onsubmit="">
	<label for="email">
		Email: <input id="email" type="email" />
	</label>
	<label for="password">
		Password: <input id="password" type="password" />
	</label>
	<button type="submit">Submit</button>
</form>;

// 12. What is the difference between the "submit" button type and a regular "button" button type? <button type="button">My Btn</button> 1
// submit will trigger form onsubmit callback function

// 13. Create an HTML form for logging in a user. The form must include a title, labels and text fields for EMAIL and PASSWORD and a button for submission.  5 (form, label&inputs, button, for&id)

// 14. Why do we need the 'alt' attribute in an <img> tag? 1
// display filler text in case image was not loaded

// 15. What are the 5 CSS positions? 2.5
// static, fixed, absolute, relative, sticky

// 16. List the individual parts of the box model from inner to outermost. 1
// content, padding, border, margin

// 17. If I want to make a button bigger, which property of the box model should I change on the button? 1
// padding

// 18. If I have 2 buttons side by side and want to increase the distance between the 2 button, which property of the box model should I change in the box model? 1
// margin

// 19. Why do we need CSS? 1
// styling html elements

// 20. What are 3 ways we can integrate CSS into HTML? 1
// inline style tag, link tag, style tag

// 21. What will this selector do?: * { border: solid 1px } 1
// all elements within the page

// 22. Write the code to target all <div> in an HTML page to make the margin bottom to 20px. 1
// div {
//     margin-bottom: 20px;
// }

// 23. Style this button with paddings of 20px, margins of 15px using the 'id'. <button id="my-btn">My Button</button> 1
// #my-btn {
//     ...
// }

// 24. Write the style for a mobile-first approach design where the background color is red by default then as the screen size increase to 600px the background will turn green then blue at 1200px. 3
// body {
//     background-color: red;
// }

// @media screen (min-width: 600px) {
//     body {
//         background-color: green;
//     }
// }

// @media screen (min-width: 1200px) {
//     body {
//         background-color: blue;
//     }
// }

// 25. What is the difference between using the media query of (min-width: 900px) vs (max-width: 900px). 1
// min-width is at a certain point and greater (used for mobile first approach to design), max-width is for desktop first approach

// 26. I have a div with the following style. How do I make the div change background color to blue on hover? 1
// 	<style>
// 		.my-div {background-color: red}

// .my-div:hover {
//     background-color: blue
// }
// 	</style>

// 27. How do I select all h1, h3 and div tags in an HTML page and style it with the same style? Write your code below. 1
// 	<style>
// h1, h3, div {...}
// 	</style>

// 28. What is responsive web design? 1
// site should look and operator on all screen size

// 29. What is accessibility in HTML? 1
// idea that the web should be accessible for everyone including disabled

// 30. I have a div with the below style. Make the div change in the width and height gradually when I hover over the div. width should take 5 seconds and height should take 3 seconds to complete the transition.
// The div should be a square with 100px width and height to begin and expand to 400px width and height after. 2
// 	<style>
// 		.my-div {
// width: 100px;
// height: 100px;
// transition: width 5s, height 3s;
// 		}

// .my-div:hover {
//     width: 300px;
//     height: 300px;
// }
// 	</style>
