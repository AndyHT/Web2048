'use strict';

var game2048 = angular.module('game2048', []);
game2048.controller('getRecordsCtrl', function($scope, $http) {
  console.log('请求Records');

  //测试用
  $scope.records = [{'name': 'lala', 'score': 10}, {'name': 'hah', 'score': 10}]

  // $http.post('http://localhost:8888/getAllRecords/')
  // .success(function (response) {
  //   $scope.records = response.records;
  // });
});

//保存记录到数据库
function saveRecord() {
  console.log('Save the record');

  // $('#newgame_btn').click(function() {//发送post请求到后台
  //   $.post("addNewRecord/", { name: "John", score: 10},
  //   function(data){
  //      console.log("Data Loaded: " + data);
  //    });
  // });

  $('#newRecordModal').modal('hide');
  newgame();
}

//测试用
function testModal() {
  console.log('I am clicked');
  $('#newRecordModal').modal('show');
}
