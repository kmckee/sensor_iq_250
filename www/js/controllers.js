angular.module('starter.controllers', [])

.controller('HistoryCtrl', function($scope, $timeout) {
    // Live data
    $scope.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Today"];
    $scope.series = ['Systolic', 'Diastolic'];
    $scope.data = [
        [120, 130, 125, 145, 150, 140, 130],
        [80,   85,  90,  85, 95,   85, 85 ]
    ];
})

.controller('LiveCtrl', function($scope, $interval, $http) {
    var maximum = 30;
    $scope.data = [[]];
    $scope.labels = [];
    $scope.options = {
        animation: false,
        showScale: true,
        showTooltips: false,
        pointDot: false,
        datasetStrokeWidth: 0.5
    };

    // Update the dataset at 25FPS for a smoothly-animating chart
    $interval(function () {
        getLiveChartData();
    }, 500);

    function getLiveChartData () {
        $http.get('https://api.particle.io/v1/devices/39001b001747343337363432/lightSensor?access_token=bb03e9ee7273f448e94282b06ebd72ff533ca1c2').then(function success(response) {
            var x = Number(response.data.result);
            $scope.labels.push('');
            var scaled = x / 27;
            $scope.data[0].push(scaled);
        },
        function error(err) {
            console.log('error', err);
        });

    }
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
