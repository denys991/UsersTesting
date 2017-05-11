
app.controller('test', function ($scope, $http) {
    console.log('TEST');
    $scope.showtest = false;

    
    $scope.getTopic = function () {
        $http({
            method: 'GET',
            url: '/get-topic'
        }).then(function success(response) {
            $scope.topics = response.data;
        }, function error(response) {
            console.log(response.statusText);
        });
    };

    $scope.getTopic();
    
    $scope.setTopic = function (topic) {
        
        $scope.topicOption = {name: topic};

        $http({
            method: 'POST',
            url: '/tests',
            data: $scope.topicOption
        }).then(function success(response) {
            $scope.tests = response.data;
            $scope.showtest = false;
        }, function error(response) {
            console.log(response.statusText);
        });
    };

    $scope.addTest = function () {
        $scope.tests = false;
        $scope.showtest = true;
        $scope.test = {
            topic: '',
            question: '',
            answer: []
        };
    };
    $scope.saveTest = function (test) {
        $scope.test.rightAnswer = $('input[type="radio"]:checked').prev('input').val();
        
        $http({
            method: 'POST',
            url: '/save-test',
            data: $scope.test
        }).then(function success(response) {
            console.log(response.statusText);
        }, function error(response) {
            console.log(response.statusText);
        });
    };

    $scope.$watch('topics', function (newVal, oldVal) {
        $scope.getTopic();
    });

    $scope.checkTest = function () {
        $scope.checkedTests= $('input[type="radio"]:checked');
        $scope.chooseAnswer = [];
        $scope.checkedTests.each( function (index, elem) {
            $scope.chooseAnswer.push($(elem).val());
        });

        $http({
            method: 'POST',
            url: '/tests',
            data: $scope.topicOption
        }).then(function success(response) {
            $scope.answer = response.data.map(function (obj) {
                return obj.rightAnswer;
            });
            var count = 0;
            for (var i = 0; i < $scope.answer.length; i++){
                if ($scope.chooseAnswer[i] == $scope.answer[i]){++count}
            }

            alert('Right answers:' + count);
        }, function error(response) {
            console.log(response.statusText);
        });

    };


    /**************************/
    var tmpList = [];

    for (var i = 1; i <= 4; i++){
        tmpList.push({
            text: 'Answer ' + i,
            value: i
        });
    }

    $scope.list = tmpList;


    $scope.sortingLog = [];

    $scope.sortableOptions = {
        update: function(e, ui) {
            var logEntry = tmpList.map(function(i){
                return i.value;
            }).join(', ');
            $scope.sortingLog.push('Update: ' + logEntry);
        },
        stop: function(e, ui) {
            // this callback has the changed model
            var logEntry = tmpList.map(function(i){
                return i.value;
            }).join(', ');
            $scope.sortingLog.push('Stop: ' + logEntry);
        }
    };
});