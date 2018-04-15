angular
    .module('app.services')
    .service('languageService', languageService);

languageService.$inject = ['dataService'];

function languageService(dataService) {
    this.getLanguages = function (callback) {
        dataService.getAllData(function (data) {
            var languages = data.languages;

            if (callback)
                callback(languages);
        });
    };
}