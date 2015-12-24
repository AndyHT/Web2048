var querystring = require("querystring"), fs = require("fs");

function startGame(request, response) {
  //读index.html后返回给前端
  console.log("读index.html后返回给前端");

  var data = fs.readFileSync('./public/index.html');
  // console.log("同步读取: " + data.toString());

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(data);
  response.end();
}

function addNewRecord(request, response) {
  //将新纪录添加到mongodb
  console.log("将新纪录添加到mongodb");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("将新纪录添加到mongodb");
  response.end();
}

function returnFiles(request, response, pathname) {

  var path = "./public" + pathname;
  console.log("path:" + path);

  // console.log("Method:" + request.method);
  // console.log("Headers:" + typeof request.headers['accept']);


  //判断请求路径是否有文件，如果有文件将静态文件资源返回给前端
  if (fs.existsSync(path)) {
    console.log("将静态文件资源返回给前端");

    var data = fs.readFileSync('./public' + pathname);
    // console.log("pathname:" + data.toString());
    response.writeHead(200, {"Content-Type": request.headers['accept']});
    response.write(data);
  } else {//如果文件不存在返回404
    console.log("找不到文件:" + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
  }

  response.end();
}

exports.start = startGame;
exports.addNewRecord = addNewRecord;
exports.returnFiles = returnFiles;
