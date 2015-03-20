'use strict';

var addressBookApp = angular.module('addressBook.personDetails', []);

addressBookApp.controller('PersonDetailsController', ['$scope','PersonService', function($scope, personService) {
  $scope.detail="hello world too";

}]);

