angular
    .module('app.strings', [])
    .constant('strings', strings());

function strings() {
    var storage = angular.injector(['app.storage', 'ng'])
                         .get('storage');

    return {
        DATA_FILE_URL: 'app/common/data/data.' + storage.getLang() + '.json'
    };
}