function route(handle, pathname, response, request) {
  console.log("Pathname:" + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](request, response);
  } else {
    if (true) {//如果pathname对应路径的文件存在，返回路径对应的文件
      handle["others"](request, response);
    } else {//如果文件不存在返回404
      console.log("找不到文件:" + pathname);
      response.writeHead(404, {"Content-Type": "text/html"});
      response.write("404 Not found");
      response.end();
    }
  }
}

exports.route = route;
