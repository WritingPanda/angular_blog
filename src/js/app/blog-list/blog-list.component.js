'use strict';

angular.module('blogList').
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function($scope) {

            var blogItems = [
                {title: "Some title", id: 1, description: "This is a book"},
                {title: "Many titles", id: 2, description: "This was a book"},
                {title: "One title", id: 3, description: "This will be a book"},
                {title: "Plethora of titles", id: 4, description: "This has always been a book"}
            ];

            $scope.items = blogItems;

            console.log("hello");
            $scope.title = "Hi there";
            $scope.clicks = 0;
            $scope.someClickTest = function () {
                console.log("Clicked!");
                $scope.clicks += 1;
                $scope.title = "Clicked " + $scope.clicks + " times.";
            }
        }
    });