angular.module('cargaCamion')
  .directive('contListaProd', function($compile) {
    return {
      restrict: 'E',
      link: function(scope, element) {
        var boton_mas =  angular.element(document.getElementById('mas_btn'))
        var boton_menos =  angular.element(document.getElementById('menos_btn'))
        var listas = angular.element(document.getElementById('listas'))
        boton_mas.bind('click', function() {
          // console.log(element[0].lastElementChild);
          listas.append($compile("<lista-productos></lista-productos>")(scope))
          // console.log(listas[0].firstElementChild);
        })
        boton_menos.bind('click', function() {
          // console.log(element[0].lastElementChild);
          listas.remove(element[0].lastElementChild)
        })
      }
    }
  })
