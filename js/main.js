// Global Variables
var pageData;



// Fetch Data
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'js/data.json');
ourRequest.onload = function () {
	if (ourRequest.status >= 200 && ourRequest.status < 400) {
		// This is where we'll do something with the retrieved data
		pageData = JSON.parse(ourRequest.responseText);
		createHTML(pageData);
	} else {
		console.log("We connected to the server, but it returned an error.");
	}
};

ourRequest.onerror = function () {
	console.log("Connection error");
};

ourRequest.send();



// Templating Engine

// Helper method to format an id into a title
Handlebars.registerHelper("formatTitle", function(id) {
	var title = id.replace("-", " ");
	return title;
})

// Generates the HTML
function createHTML(data) {

	// Generate and update the project HTML
	var projectHTML = generateTemplate("skillTemplate")(data);
	document.getElementById("row-skill").innerHTML = projectHTML;

	// Generate the skill HTML
	var skillHTML = generateTemplate("projectTemplate")(data);
	document.getElementById("row-project").innerHTML = skillHTML;

	// // Convert the innerHTML into an array of strings and remove empty strings from beginning/end
	// var lines = skillHTML.split("\n");
	// lines.splice(0, 1);
	// lines.splice(lines.length-1, 1);

	// // Gather numeric data about the skills
	// var numLines = lines.length;
	// var numSkills = data["skills"].length;
	// var skillSize = numLines/numSkills;

	// // Gather viewport size
	// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	// // Set the number of columns based on page width
	// var numColumns = 3;
	// if (w < 1300) numColumns = 2;
	// if (w < 800) numColumns = 1;

	// // Loop through the lines and group the skill divs
	// // Wrap groups of skills in div with the column class
	// var modifiedSkillHTML = "<div class='column'>"
	// for (var i = 0; i < numSkills; i++) {
	// 	var skill = lines.splice(0, skillSize).join("\n");
	// 	modifiedSkillHTML += skill;

	// 	// End with a closing div on the last element
	// 	if (i == numSkills-1) {
	// 		modifiedSkillHTML += "</div>";
	// 		break;
	// 	}

	// 	// Add a closing div and an opening column div
	// 	if ((i+1) % (numSkills/numColumns) == 0) {
	// 		modifiedSkillHTML += "</div> <div class='column'>";
	// 	}
	// }

	// // Update skill HTML
	// document.getElementById("skills-row").innerHTML = modifiedSkillHTML;
}

// Creates a template given the template's name
function generateTemplate(templateName) {
	var rawTemplate = document.getElementById(templateName).innerHTML;
	return Handlebars.compile(rawTemplate);
}

// Reorganize the HTML into columns when the page is resized
function windowResize() {
	if (pageData != null) createHTML(pageData);
}