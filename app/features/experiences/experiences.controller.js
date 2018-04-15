angular
    .module('app.experiences')
    .controller('experiencesController', experiencesController);

experiencesController.$inject = ['experienceService'];

function experiencesController(experienceService) {
    var vm = this;

    experienceService.getExperiences(function (data) {
        vm.experiences = data;
    });
}