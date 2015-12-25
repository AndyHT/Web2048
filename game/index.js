var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}

handle["/"] = requestHandlers.start;
handle["/addNewRecord/"] = requestHandlers.addNewRecord;
handle["/getAllRecords/"] = requestHandlers.getAllRecords;
handle["others"] = requestHandlers.returnFiles;

server.start(router.route, handle);
