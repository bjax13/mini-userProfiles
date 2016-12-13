angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";

    $scope.getUsers = function () {
      $scope.users = mainService.getUsers();
    }
    $scope.toggleFavorite = function (index) {
      this.toggleFavorite = mainService.toggleFavorite();
    }

    $scope.getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite;
})
