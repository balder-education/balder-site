'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:ContentcontrollerCtrl
 * @description
 * # ContentcontrollerCtrl
 * Controller of the balderSiteApp
 */
balderSiteApp.controller('ContentController', function ($scope, $http, $routeParams, ContentByLessonService, API_BASE_URL, API_STATISTICS_APP_URL) {
   $scope.contents = ContentByLessonService.query({id: $routeParams.id});
});

/**
 * @ngdoc function
 * @name balderSiteApp.controller:ContentcontrollerCtrl
 * @description
 * # ContentcontrollerCtrl
 * Controller of the balderSiteApp
 */
balderSiteApp.controller('ContentDetailsController', function ($scope, $http, $routeParams, ContentService, API_BASE_URL, API_STATISTICS_APP_URL) {
   ContentService.get({id: $routeParams.id}, function(data) {
      $scope.secretWord = data.resultWord;
      $scope.content = data;
      $scope.reset();
      $scope.letters  = makeLetters('abcdefghijklmnopqrstuvxz');
    });
   //ContentService.get({id: $routeParams.id}, function(value, httpHeaders) { $scope.content = value; }, function(httpHeaders) {$scope.console.error();})
  //  console.log($scope.content);
      //Hangman
    $scope.missesAllowed = 1000;
    $scope.contentId = 1;
    $scope.status = 1;

    var getRandomWord = function() {
      var index = Math.floor(Math.random() * words.length);
      return words[index];
    };

    var makeLetters = function(word) {
      return _.map(word.split(''), function(character) {
        return { name: character, chosen: false };
      });
    };

    var revealSecret = function() {
      _.each($scope.secretWord, function(letter) {
        letter.chosen = true;
      });
    };

    var checkForEndOfGame = function() {
      $scope.win = _.reduce($scope.secretWord, function(acc, letter) {
        return acc && letter.chosen;
      }, true);

      if (!$scope.win && $scope.numMisses === $scope.missesAllowed) {
        $scope.lost = true;
        revealSecret();
      }

      if ($scope.win) {

        //Site - core
        $http.put(API_BASE_URL + '/contents/'+ $scope.contentId +'/status/' +  $scope.status).success(function (data) {
            console.log(data);
        }).error(function () {
            alert("an unexpected error ocurred!");
        });

        //Statistics
        $http.put(API_STATISTICS_APP_URL + '/stundents/'+ $scope.contentId +'/lesson/' +  $scope.contentId + '/complete').success(function (data) {
            console.log(data);
        }).error(function () {
            alert("an unexpected error ocurred!");
        });
      }
    }

    $scope.reset = function() {
      _.each($scope.letters, function(letter) {
        letter.chosen = false;
      });

      $scope.secretWord = makeLetters($scope.secretWord);
      $scope.numMisses = 0;
      $scope.win = false;
      $scope.lost = false;
    };

    $scope.try = function(guess) {
      guess.chosen = true;
      var found = false;
      _.each($scope.secretWord,
             function(letter) {
               if (guess.name.toUpperCase() === letter.name.toUpperCase()) {
                 letter.chosen = true;
                 found = true;
               }
             });
      if (!found) {
        $scope.numMisses++;
      }
      checkForEndOfGame();
    };

});
