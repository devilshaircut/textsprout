


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



TextSprout.factory('fetchData', function($http) {

	var baseApiRoute = "http://ws.audioscrobbler.com";

	return {
		fetchTopPopAlbums: function(callback) {
			$http.get(baseApiRoute + "/2.0/?method=tag.gettopalbums&tag=pop&api_key=3ed7a5a866d2fed75bba957d58eace93&format=json&limit=50&page=1").success(callback);
		},
		fetchTopRockAlbums: function(callback) {
			$http.get(baseApiRoute + "/2.0/?method=tag.gettopalbums&tag=rock&api_key=3ed7a5a866d2fed75bba957d58eace93&format=json&limit=50&page=1").success(callback);
		},
		fetchTopDiscoAlbums: function(callback) {
			$http.get(baseApiRoute + "/2.0/?method=tag.gettopalbums&tag=disco&api_key=3ed7a5a866d2fed75bba957d58eace93&format=json&limit=50&page=1").success(callback);
		}
	}

});



// Create Angular controller that will provide data to the app.
TextSprout.controller('TextsproutController', function($scope, $timeout, fetchData) {
	
	fetchData.fetchTopPopAlbums(function(data) {
		$scope.topPopAlbums = data.topalbums.album;
	});
	fetchData.fetchTopRockAlbums(function(data) {
		$scope.topRockAlbums = data.topalbums.album;
	});
	fetchData.fetchTopDiscoAlbums(function(data) {
		$scope.topDiscoAlbums = data.topalbums.album;
	});

	$scope.overlayOn = true;
	$scope.toggleOverlay = function() {
		overlayOn = !overlayOn;
	};

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
					'<button class="ts-musicplayer-button">&#x23EA;</button>' +
					'<button class="ts-musicplayer-button">&#x25B6;</button>' +
					'<button class="ts-musicplayer-button">&#x23E9;</button>' +
					'<button class="ts-musicplayer-button">&#xE820;</button>' +
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
				'<div id="ts-footer"></div>' +
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
			'<div class="ts-tile">' +
				'<img src="{{album.image[3]'+ "['#text']" + '}}" />' +
				'<div class="ts-tile-text">' +
					'<h3>{{album.artist.name}}</h3>' +
					'<h4>{{album.name}}</h4>' +
				'</div>' +
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










 


















































