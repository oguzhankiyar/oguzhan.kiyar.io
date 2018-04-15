angular
    .module('app.education')
    .controller('educationsController', educationsController);

educationsController.$inject = ['educationService'];

function educationsController(educationService) {
    var vm = this;
    
    educationService.getEducations(function (data) {
        vm.educations = data;
    });
}