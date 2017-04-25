app.directive('renderTest', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<div ng-repeat="test in tests">' +
                    '<div class="question">{{ test.question }}</div>'+
                    '<div class="answers" ng-repeat="answer in test.answer">'+
                        '<label><input type="radio" name="answer_{{ test.id }}"><span>{{ answer }}</span></label><br>'+
                    '</div>'+
                  '</div>',
        link: function (scope, element, attrs) {
            
        }
    }
});
