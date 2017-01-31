// ++++++ DEFINICION DE ESTADOS ++++++
// INICIO
//***** Menu inicial
var estado_Inicio = {
  url: '/',
  controller: 'InicioController',
  templateUrl: 'app/views/inicio.html',
}

// CREAR
//***** Donde se creará y se ingresarán los datos de la carga.
var estado_Crear = {
  url: '/crear',
  controller: 'CrearController',
  templateUrl: 'app/views/crear.html',
}

// CONSULTAR
//***** Formulario de búsqueda y resultados.
var estado_Consultar = {
  url: '/consulta',
  controller: 'ConsultarController',
  templateUrl: 'app/views/consultar.html',
}

// DETALLE
//***** Detalle de una carga.
var estado_Detalle = {
  url: '/detalle-carga-{fecha}',
  controller: 'DetalleController',
  templateUrl: 'app/views/detalle.html',
}

// MODIFICAR
//***** Ver si uso el mismo estado de "Detalle" para modificar.
var estado_Modificar = {
  url: '/modificar-carga-{fecha}',
  controller: 'ModificarController',
  templateUrl: 'app/views/modificar.html',
}

// ------- FIN DEFINICION DE ESTADOS -------

angular.module('cargaCamion', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('Inicio', estado_Inicio)
      .state('Crear', estado_Crear)
      .state('Consultar', estado_Consultar)
      .state('Detalle', estado_Detalle)
    $urlRouterProvider.otherwise('/')
  })
