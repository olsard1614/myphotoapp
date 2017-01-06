angular.module('myApp').controller('mainController', ['$scope',
    function($scope) {
        $scope.test = "Hello";

        $scope.pictures = [
        'http://www.petsworld.in/blog/wp-content/uploads/2014/07/golden-puppy-with-kittens.jpg',
        'https://s-media-cache-ak0.pinimg.com/originals/30/27/d0/3027d0b550958fa1871e0a4dd475fba6.jpg',
        'http://data.whicdn.com/images/897396/large.png'
        ];
    }

]);