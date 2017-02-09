/**
 * Created by joseaugustodemelo on 06/02/17.
 */
(function () {
    angular.module('exerAula03')
        .controller('IndexController', IndexController);

    function IndexController($rootScope, $state) {
        var vm = this;
        $rootScope.listProdutos = [];
        vm.alterarRota = alterarRota;

        activate();

        function alterarRota(state) {
            $state.go(state);
        }

        function activate() {
            alterarRota('pesquisarProduto');
        }
    }
})();



