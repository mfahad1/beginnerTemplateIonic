

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('rest', rest);

  /* @ngInject */
  function dataService(Restangular){

    Restangular.setBaseUrl('http://localhost:7040/api');

    return {

    };


  }

}());
