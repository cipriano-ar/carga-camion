angular.module('app')
// ESTADOS
.config(function( $stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tab', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // NUEVA-CARGA (NC)
  // .state('tab.nueva-carga', {
  //   url: '/nueva-carga',
  //   views: {
  //     'tab-nueva-carga': {
  //       templateUrl: 'templates/tab-nueva-carga-tpl.html',
  //       controller: 'NuevaCargaCtrl'
  //     }
  //   }
  // })
  // NC-PRODUCTOS
  // .state('tab.nc-productos', {
  //   url: '/nueva-carga/ingreso-productos',
  //   views: {
  //     'nc-productos': {
  //       templateUrl: 'templates/nc-productos-tpl.html',
  //       controller: 'ncProductosCtrl'
  //     }
  //   }
  // })
  // // NC-PALLET
  // .state('tab.nc-pallet', {
  //   url: '/nueva-carga/pallet/:palletId',
  //   views: {
  //     'nc-pallet': {
  //       templateUrl: 'templates/nc-pallet-tpl.html',
  //       controller: 'ncPalletCtrl'
  //     }
  //   }
  // })
  // // NC-BINS
  // .state('tab.nc-bins', {
  //   url: '/nueva-carga/bins',
  //   views: {
  //     'nc-bins': {
  //       templateUrl: 'templates/nc-bins-tpl.html',
  //       controller: 'ncBinsCtrl'
  //     }
  //   }
  // })
  // // NC-NOTAS
  // .state('tab.nc-notas', {
  //   url: '/nueva-carga/notas',
  //   views: {
  //     'nc-notas': {
  //       templateUrl: 'templates/nc-notas-tpl.html',
  //       controller: 'ncNotasCtrl'
  //     }
  //   }
  // })
  // // CARGAS (listado)
  // .state('tab.cargas', {
  //     url: '/cargas',
  //     views: {
  //       'tab-cargas': {
  //         templateUrl: 'templates/tab-cargas-tpl.html',
  //         controller: 'CargasCtrl'
  //       }
  //     }
  //   })
  // // CARGA (detalle)
  // .state('tab.carga', {
  //   url: '/cargas/:cargaId',
  //   views: {
  //     'carga': {
  //       templateUrl: 'templates/carga-tpl.html',
  //       controller: 'CargaCtrl'
  //     }
  //   }
  // })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise('/')
})
//RUN
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  })
})
