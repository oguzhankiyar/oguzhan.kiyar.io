angular
    .module('app.skills')
    .controller('skillDetailsController', skillDetailsController);

skillDetailsController.$inject = ['$routeParams', 'skillService'];

function skillDetailsController($routeParams, skillService) {
    var vm = this;

    skillService.getSkill($routeParams.id, function (data) {
        vm.skillDetails = data;
    });
}