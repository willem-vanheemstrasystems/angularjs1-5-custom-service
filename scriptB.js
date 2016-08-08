var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope, stringService) {
        // Define a transform function
        $scope.transformString = function(input) {
            // Set the output property
            // to the new return value
            // of the string service
            // processString method
            $scope.output = stringService.processString(input);
        };
    });
