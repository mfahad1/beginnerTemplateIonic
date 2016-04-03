
(function(){

  'use strict';

  angular
    .module('app.landing')
    .controller('LandingCtrl', LandingCtrl);

  /* @ngInject */
  function LandingCtrl(){
    var vm = this;

    vm.message = "Landing View";

  }

}());
