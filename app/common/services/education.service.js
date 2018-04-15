angular
    .module('app.services')
    .service('educationService', educationService);

educationService.$inject = ['dataService'];

function educationService(dataService) {
    this.getEducations = function (callback) {
        dataService.getAllData(function (data) {
            var educations = data.educations;

            if (callback)
                callback(educations);
        });
    };
}