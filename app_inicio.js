angular.module('myApp', ['ngAnimate'])
    .controller('ctrlAnimate', function($scope, $http) {

        $http.get('productos.json')
        .then(function(res){
            $scope.listaProductos = res.data;
        })
        // http://aspirantes.hablacreativo.com/api/v1/admission_test
        $scope.agregarProducto = function() {
            $scope.listaProductos.push({
                nombre: $scope.producto
            });

            $scope.producto = '';
        }

        $scope.eliminarProducto = function() {
            $scope.listaProductos.pop();
        }
        
        $scope.obtenerClima = function() {
            var url = 'http://aspirantes.hablacreativo.com/api/v1/admission_test';
            $http.get(url)
            .then(function(res){
                $scope.info = res.data.data["table-data"].values
                console.log(res.data.data["table-data"].values);
            })
        }
    })
