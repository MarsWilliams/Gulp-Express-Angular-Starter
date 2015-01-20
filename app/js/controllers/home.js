'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'DIY Skillet!';

}

controllersModule.controller('HomeCtrl', HomeCtrl);