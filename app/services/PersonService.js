'use strict';

function PersonService($http) {
  var peopleList = [];

  return {
    
    loadPeople: function(success, fail) {
      $http.get('/api/people').
        success(function(data, status, headers, config) {
          if(data.people) {
            peopleList = data.people;
            success();
          }
        }).
        error(function(data, status, headers, config) {
          peopleList = [];
          fail();
        });
    },

    
    getPeopleList: function() {
      return peopleList;
    }
    
  };
}
