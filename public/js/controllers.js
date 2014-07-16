'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    var scrollItems = [];
    for (var i=1; i<=5; i++) {
        scrollItems.push("Item " + i);
    }
    $scope.scrollItems = scrollItems;
  }).
  controller('MyCtrl1', function ($scope, socket) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });
