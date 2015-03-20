'use strict';

describe('In the Address Book,', function() {
  var firstNameSortedPeople = [
    'Adam Wright',
    'Allison Murray',
    'Douglas Cho',
    'Joe Manfrey'
  ];

  describe('the person menu', function() {
    it('should list people ordered by first name', function() {
      var personList = element.all(by.repeater('person in people'));
      expect(personList.count()).toEqual(4);
      for (var i;i<personList.length;i++) {
        expect(personList.get(i).getText()).toEqual(firstNameSortedPeople[i]);
      }

    });

    it('should be sortable by last name', function() {

    });
    
  });

  describe('the person menu default selection',  function() {
    it('should first person in the list', function() {

    });
    
    it('should load the default selected user profile in the details area', function() {

    });
  });

  describe('selecting a person', function() {
    it('should load the selected person in the detail area', function() {

    });
    
  });

  describe('a person loaded in the details area', function () {
    it('should display an image of the person', function() {

    });

    it('should should show that persons education and experience', function() {

    });
  });

});
