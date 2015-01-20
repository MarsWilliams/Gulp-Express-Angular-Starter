'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'Boilerplate Goodness!';

}

controllersModule.controller('HomeCtrl', HomeCtrl);