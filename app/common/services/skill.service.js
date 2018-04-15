angular
    .module('app.services')
    .service('skillService', skillService);

skillService.$inject = ['dataService'];

function skillService(dataService) {
    this.getSkills = function (callback) {
        dataService.getAllData(function (data) {
            var skills = data.skills;

            if (callback)
                callback(skills);
        });
    };

    this.getSkill = function (key, callback) {
        if (!key) {
            if (callback)
                callback(null);

            return;
        }

        dataService.getAllData(function (data) {
            var skills = data.skills.filter(function (item) {
                return item.key == key;
            });

            if (skills.length == 0) {
                if (callback)
                    callback(null);
    
                return;
            }

            if (callback)
                callback(skills[0]);
        });
    };
}