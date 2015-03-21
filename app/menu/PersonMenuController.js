'use strict';

var personMenuModule = angular.module('addressBook.personMenu', []);

personMenuModule.controller('PersonMenuController', ['$scope', '$rootScope','PersonService', function($scope, $rootScope, personService) {
  var successfulLoad = function() {
    $scope.peopleListObj = personService.getPeopleListObj();    
    $scope.selectedIndex = 0;
    $rootScope.selectedPerson = $scope.peopleListObj.peopleList[0];
  };
  var loadFail = function() {
    $scope.peopleListObj = personService.getPeopleListObj();
    console.log("Nobody loves you");
  };
  personService.loadPeople(successfulLoad, loadFail);

  $scope.currentSort = 'name';
  $scope.isActiveMenuItem = function(index) {
    console.log("index active?: " + index);
    return index===$scope.selectedIndex;
  };
  $scope.selectPerson = function(index) {
    console.log("index selected: " + index);
    $scope.selectedIndex = index;
    $rootScope.selectedPerson = $scope.peopleListObj.personList[index];
  };

}]);

