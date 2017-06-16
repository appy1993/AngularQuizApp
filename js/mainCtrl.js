var myapp=angular.module('quizApp',[
    "chart.js"
]);

myapp.factory('quizFactory', function() {
	var questions = [
		{
			question: "Which of the following directive is used to initialize an angular app?",
			options: ["ng-model","ng-controller","ng-app","None of the above"],
			answer: 2
		},
		{
			question: "AngularJS expressions are written using.",
			options: ["single braces like {expression}","double braces like {{ expression}}","small bracket like (expression)", "capital bracket like [expression]"],
			answer: 1
		},
		{
			question: "Scope act as glue between controller and view.",
			options: ["True", "False"],
			answer: 0
		},
		{
			question: "AngularJS supports _______ kind(s) of data binding. ",
			options: ["One", "Two", "Three", "Four"],
			answer: 1
		},
		{	
			question: "You can create bindings only for the data values that are added to the _______ object by the controller. ",
			options: ["$action", "$control", "$scope", " none of above"],
			answer: 2
		}
	];
 
	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});


