'use strict';

var addressBookApp = angular.module('addressBook.personMenu', []);

addressBookApp.controller('PersonMenuController', ['$scope', 'PersonService', function($scope, personService) {
  $scope.text = "hello world";
}]);

