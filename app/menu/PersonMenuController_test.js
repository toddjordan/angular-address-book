'use strict';
/* global getJSONFixture, PersonService */

describe('The person menu controller', function() {
  var $httpBackend, controller, menuController, scope, rootScope, peopleData, personService;

  jasmine.getJSONFixtures().fixturesPath= 'base/data';
  peopleData = getJSONFixture('people.json');

  beforeEach(module('addressBook.personMenu'));
  
  var setupSuccessfulPeopleFetch = function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET('/api/people').respond(
        peopleData
      );
  };

  var setupFailedPeopleFetch = function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET('/api/people').respond(500);
  };

  var setupPersonService = function($injector) {
      var $http = $injector.get('$http');
      return PersonService($http);
  };

  describe('on a successful load of people', function() {
    beforeEach(inject(function($injector, $rootScope, $controller) {
      controller = $controller;
      setupSuccessfulPeopleFetch($injector);
      scope = $rootScope.$new();
      rootScope = $rootScope;
      personService = setupPersonService($injector);
      controller('PersonMenuController', {'$scope':scope, '$rootScope':rootScope, 'PersonService': personService});

    }));
    it('should load all people into scope', function() {

      $httpBackend.flush();
      expect(scope.peopleList.length).toBe(4);
    });

    it('should select the first person in the list', function() {
      $httpBackend.flush();
      expect(scope.selectedIndex).toBe(0);
      expect(rootScope.selectedPerson).toEqual(peopleData.people[0]);
      
    });

    it('should default the sort to name', function() {
      expect(scope.currentSort).toBe('name');
    });

    it('should default ascending', function() {
      expect(scope.isSortAscending()).toBe(true);
    });

  });

  describe('on a failed load of people', function() {
    beforeEach(inject(function($injector, $rootScope, $controller){
      controller = $controller;
      setupFailedPeopleFetch($injector);
      scope = $rootScope.$new();
      rootScope = $rootScope;
      personService = setupPersonService($injector);
      controller('PersonMenuController', {'$scope':scope,'$rootScope':$rootScope,'PersonService': personService});

    }));

    it('should default person model to empty', function() {
      $httpBackend.flush();
      expect(scope.peopleList.length).toBe(0);
    });
    
  });

  describe('when clicking sort ascending, ', function() {
    beforeEach(inject(function($injector, $rootScope, $controller) {
      controller = $controller;
      setupSuccessfulPeopleFetch($injector);
      $rootScope.selectedPerson = {};
      scope = $rootScope.$new();
      rootScope = $rootScope;
      personService = setupPersonService($injector);

    }));

    it('should keep the current sort of name', function() {
      controller('PersonMenuController', {'$scope':scope,'PersonService': personService});
      scope.sortAscending();
      expect(scope.currentSort).toBe('name');

    });

    it('should change the current sort of -name to name', function() {
      scope.currentSort = '-name';
      controller('PersonMenuController', {'$scope':scope,'PersonService': personService});
      scope.sortAscending();
      expect(scope.currentSort).toBe('name');
    });
  });

  describe('when clicking sort descending, ', function() {
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


    }));
  

    it('should keep the current sort of -name', function() {
      scope.currentSort = '-name';
      controller('PersonMenuController', {'$scope':scope,'PersonService': personService});
      scope.sortDescending();
      expect(scope.currentSort).toBe('-name');
  
    });

    it('should change the current sort of name to -name', function() {
      controller('PersonMenuController', {'$scope':scope,'PersonService': personService});
      scope.sortDescending();
      expect(scope.currentSort).toBe('-name');

    });
  });

});
