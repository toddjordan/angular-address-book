'use strict';

var addressBookApp = angular.module('addressBook.personDetails', []);

addressBookApp.controller('PersonDetailsController', ['$scope','$rootScope', function($scope, $rootScope) {

  $rootScope.$on('personSelected', function(event, message) {
    console.log('person selected');
    $scope.selectedPerson = $rootScope.selectedPerson; 
  });
  
}]);

