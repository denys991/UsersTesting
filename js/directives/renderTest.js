app.directive('renderTest', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div ng-repeat="test in tests">' +
                    '<div class="question">{{ test.question }}</div>'+
                    '<div class="answers" ng-repeat="answer in test.answer track by $index">'+
                        '<label><input type="radio" name="answer_{{ tests.indexOf(test) }}" value="{{answer}}"><span>{{ answer }}</span></label><br>'+
                    '</div>'+
                   '</div>'+
                    '<button ng-show="tests" ng-click="checkTest()"> Check</button>',
        link: function (scope, element, attrs) {
            
        }
    }
});
