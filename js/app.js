var app = angular.module("NextApp", ["ngRoute"])

	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "templates/main.html",
				controller: "HomeController"
			})

			.otherwise({ redirectTo: "/" })
	})