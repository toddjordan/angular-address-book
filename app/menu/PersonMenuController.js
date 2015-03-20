'use strict';

var addressBookApp = angular.module('addressBook.personMenu', []);

addressBookApp.controller('PersonMenuController', ['$scope', 'PersonService', function($scope, personService) {
  personService.loadPeople();
  $scope.peopleListObj = personService.getPeopleListObj();
  $scope.currentSort = 'name';
}]);

