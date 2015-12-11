var balderSiteApp = angular.module('balderSiteApp', ['ngRoute', 'ngResource', 'ngMaterial', 'ngMdIcons']);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

balderSiteApp.constant("API_BASE_URL", "http://localhost:7777/app");
balderSiteApp.constant("API_STATISTICS_APP_URL", "http://localhost:8989/api");

balderSiteApp.run(function($http) {
	//$http.defaults.headers.common.Authorization = 'Basic cm9vdDpyb290==';
  //$http.defaults.useXDomain = true;
  //delete $http.defaults.headers.common['X-Requested-With'];
});

balderSiteApp.config(function($routeProvider, $mdThemingProvider) {
  $routeProvider.when('/login', {
             templateUrl: 'views/login.html',
             controller: 'LoginController'
  })
  .when('/', {
            templateUrl: 'views/main.html',
          	controller: 'MainController'
  })
  .when('/class', {
            templateUrl: 'views/class.html',
          	controller: 'ClassController'
  })
  .when('/lesson/:id', {
            templateUrl: 'views/lesson.html',
          	controller: 'LessonController'
  })
  .when('/content/:id', {
            templateUrl: 'views/content.html',
            controller: 'ContentController'
  }).otherwise({ redirectTo: '/login'});

  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
  });
