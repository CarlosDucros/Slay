"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("./server/index");
var config_1 = require("./config");
config_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected");
    (0, index_1.serverInitializer)();
})
    .catch(function (err) {
    console.error(err);
});
