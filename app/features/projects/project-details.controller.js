angular
    .module('app.projects')
    .controller('projectDetailsController', projectDetailsController);

projectDetailsController.$inject = ['$routeParams', 'projectService'];

function projectDetailsController($routeParams, projectService) {
    var vm = this;
    
    projectService.getProject($routeParams.id, function (data) {
        vm.projectDetails = data;
    });
}