app.directive('renderTopic', function () {
    return {
        restrict: 'E',
        scope: false,
        template:   '<ul class="topic-list">' +
                    '<li ng-repeat="topic in topics" ng-click="setTopic(topic)">{{ topic }}</li>' +
                    '</ul>',
        link: function (scope, element, attrs) {

        }
    }
});

