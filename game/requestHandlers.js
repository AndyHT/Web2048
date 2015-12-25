var querystring = require("querystring"),
  fs = require("fs"),
  // url = require("url"),
  mongoose = require("mongoose"),
  query = require("querystring");    //解析POST请求

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function callback () {
  console.log("Connection error");
});

db.once('open', function callback () {
  console.log("Mongo working!");
});

var Schema = mongoose.Schema;
var recordSchema = new Schema({
  name : String,
  score : Number
});

var Record = mongoose.model('Record', recordSchema);



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

  if (request.method === "POST") {
    var postdata = "";
    request.addListener("data",function(postchunk){
      postdata += postchunk;
    });

    //POST结束输出结果
    request.addListener("end",function(){
      var params = query.parse(postdata);
      // console.log("Data_name:" + params['name']);
      // console.log("Data_score:" + params['score']);

      var newRecord = new Record({name: params['name'], score: params['score']});

      newRecord.save(function(err, data) {
        if (err) {
          response.writeHead(500, {"Content-Type": "text/plain"});
          response.write("数据保存到mongodb时出错");
          response.end();
        } else {
          response.writeHead(200, {"Content-Type": "text/text"});
          response.write("新纪录添加成功");
          response.end();
        }
      });
    });
  } else {
    console.log("接收到GET请求");
    response.writeHead(403);
    response.end();
  }
}

function returnFiles(request, response, pathname) {

  var path = "./public" + pathname;
  console.log("path:" + path);

  // console.log("Method:" + request.method);
  // console.log("Headers:" + typeof request.headers['accept']);

  //判断请求路径是否有文件，如果有文件将静态文件资源返回给前端
  if (fs.existsSync(path)) {
    // console.log("将静态文件资源返回给前端");

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

//获得所有记录
function getAllRecords(request, response) {
  Record.find(function(err, records) {
    if(err) return console.err(err);
    // console.dir(records);
    response.writeHead(200, {"Content-Type": "application/json"});
    //将数据转为json格式
    var data = {"records": records};
    response.end(JSON.stringify(data));
  });
}

exports.start = startGame;
exports.addNewRecord = addNewRecord;
exports.returnFiles = returnFiles;
exports.getAllRecords = getAllRecords;
