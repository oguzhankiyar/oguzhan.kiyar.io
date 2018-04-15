angular
    .module('app.services')
    .service('aboutService', aboutService);

aboutService.$inject = ['dataService'];

function aboutService(dataService) {
    this.getAbout = function (callback) {
        dataService.getAllData(function (data) {
            var about = data.about;

            if (callback)
                callback(about);
        });
    };
}