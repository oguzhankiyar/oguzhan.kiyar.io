angular
    .module('app.projects')
    .controller('projectsController', projectsController);

projectsController.$inject = ['projectService'];

function projectsController(projectService) {
    var vm = this;
    
    projectService.getProjects(function (data) {
        vm.projects = data;
    });
}