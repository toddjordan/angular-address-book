'use strict';

var addressBookApp = angular.module('addressBook.personDetails', []);

addressBookApp.controller('PersonDetailsController', ['$scope','$rootScope', function($scope, $rootScope) {
  $scope.selectedPerson = $rootScope.selectedPerson;
  
}]);

