angular
    .module('app.layout', [
        'app.core'
    ]);

angular
    .module('app.home', [
        'app.core'
    ]);

angular
    .module('app.experiences', [
        'app.core'
    ]);

angular
    .module('app.projects', [
        'app.core'
    ]);

angular
    .module('app.about', [
        'app.core'
    ]);

angular
    .module('app.languages', [
        'app.core'
    ]);

angular
    .module('app.education', [
        'app.core'
    ]);

angular
    .module('app.skills', [
        'app.core'
    ]);

angular
    .module('app.controllers', [
        'app.layout',
        'app.home',
        'app.experiences',
        'app.projects',
        'app.about',
        'app.languages',
        'app.education',
        'app.skills'
    ]);