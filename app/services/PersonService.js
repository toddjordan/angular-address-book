'use strict';

function PersonService($http) {
  var nullPerson = {
    name:""
  };
  var peopleListObj = {
    peopleList:[],
    getFirst:function() {
      return this.peopleList.length>0?peopleList[0]:nullPerson;
    }
  };

  return {
    
    
    loadPeople: function(success, fail) {
      $http.get('/api/people').
        success(function(data, status, headers, config) {
          if(data.people) {
            peopleListObj.peopleList = data.people;
            success();
          }
        }).
        error(function(data, status, headers, config) {
          peopleListObj.peopleList = [];
          fail();
        });
    },

    
    getPeopleListObj: function() {
      return peopleListObj;
    }
    
  };
}
