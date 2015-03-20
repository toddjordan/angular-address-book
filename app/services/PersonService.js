'use strict';

function PersonService($http) {
  var peopleListObj = {
    peopleList:[]
  };

  return {
    
    
    loadPeople: function() {
      $http.get('/api/people').
        success(function(data, status, headers, config) {
          if(data.people) {
            peopleListObj.peopleList = data.people;
          }
        }).
        error(function(data, status, headers, config) {
          peopleListObj.peopleList = [];
        });
    },

    
    getPeopleListObj: function() {
      return peopleListObj;
    }
    
  };
}
