angular
    .module('app.home')
    .controller('homeController', homeController);

homeController.$inject = ['dataService'];

function homeController(dataService) {
    var vm = this;

    dataService.getAllData(function (data) {
        vm.experiences = data.experiences.filter(function (item) {
            return item.showInMainPage == true;
        });

        vm.projects = data.projects.filter(function (item) {
            return item.showInMainPage == true;
        });

        vm.about = data.about;

        vm.languages = data.languages.filter(function (item) {
            return item.showInMainPage == true;
        });

        vm.educations = data.educations.filter(function (item) {
            return item.showInMainPage == true;
        });

        vm.skills = data.skills.filter(function (item) {
            return item.showInMainPage == true;
        });

        vm.interests = data.interests.filter(function (item) {
            return item.showInMainPage == true;
        });
    });
}