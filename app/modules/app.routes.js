angular
    .module('app.routes', [
        'app.core'
    ])
    .config(routes);

routes.$inject = ['$routeProvider'];

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/features/home/home.view.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .when('/experiences', {
            templateUrl: 'app/features/experiences/experiences.view.html',
            controller: 'experiencesController',
            controllerAs: 'vm'
        })
        .when('/experiences/:id', {
            templateUrl: 'app/features/experiences/experience-details.view.html',
            controller: 'experienceDetailsController',
            controllerAs: 'vm'
        })
        .when('/projects', {
            templateUrl: 'app/features/projects/projects.view.html',
            controller: 'projectsController',
            controllerAs: 'vm'
        })
        .when('/projects/:id', {
            templateUrl: 'app/features/projects/project-details.view.html',
            controller: 'projectDetailsController',
            controllerAs: 'vm'
        })
        .when('/about', {
            templateUrl: 'app/features/about/about.view.html',
            controller: 'aboutController',
            controllerAs: 'vm'
        })
        .when('/about/faq', {
            templateUrl: 'app/features/about/faq.view.html',
            controller: 'faqController',
            controllerAs: 'vm'
        })
        .when('/languages', {
            templateUrl: 'app/features/languages/languages.view.html',
            controller: 'languagesController',
            controllerAs: 'vm'
        })
        .when('/educations', {
            templateUrl: 'app/features/educations/educations.view.html',
            controller: 'educationsController',
            controllerAs: 'vm'
        })
        .when('/skills', {
            templateUrl: 'app/features/skills/skills.view.html',
            controller: 'skillsController',
            controllerAs: 'vm'
        })
        .when('/skills/:id', {
            templateUrl: 'app/features/skills/skill-details.view.html',
            controller: 'skillDetailsController',
            controllerAs: 'vm'
        })
        .otherwise({
            templateUrl: 'app/layout/notfound.view.html',
            controller: 'notFoundController',
            controllerAs: 'vm'
        });
}