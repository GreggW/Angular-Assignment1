(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController) ;

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.checkResult = "";
  $scope.lunchSelection = "";
  $scope.checkInput = function () {
    $scope.checkResult = $scope.lunchSelection.trim();
    var items = 0;
    if ($scope.checkResult.length > 0)
      items = $scope.lunchSelection.split(",").length;
    switch(true) {
      case (items > 3):
        $scope.checkResult = "Too much!";
        break;
      case (items > 0):
        $scope.checkResult = "Enjoy!";
        break;
      default:
        $scope.checkResult = "Please enter data first";
    }
  };

};

})();
