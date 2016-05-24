var mongoose = require('mongoose');
require('../../models/index.js');
var async = require('async');

var ModuleSchema = mongoose.Schemas.modules;

var connectOptions = {
    user: 'easyerp',
    pass: '1q2w3e!@#',
    w   : 1,
    j   : true
};

var dbObject = mongoose.createConnection('144.76.56.111', 'alex', 28017, connectOptions);

//var dbObject = mongoose.createConnection('localhost', 'production');

var Module = dbObject.model("modules", ModuleSchema);

var parallelTasks = [function (cb) {
    Module.update({_id: 54}, {visible : false}, cb);
}, function (cb) {
    Module.update({_id: 80}, {visible : false}, cb);
}/*, function (cb) {
    Module.update({_id: 53}, {visible : false}, cb);
}*/];

async.parallel(parallelTasks, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Good');
});
