function route(handle, pathname, response, request) {
  console.log("Pathname:" + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](request, response);
  } else {
    handle["others"](request, response, pathname);
  }
}

exports.route = route;
