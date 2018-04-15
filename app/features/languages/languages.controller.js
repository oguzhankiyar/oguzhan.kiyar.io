angular
    .module('app.languages')
    .controller('languagesController', languagesController);

languagesController.$inject = ['languageService'];

function languagesController(languageService) {
    var vm = this;
    
    languageService.getLanguages(function (data) {
        vm.languages = data;
    });
}