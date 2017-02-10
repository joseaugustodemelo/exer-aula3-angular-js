/**
 * Created by joseaugustodemelo on 08/02/17.
 */
(function () {
    angular
        .module('exerAula03')
        .controller('CadastraProdutoController', CadastraProdutoController);

    function CadastraProdutoController ($rootScope, $state, ExerAula03AlertService, $stateParams) {
        var vm = this;
        var row = -1;
        vm.entidade = {};
        vm.salvar = salvar;
        vm.alterarRota = alterarRota;

        if($stateParams.id){
            row = $stateParams.id;
            vm.entidade.id =  $rootScope.listProdutos[row].id;
            vm.entidade.produto =  $rootScope.listProdutos[row].produto;
            vm.entidade.valor =  $rootScope.listProdutos[row].valor;
        }

        function salvar () {
            if ( vm.frmCadastrar.$invalid) {

                angular.forEach( vm.frmCadastrar.$error, function (errorField) {
                    for (var i = 0; i < errorField.length; i++) {
                        errorField[i].$setTouched();
                    }
                });


                ExerAula03AlertService.showError('Verifique os campos inválidos');
                return;
            }

            if($stateParams.id) {
                $rootScope.listProdutos[row] = vm.entidade;
            } else{
                $rootScope.listProdutos.push(vm.entidade);
            }

            limpar();

            ExerAula03AlertService.showSuccess('Registro salvo com sucesso!');
        }

        function limpar() {
            vm.entidade = {};
            vm.frmCadastrar.$setUntouched();
        }

        function alterarRota(state) {
            $state.go(state);
        }
    }

})();