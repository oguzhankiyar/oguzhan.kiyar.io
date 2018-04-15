angular
    .module('app.services')
    .service('dataService', dataService);

dataService.$inject = ['strings', '$http'];

function dataService(strings, $http) {
    this.getAllData = function (callback) {
        $http
            .get(strings.DATA_FILE_URL)
            .then(function (response) {
                if (callback)
                    callback(response.data);
            });
    }
}