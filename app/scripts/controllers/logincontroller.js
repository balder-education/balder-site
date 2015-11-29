'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:LogincontrollerCtrl
 * @description
 * # LogincontrollerCtrl
 * Controller of the balderSiteApp
 */
angular.module('balderSiteApp')
  .controller('LoginController', function ($scope, $http, $window, $location, $rootScope, LoginService) {
    $scope.user = {};
    $scope.user.email = '';
    $scope.user.password = '';

    $scope.loginUser = function(user) {
        $scope.resetError();

        console.log('login' + $scope.user.username);
        console.log('senha' + $scope.user.password);

        LoginService.get({'username' : $scope.user.username}, function(user){
        	 if (user != null){
        		 console.log('teste' + user.username + '' + user.password );

        		 if ($scope.user.password === user.password){
        			 $window.location.href = '/#/';
        		 } else {
        			 $scope.setError("Password incorreto");
        	 	 }
        	 } else {
        		 $scope.setError("Usuario não existente");
        	 }
        });
    };

    $scope.resetError = function() {
        $scope.error = false;
        $scope.errorMessage = '';
    };

    $scope.setError = function(message) {
        $scope.error = true;
        $scope.errorMessage = message;
        $rootScope.SessionId='';
    };
  });
