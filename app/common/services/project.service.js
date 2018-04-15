angular
    .module('app.services')
    .service('projectService', projectService);

projectService.$inject = ['dataService'];

function projectService(dataService) {
    this.getProjects = function (callback) {
        dataService.getAllData(function (data) {
            var projects = data.projects;

            if (callback)
                callback(projects);
        });
    };

    this.getProject = function (key, callback) {
        if (!key) {
            if (callback)
                callback(null);

            return;
        }

        dataService.getAllData(function (data) {
            var projects = data.projects.filter(function (item) {
                return item.key == key;
            });

            if (projects.length == 0) {
                if (callback)
                    callback(null);
    
                return;
            }

            if (callback)
                callback(projects[0]);
        });
    };
}