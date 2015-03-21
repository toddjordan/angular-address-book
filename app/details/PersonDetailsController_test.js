'use strict';
/* global getJSONFixture */

describe('In the person details controller', function() {
  var controller, rootScope, scope, stubSelection;

  jasmine.getJSONFixtures().fixturesPath= 'base/data';
  stubSelection = getJSONFixture('people.json').people[0];

  beforeEach(module('addressBook.personDetails'));
  describe('on person selection', function() {
    beforeEach(inject(function($injector, $rootScope, $controller) {
      controller = $controller;
      rootScope = $rootScope;
      rootScope.selectedPerson = stubSelection;
      scope = $rootScope.$new();
      controller('PersonDetailsController', {'$scope': scope,'$rootScope':rootScope});
      rootScope.$broadcast('personSelected', stubSelection);
    }));

    it('should load selected person to scope', function() {
      expect(scope.selectedPerson).toEqual(stubSelection);
    });

  });

});
