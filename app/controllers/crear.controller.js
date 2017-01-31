angular.module('cargaCamion')
  .controller('CrearController', function($scope, $http, Cargas) {

    $http.get('app/data.json').then(function(response) {
      $scope.datos = response.data
      // console.log($scope.datos);
    })

    $scope.Cargas = Cargas
    $scope.cargaActual = {
      fecha: '',
      productos: [],
      pallets: [],
    }

    // console.log($scope.cargaActual)
    // console.log($scope.Cargas)
  })
