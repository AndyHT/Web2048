var querystring = require("querystring"), fs = require("fs");

function startGame(request, response) {
  //读index.html后返回给前端
  console.log("读index.html后返回给前端");

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("读index.html后返回给前端");
    response.end();
}

function addNewRecord(request, response) {
  //将新纪录添加到mongodb
  console.log("将新纪录添加到mongodb");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("将新纪录添加到mongodb");
  response.end();
}

function returnFiles(request, response) {
  //将静态文件资源返回给前端
  console.log("将静态文件资源返回给前端");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("将静态文件资源返回给前端");
  response.end();
}

exports.start = startGame;
exports.addNewRecord = addNewRecord;
exports.returnFiles = returnFiles;
