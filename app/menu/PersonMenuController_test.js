'use strict';
/* global getJSONFixture, PersonService */

describe('The person menu controller', function() {
  var $httpBackend, controller, menuController, scope, rootScope, personService, peopleData;

  jasmine.getJSONFixtures().fixturesPath= 'base/data';
  peopleData = getJSONFixture('people.json');

  beforeEach(module('addressBook.personMenu'));


  describe('on a successful load of people', function() {
    beforeEach(inject(function($injector, $rootScope, $controller) {
      controller = $controller;
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET('/api/people').respond(
        peopleData
      );
      $rootScope.selectedPerson = {};
      scope = $rootScope.$new();
      rootScope = $rootScope;
      var $http = $injector.get('$http');
      personService = PersonService($http);
      controller('PersonMenuController', {'$scope':scope,'PersonService': personService});

    }));
    it('should load all people into scope', function() {

      $httpBackend.flush();
      expect(scope.peopleListObj.peopleList.length).toBe(4);
    });

    it('should select the first person in the list', function() {
      $httpBackend.flush();
      expect(scope.selectedIndex).toBe(0);
      expect(rootScope.selectedPerson).toEqual(peopleData.people[0]);
      
    });

    it('should default the sort to name', function() {
      expect(scope.currentSort).toBe('name');
    });

  });

  describe('on a failed load of people', function() {
    beforeEach(inject(function($injector, $rootScope, $controller){
      controller = $controller;
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET('/api/people').respond(500);
      scope = $rootScope.$new();
      rootScope = $rootScope;
      var $http = $injector.get('$http');
      personService = PersonService($http);
      controller('PersonMenuController', {'$scope':scope,'$rootScope':$rootScope,'PersonService': personService});

    }));

    it('should default person model to empty', function() {
      $httpBackend.flush();
      expect(scope.peopleListObj.peopleList.length).toBe(0);
    });
    
  });

});
