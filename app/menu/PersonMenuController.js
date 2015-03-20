'use strict';

var addressBookApp = angular.module('addressBook.personMenu', []);

addressBookApp.controller('PersonMenuController', ['$scope', 'PersonService', function($scope, personService) {
  var successfulLoad = function() {
    $scope.peopleListObj = personService.getPeopleListObj();    
    $scope.selectedPerson = $scope.peopleListObj.peopleList[0].name;
    console.log("selected person: " + $scope.selectedPerson);
  }
  var loadFail = function() {
    console.log("Nobody loves you");
  }
  personService.loadPeople(successfulLoad, loadFail);

  $scope.currentSort = 'name';
  $scope.isActiveMenuItem = function(name) {
    console.log("name active?: " + name);
    return name===$scope.selectedPerson;
  };
  $scope.selectPerson = function(name) {
    console.log("name selected: " + name);
    $scope.selectedPerson = name;
  };
}]);

