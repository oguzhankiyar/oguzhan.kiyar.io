angular
    .module('app.services')
    .service('experienceService', experienceService);

experienceService.$inject = ['dataService'];

function experienceService(dataService) {
    this.getExperiences = function (callback) {
        dataService.getAllData(function (data) {
            var experiences = data.experiences;

            if (callback)
                callback(experiences);
        });
    };

    this.getExperience = function (key, callback) {
        if (!key) {
            if (callback)
                callback(null);

            return;
        }

        dataService.getAllData(function (data) {
            var experiences = data.experiences.filter(function (item) {
                return item.key == key;
            });

            if (experiences.length == 0) {
                if (callback)
                    callback(null);
    
                return;
            }

            if (callback)
                callback(experiences[0]);
        });
    };
}