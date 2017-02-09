/**
 * Created by joseaugustodemelo on 06/02/17.
 */
(function () {
    'use strict';

    angular.module('exerAula03')
        .directive('exerAula03InputText', exerAula03InputText);

    function exerAula03InputText () {
        return {
            restrict: 'E',
            require: '^form',
            templateUrl: 'arquitetura/directives/exer-aula03-input-text/exer-aula03-input-text.directives.html',
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '=',
                colspan: '@'
            },
            link: link
        };

        function link($scope, element, attrs, formCtrl) {

            $scope.formCtrl = formCtrl;

            $scope.classColspan = 'col-md-' + ($scope.colspan || 3);

            $scope.inputName = 'exerAula03InputText' + $scope.$id;
        }
    }
})();