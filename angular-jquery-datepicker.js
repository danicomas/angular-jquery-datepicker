'use strict';
angular.module('angular-jquery-datepicker', []).factory('datepicker', [function () {
    return $.datepicker;
}]).provider('$datepicker', function () {
    return {
        setDefaults: function (language) {
            $.datepicker.setDefaults($.datepicker.regional[language]);
        },
        $get: function () {
            return {

            }
        }
    }
}).directive('datepicker', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr, ctrl) {
            elem.datepicker(
                {
                    showOn: "button",
                    buttonImage: "http://www.ingenslabs.com/proassist/images/icons/Calendar.png",
                    buttonImageOnly: true
                });
        }
    };
});