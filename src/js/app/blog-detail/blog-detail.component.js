'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($routeParams, $scope) {

            var blogItems = [
                {title: "Some title", id: 1, description: "This is a book"},
                {title: "Many titles", id: 2, description: "This was a book"},
                {title: "One title", id: 3, description: "This will be a book"},
                {title: "Plethora of titles", id: 4, description: "This has always been a book"}
            ];

            $scope.title = "Blog " + $routeParams.id;
        }
});