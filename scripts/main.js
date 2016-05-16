'use strict';

//保存记录到数据库
function saveRecord() {
  console.log('Save the record');
  var playerName = $('#playerName').val();
  $('#playerName').val('');

  if ('' === playerName) {
    playerName = '未命名';
  }

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
