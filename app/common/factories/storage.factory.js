angular
    .module('app.storage', [])
    .factory('storage', storage);

storage.$inject = ['$window'];

function storage($window) {
    var langKey = 'lang';
    var defaultLang = 'tr';

    var localStorage = $window.localStorage;

    return {
        getLang: function () {
            var lang = localStorage.getItem(langKey);
        
            if (!lang)
                this.setLang(defaultLang);

            return lang;
        },
        setLang: function (lang) {
            localStorage.setItem(langKey, lang);
        }
    };
}