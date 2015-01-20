'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'DIYS killet!';

}

controllersModule.controller('HomeCtrl', HomeCtrl);