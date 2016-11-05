'use strcit';

angular.module('confirmClick').
    directive('confirmClick', function() {
        return {
            scope: {
                post: '=post'
            },
            restrict: "E",
            template: "<a ng-href='/blog/{{ post.id }}'>{{ post.title }} {{ post.publishedDate }}</a>",
            link: function (scope, element, attr) {
                console.log(scope);
                // console.log(element);
                // console.log(attr);
            }
        }
});