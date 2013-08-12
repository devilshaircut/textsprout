


// Create Angular module the main app, TextSprout.
var TextSprout = angular.module("TextSprout", [], function($routeProvider, $locationProvider) {
	// Define some routes.
	$routeProvider.when('/', {
		templateUrl: 'index.html'
	});
	$routeProvider.when('/features', {
		templateUrl: 'features.html'
	});
	$routeProvider.when('/pricing', {
		templateUrl: 'pricing.html'
	});
	$routeProvider.when('/resources', {
		templateUrl: 'resources.html'
	});
	$routeProvider.when('/contact', {
		templateUrl: 'contact.html'
	});
	$routeProvider.otherwise({
		templateUrl: 'index.html'
	});
	$locationProvider.html5Mode(true);
});

// Create Angular controller that will provide data to the app.
TextSprout.controller('TextsproutController', function($scope, $timeout) {
	$scope.tileModel = $timeout(function() {	// Use a timeout to fake an ansynchronous AJAX request.
		return [
			{ tileSubject: "Music News",			tileHeadline: "Lady Gaga Inks Album Deal With Jay-Z" },
			{ tileSubject: "Celebrity Gossip",		tileHeadline: "Miley Cyrus Expecting Twins this Winter" },
			{ tileSubject: "Editor's Pick",			tileHeadline: "Arcade Fire: The Suburbs (2008 Arista)" },
			{ tileSubject: "Concert Tours",			tileHeadline: "Ke$ha Extends Tour With 4 New Dates" },
			{ tileSubject: "Fashion & Music",		tileHeadline: "Who Wore It Better? Beyonce vs. Rihanna" },
			{ tileSubject: "Album Review",			tileHeadline: "The Knife: Silent Shout (2006 Interscope)" },
			{ tileSubject: "Featured Article",		tileHeadline: "The Rise and Fall of the Vinyl Record" },
			{ tileSubject: "Emerging Artist",		tileHeadline: "JJAMZ Rock Out on the Summer Radio" },
			{ tileSubject: "Advance Preview",		tileHeadline: "OK Go to Release New Album" },
			{ tileSubject: "Exclusive Coverage",	tileHeadline: "Madonna's Top 10 All-Time Favorite Albums" },
			{ tileSubject: "Official Blog",			tileHeadline: "Concert Tour Sales Reach Record High" },
			{ tileSubject: "Musician Interview",	tileHeadline: "Tenacious D: Chasing Jack Black" }
		];
	}, 0);
});

// Directives for creating various page elements.
TextSprout.directive('navigation', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div id="ts-navigation" ng-transclude></div>'
	}
});
TextSprout.directive('controls', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div id="ts-controls" ng-transclude></div>'
	}
});
TextSprout.directive('page', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div class="ts-page" ng-transclude></div>'
	}
});
TextSprout.directive('content', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div class="ts-content" ng-transclude></div>'
	}
});
TextSprout.directive('header', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div class="ts-header" ng-transclude></div>'
	}
});
TextSprout.directive('article', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div class="ts-article" ng-transclude></div>'
	}
});
TextSprout.directive('tile', function() {
	return {
		restrict: "E",
		replace: true,
		template:
			'<div class="ts-tile" ng-repeat="tile in tileModel" ng-animate="' + "{ enter: 'animation-fadein-enter', leave: 'animation-fadein-leave' }" + '" style="transition-delay: {{$index * 75}}ms">' +
				'<h3>{{tile.tileSubject}}</h3>' +
				'<h4>{{tile.tileHeadline}}</h4>' +
			'</div>'
	}
});
TextSprout.directive('viewport', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div id="ts-viewport" ng-view ng-transclude ng-animate="' + "{ enter: 'animation-scrollpage-enter', leave: 'animation-scrollpage-leave' }" + '"></div>'
	}
});











 


















































