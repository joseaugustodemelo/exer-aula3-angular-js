/**
 * Created by joseaugustodemelo on 08/02/17.
 */
(function () {
    'use strict';

    angular.module('exerAula03')
        .config(config);

    function config($stateProvider) {
        const cadastrarProduto = {
            name:'cadastrarProduto',
            url:'/cadastrar-produto/:id',
            templateUrl:'app/views/produto/cadastrar-produto.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/produto/cadastrar-produto-controller.js');
                }
            }
        };

        const pesquisarProduto = {
            name:'pesquisarProduto',
            url:'/pesquisar-produto',
            templateUrl:'app/views/produto/pesquisar-produto.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/produto/pesquisar-produto-controller.js');
                }
            }
        };

        $stateProvider
            .state('cadastrarProduto', cadastrarProduto)
            .state('pesquisarProduto', pesquisarProduto);
    }

})();