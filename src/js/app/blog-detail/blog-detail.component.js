'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($location, $routeParams, $scope) {

            var blogItems = [
                {title: "Some title", id: 1, description: "This is a book", publishedDate: "2016-11-2"},
                {title: "Many titles", id: 2, description: "This was a book", publishedDate: "2016-11-3"},
                {title: "One title", id: 3, description: "This will be a book", publishedDate: "2016-11-4"},
                {title: "Plethora of titles", id: 4, description: "This has always been a book", publishedDate: "2016-11-5"}
            ];

            $scope.title = "Blog " + $routeParams.id;
            $scope.notFound = true;

            angular.forEach(blogItems, function (post) {
                if (post.id == $routeParams.id) {
                    $scope.notFound = false;
                    $scope.post = post;
                }
            });

            if ($scope.notFound) {
                console.log("Not found");
                $location.path("/404");
            }
        }
});