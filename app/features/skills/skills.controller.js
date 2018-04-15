angular
    .module('app.skills')
    .controller('skillsController', skillsController);

skillsController.$inject = ['skillService'];

function skillsController(skillService) {
    var vm = this;

    skillService.getSkills(function (data) {
        vm.skills = data;
    });
}