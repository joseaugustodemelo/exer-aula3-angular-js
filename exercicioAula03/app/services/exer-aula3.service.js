angular.module('exerAula03')
    .service('ExerAula03AlertService', ExerAula03AlertService);

function ExerAula03AlertService(toastr) {

    this.showSuccess = showSuccess;
    this.showError = showError;

    function showSuccess(mensagem, titulo) {
        titulo = titulo || 'Ok';

        toastr.success(mensagem, titulo);
    }

    function showError(mensagem, titulo) {
        titulo = titulo || 'Erro';

        toastr.error(mensagem, titulo);
    }
}