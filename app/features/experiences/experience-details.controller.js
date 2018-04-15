angular
    .module('app.experiences')
    .controller('experienceDetailsController', experienceDetailsController);

experienceDetailsController.$inject = ['$routeParams', 'experienceService'];

function experienceDetailsController($routeParams, experienceService) {
    var vm = this;
    
    experienceService.getExperience($routeParams.id, function (data) {
        vm.experienceDetails = data;
    });
}