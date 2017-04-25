
app.controller('test', function ($scope, $http) {
    console.log('TEST');

    $http({
        method: 'GET',
        url: '/getTopic'
    }).then(function successCallback(response) {
        $scope.topics = response.data;
    }, function errorCallback(response) {
        throw new Error('Error to load TOPIC');
    });

    $scope.setTopic = function (topic) {
        
        $scope.topicOption = {name: topic};

        $http({
            method: 'POST',
            url: '/getTests',
            data: $scope.topicOption
        }).then(function successCallback(response) {
            $scope.tests = response.data;
        }, function errorCallback(response) {
            throw new Error('Error to load TESTS');
        });
    }
});