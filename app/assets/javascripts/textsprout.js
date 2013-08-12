


var TextSprout = angular.module("TextSprout", [], function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'index.html'
	});
	$routeProvider.when('/features', {
		templateUrl: 'features.html',
		// resolve: {
		// 	modify: function() {
		// 		$("#ts-viewportone")
		// 	}
		// }
		// resolve: {
		// 	delay: function($q, $timeout) {
		// 	var delay = $q.defer();
		// 	$timeout(delay.resolve, 1000);
		// 		return delay.promise;
		// 	}
		// }
	});
	$locationProvider.html5Mode(true);
});

TextSprout.controller('TextsproutController', function($scope) {
	$scope.magicLoader = function() {
		if ($("#ts-viewportone").attr("ng-view") !== 'undefined' || $("#ts-viewportone").attr("ng-view") !== false) {
			console.log($("#ts-viewportone").attr("ng-view") )
			console.log($("#ts-viewporttwo").attr("ng-view") )
			$("#ts-viewportone").removeAttr("ng-view");
			$("#ts-viewporttwo").attr("ng-view", '');
		}
		else {
			console.log("test");
			$("#ts-viewportone").attr("ng-view", '');
			$("#ts-viewporttwo").removeAttr("ng-view");
		}
	}
});

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
		template: '<div id="ts-controls">This is a set of controls.</div>'
	}
});

TextSprout.directive('page', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		scope: {},
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
		transclude: true,
		template: '<div class="ts-tile" ng-transclude>This is a tile.</div>'
	}
});

TextSprout.directive('viewportone', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div id="ts-viewportone" ng-transclude ng-view></div>'
	}
});

TextSprout.directive('viewporttwo', function() {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		template: '<div id="ts-viewporttwo" ng-transclude></div>'
	}
});































































