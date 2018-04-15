angular
    .module('app.layout')
    .controller('defaultController', defaultController);

defaultController.$inject = ['$rootScope', '$document', 'strings', 'dataService'];

function defaultController($rootScope, $document, strings, dataService) {
    $document[0].title = strings.APP_TITLE;

    dataService.getAllData(function (data) {
        $rootScope.titles = data.titles;
        $document[0].title = data.my.name;
    });
}