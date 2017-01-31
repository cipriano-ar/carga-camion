angular.module('cargaCamion')
  .directive('listaProductos', function($compile) {
    return {
      restrict: 'E',
      templateUrl: "app/directives/lista-productos.html",
    }
  })
