'use strict';


describe('The person service', function() {

  var expectedPeople = {
    'people':[
      {
        'name':'Todd Jordan'
      },
      {
        'name':'Chris Hemp'
      },
      {
        'name':'Rob Ritchey'
      }
    ]
  };

  var $httpBackend;
  var $http;
  var personService;


  describe('when loading people', function() {

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $http = $injector.get('$http');

    }));

    it('should populate person list on successful load', function() {
      $httpBackend.whenGET('/api/people').respond(expectedPeople);
      personService = PersonService($http);
      personService.loadPeople();
      $httpBackend.flush();
      expect(personService.getPeopleListObj().peopleList).toEqual(expectedPeople.people);
    });

    it('should clear person list on failed load', function() {
      $httpBackend.whenGET('/api/people').respond(500);
      personService = PersonService($http);
      personService.loadPeople();
      $httpBackend.flush();
      expect(personService.getPeopleListObj().peopleList).toEqual([]);
    });

  });

});
