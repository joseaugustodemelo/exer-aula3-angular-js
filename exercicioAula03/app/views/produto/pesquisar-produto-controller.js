/**
 * Created by joseaugustodemelo on 08/02/17.
 */
(function () {
    angular
        .module('exerAula03')
        .controller('PesquisarProdutoController', PesquisarProdutoController);

    function PesquisarProdutoController ($rootScope, $state, ExerAula03AlertService) {
        var vm = this;

        vm.entidade = {};
        vm.pesquisar = pesquisar;
        vm.alterarRota = alterarRota;

        function alterarRota(state, id) {
            if(id !== ""){
                $state.go(state, id);
            } else {
                $state.go(state);
            }
        }

        function pesquisar() {

        }

        vm.gridOptions = {
            data: 'listProdutos',
            enableColumnMenus: false,
            enableRowSelection:false,
            rowTemplate:'app/templates/row-template.html',
            columnDefs: [
                { name: 'Id', field:'id'},
                { name: 'Produto', field:'produto' },
                { name: 'Valor', field:'valor' },
                {
                    name: 'Editar',
                    field: 'editar',
                    width: 65,
                    cellTemplate: 'app/templates/cell-template-editar.html',
                    onClick:editar
                },
                {
                    name: 'Excluir',
                    field: 'excluir',
                    width: 65,
                    cellTemplate: 'app/templates/cell-template-excluir.html',
                    onClick:excluir
                }
            ]
        };

        function excluir(index) {
            $rootScope.listProdutos.splice(index, 1);
            ExerAula03AlertService.showSuccess('Registro excluido com sucesso!', 'Ok');
        }

        function editar (index) {
            //var entidadeAux = $rootScope.listProdutos[index];
            //vm.alterarRota('cadastrarProduto', {id:entidadeAux.id});
            vm.alterarRota('cadastrarProduto', {id:index});
        }

    }

})();