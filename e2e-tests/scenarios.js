'use strict';

describe('In the Address Book,', function() {
  var firstNameSortedPeople = [
    'Adam Wright',
    'Allison Murray',
    'Douglas Cho',
    'Joe Manfrey'
  ];

  describe('the person menu', function() {
    it('should list people ordered by first name ascending', function() {
      browser.get('http://localhost:8080/app');
      var personList = element.all(by.repeater('person in peopleList'));
      expect(personList.count()).toEqual(4);
      for (var i;i<personList.length;i++) {
        expect(personList.get(i).getText()).toEqual(firstNameSortedPeople[i]);
      }
    });

    describe('when sorting descending', function() {
      it('should list people ordered by first name descending', function() {
        var descendingPeople = firstNameSortedPeople.slice().reverse();
        browser.get('http://localhost:8080/app');
        var personList = element.all(by.repeater('person in peopleList'));
        expect(personList.count()).toEqual(4);
        for (var i;i<personList.length;i++) {
          expect(personList.get(i).getText()).toEqual(descendingPeople[i]);
        }
      });
      
    });
    
  });

  describe('the person menu default selection',  function() {
    it('should first person in the list', function() {
      browser.get('http://localhost:8080/app');
      var personList = element.all(by.repeater('person in peopleList'));
      expect(personList.get(0).getText()).toEqual(firstNameSortedPeople[0]);
    });
    
    it('should load the default selected user profile in the details area', function() {
      browser.get('http://localhost:8080/app');
      expect(element(by.css('.summary>h3')).getText()).toBe(firstNameSortedPeople[0]);
    });
  });

  describe('selecting a person', function() {
    it('should load the selected person in the detail area', function() {
      browser.get('http://localhost:8080/app');
      var personList = element.all(by.repeater('person in peopleList'));
      personList.get(1).click();
      expect(element(by.css('.summary>h3')).getText()).toBe(firstNameSortedPeople[1]);
    });
    
  });

  describe('a person loaded in the details area', function () {
    it('should display an image of the person', function() {
      browser.get('http://localhost:8080/app');
      var personList = element.all(by.repeater('person in peopleList'));
      personList.get(2).click();
      expect(element(by.css('.profile-image')).getAttribute('src')).toBe('http://localhost:8080/app/images/doug.jpg');
    });


  });

});
