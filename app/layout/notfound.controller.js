angular
    .module('app.layout')
    .controller('notFoundController', notFoundController);

notFoundController.$inject = ['$document', 'strings'];

function notFoundController($document, strings) {
    var vm = this;
}