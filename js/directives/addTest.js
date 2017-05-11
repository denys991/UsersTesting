app.directive('addTest', function () {
    return {
        restrict: 'E',
        scope: false,
        template:
        '<div class="create-test">'+
            '<input type="text"  placeholder="Enter topic:" ng-model="test.topic"><br>'+
            '<input type="text"  placeholder="Enter question:" ng-model="test.question">'+
            '<div class="floatleft">'+
                '<ul ui-sortable="sortableOptions" ng-model="list" class="list">'+
                    '<li ng-repeat="(i, item) in list" class="item">' +
                        '<input type="text" ng-model="test.answer[i]">' +
                        '<input type="radio" name="right answ">'+
                    '</li>'+
                '</ul>'+
            '</div>'+
            // '<div class="floatleft" style="margin-left: 20px;">'+
            //     '<ul class="list logList">'+
            //         '<li ng-repeat="entry in sortingLog track by $index" class="logItem">{{entry}}</li>'+
            //     '</ul>'+
            // '</div>'+
            '<input type="button" ng-click="showtest = false" value="Close">' +
            '<input type="button" ng-click="saveTest(test)" value="Save Test">'+
        '</div>',
        link: function (scope, element, attrs) {

        }
    }
});