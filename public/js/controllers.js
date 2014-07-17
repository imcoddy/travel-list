'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    var list1 = ['t1', 't2', 't5'];
    var list2 = ['t3', 't2', 't5'];
    var list3 = ['t1', 't3', 't5', 't7', 't9'];
    var taskLists = [{'id':'list1', 'name': '出行前准备', 'data': list1},{'id':'list2','name': '出行前一天', 'data': list2},{'id':'list3','name': '出行前一刻', 'data': list3}];
    $scope.taskLists = taskLists;
  }).
  controller('MyCtrl1', function ($scope, socket) {
  }).
  controller('MyCtrl2', function ($scope) {
  });
