angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout) {
    // Live data
    $scope.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Today"];
    $scope.series = ['Systolic', 'Diastolic'];
    $scope.data = [
        [120, 130, 125, 145, 150, 140, 130],
        [80,   85,  90,  85, 95,   85, 85 ]
    ];
})

.controller('ChatsCtrl', function($scope, $interval) {
    var maximum = 30;
    $scope.data = [[]];
    $scope.labels = [];
    $scope.options = {
        animation: false,
        showScale: false,
        showTooltips: false,
        pointDot: false,
        datasetStrokeWidth: 0.5
    };

    // Update the dataset at 25FPS for a smoothly-animating chart
    $interval(function () {
        getLiveChartData();
    }, 1000);

    function getLiveChartData () {
        if ($scope.data[0].length) {
            $scope.labels = $scope.labels.slice(1);
            $scope.data[0] = $scope.data[0].slice(1);
        }

        while ($scope.data[0].length < maximum) {
            $scope.labels.push('');
            $scope.data[0].push(getRandomValue($scope.data[0]));
        }
    }

    function getRandomValue (data) {
        var l = data.length, previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }


})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
