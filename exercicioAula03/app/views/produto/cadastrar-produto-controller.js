/**
 * Created by joseaugustodemelo on 08/02/17.
 */
(function () {
    angular
        .module('exerAula03')
        .controller('CadastraProdutoController', CadastraProdutoController);

    function CadastraProdutoController ($rootScope, $state) {
        var vm = this;

        vm.entidade = {};
        vm.salvar = salvar;
        vm.alterarRota = alterarRota;

        function salvar () {

        }

        function alterarRota(state) {
            $state.go(state);
        }
    }

})();