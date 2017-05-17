app.controller('registration', function ($scope, $http) {
    
    $scope.addUser = function () {
        $http({
            method: 'POST',
            url: '/addUser',
            data: $scope.user
        }).then(function success(response) {
            console.log(response.data);
            $scope.user = {};
            alert('User successfuly add!');
        }, function error(response) {
                throw new Error ('User is not add to database')
            }
        );
    };
});
