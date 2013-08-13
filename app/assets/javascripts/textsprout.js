


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
	$scope.overlayOn = true;
	$scope.toggleOverlay = function() {
		overlayOn = !overlayOn;
	};
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
	$scope.albumModel = $timeout(function() {	// Use a timeout to fake an ansynchronous AJAX request.
		return [
			{
				'albumName': "The Suburbs",
				'artistName': "Arcade Fire",
				'songList': [
					'The Suburbs',
					'Ready to Start',
					'Modern Name',
					'Rococo',
					'Empty Room',
					'City with No Children',
					'Half Light I',
					'Half Light II',
					'Suburban War',
					'Month of May',
					'Wasted Hours',
					'Deep Blue',
					'We Used to Wait',
					'Sprawl I',
					'Sprawl II',
					'The Suburbs (continued)'
				]
			},
			{
				'albumName': "OK Go",
				'artistName': "OK Go",
				'songList': [
					"Get Over It",
					"Don't Ask Me",
					"You're So Damn Hot",
					"What to Do",
					"1000 Miles per Hour",
					"Shorly Before End",
					"Return",
					"There's a Fire",
					"C-C-C-Cinnamon Lips",
					"The Fix is In",
					"Hello, My Treacherous Friends",
					"Bye Bye Baby"
				]
			},
			{
				'albumName': "The Fame Monster",
				'artistName': "Lady Gaga",
				'songList': [
					"Bad Romance",
					"Alejandro",
					"Monster",
					"Speechless",
					"Dance in the Dark",
					"Telephone",
					"So Happy I Could Die",
					"Teeth"
				]
			},
			{
				'albumName': "Ramones",
				'artistName': "The Ramones",
				'songList': [
					"Blitzkrieg Bop",
					"Beat on the Brat",
					"Judy is a Punk",
					"I Wanna Be Your Boyfriend",
					"Chain Saw",
					"Now I Wanna Sniff Some Glue",
					"I Don't Wanna Go Down to the Basement",
					"Loudmouth",
					"Havana Affair",
					"Listen to My Heart",
					"53rd & 3rd",
					"Let's Dance",
					"I Don't Wanna Walk Around with You",
					"Today Your Love, Tommorrow the World"
				]
			},
			{
				'albumName': "Music",
				'artistName': "Madonna"
			},
			{
				'albumName': "Believe",
				'artistName': "Cher"
			},
			{
				'albumName': "Blonde on Blonde",
				'artistName': "Bob Dylan"
			},
			{
				'albumName': "Sticky Fingers",
				'artistName': "The Rolling Stones"
			},
			{
				'albumName': "Cracked Rearview",
				'artistName': "Hootie and the Blowfish"
			},
			{
				'albumName': "Animal",
				'artistName': "Ke$sha"
			},
			{
				'albumName': "Is This It",
				'artistName': "The Strokes"
			},
			{
				'albumName': "Give Up",
				'artistName': "The Postal Service"
			}
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
		template:
			'<div id="ts-controls" ng-transclude>' + 
				'<ul id="ts-session">' +
					'<li><a href="#">Home</a></li>' +
					'<li><a href="#">Log In</a></li>' +
				'</ul>' +
				'<ul id="ts-controls-options">' +
					'<li><a href="#" class="ts-current"><span>Discover</span></a></li>' +
					'<li><a href="#" ng-click="overlayOn = !overlayOn"><span>Search</span></a></li>' +
				'</ul>' +
				'<div id="ts-musicplayer">' +
					'<button class="ts-musicplayer-button"></button>' +
					'<button class="ts-musicplayer-button"></button>' +
					'<button class="ts-musicplayer-button"></button>' +
					'<button class="ts-musicplayer-button"></button>' +
					'<div id="ts-musicplayer-status">' +
						'<div id="ts-musicplayer-title">' +
							'<h3><strong>Take Back The Night</strong> Justin Timberlake</h3>' +
							'<h4>0:08 / 5:55</h4>' +
						'</div>' +
						'<div id="ts-musicplayer-progress">' +
							'<div id="ts-musicplayer-buffer" style="width: 35%;">' +
								'<div id="ts-musicplayer-progress-bar" style="width: 20%;">' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
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
TextSprout.directive('banner', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div class="ts-banner" ng-transclude></div>'
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
TextSprout.directive('overlay', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div id="ts-overlay" ng-hide="overlayOn" ng-transclude ng-animate="' + "'ts-overlay'" + '"></div>'
	}
});










 


















































