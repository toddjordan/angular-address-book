'use strict';
/* global PersonService */

angular.module('addressBook', [
  'addressBook.personMenu',
  'addressBook.personDetails'
]).
factory('PersonService', function($http) {
  return PersonService($http);
});
