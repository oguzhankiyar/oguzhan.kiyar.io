angular
    .module('app.about')
    .controller('aboutController', aboutController);

aboutController.$inject = ['aboutService'];

function aboutController(aboutService) {
    var vm = this;
    
    aboutService.getAbout(function (data) {
        vm.about = data;
    });
}