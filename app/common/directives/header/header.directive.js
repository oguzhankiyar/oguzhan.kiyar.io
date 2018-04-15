angular
    .module('app.header')
    .directive('appHeader', headerDirective);

    headerDirective.$inject = ['dataService'];

function headerDirective(dataService) {
    var directive = {
        controller: controller,
        controllerAs: 'header',
        templateUrl: 'app/common/directives/header/header.directive.html'
    };

    return directive;

    function controller() {
        var vm = this;

        dataService.getAllData(function (data) {
            vm.photo = data.my.photo;
            vm.name = data.my.name;
            vm.title = data.my.title;

            vm.links = data.links;
        });
    }
}