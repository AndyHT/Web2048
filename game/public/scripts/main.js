'use strict';

var game2048 = angular.module('game2048', []);
game2048.controller('getRecordsCtrl', function($scope, $http) {

  //测试用
  // $scope.records = [{'name': 'lala', 'score': 10}, {'name': 'hah', 'score': 10}]

  // $('#recordsModal').on('show.bs.modal', function (e) {
  //   console.log('请求Records');
  //   $http.post('http://localhost:8888/getAllRecords/')
  //   .success(function (response) {
  //     $scope.records = response.records;
  //   });
  // });
});


//保存记录到数据库
function saveRecord() {
  console.log('Save the record');
  var playerName = $('#playerName').val();
  $('#playerName').val('');
  $.post('addNewRecord/', { name: playerName, score: score},
  function(data){
     console.log("Data Loaded: " + data);
   });

  $('#newRecordModal').modal('hide');
  newgame();
}

//测试用
function testModal() {
  console.log('I am clicked');
  $('#newRecordModal').modal('show');
}
