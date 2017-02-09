/**
 * Created by joseaugustodemelo on 08/02/17.
 */
(function () {
    angular
        .module('exerAula03')
        .controller('PesquisarProdutoController', PesquisarProdutoController);

    function PesquisarProdutoController ($rootScope, $state) {
        var vm = this;

        vm.entidade = {};
        //vm.listProdutos = [];
        vm.pesquisar = pesquisar;
        vm.limpar = limpar;
        vm.alterarRota = alterarRota;

        function alterarRota(state) {
            $state.go(state);
        }

        function pesquisar() {

        }

        vm.gridOptions = {
            data: 'listProdutos',
            enableColumnMenus: false,
            enableRowSelection:false,
            rowTemplate:'app/templates/row-template.html',
            columnDefs: [
                { name: 'Id', field:'idProduto'},
                { name: 'Produto', field:'produto' },
                {
                    name: '', field: 'editar', width: 40,
                    cellTemplate: 'app/templates/cell-template-editar.html',
                    onClick:editar
                },
                {
                    name: '', field: 'excluir', width: 40,
                    cellTemplate: 'app/templates/cell-template-excluir.html',
                    onClick:excluir
                }
            ]
        };

        function excluir(index) {
            $rootScope.listProdutos.splice(index, 1);

            //PdAlertService.showSuccess('Registro excluido com sucesso!', 'Ok');

            limpar();
        }
        
        function editar () {
            vm.alterarRota('cadastrarProduto', {id:vm.entidade.id})
        }

        function limpar () {
            vm.entidade = {};
//            vm.listProdutos = [];
        }
    }

})();