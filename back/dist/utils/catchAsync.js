"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catchAsync = function (controller) {
    return function (req, res, next) {
        controller(req, res).catch(function (err) { return next(err); });
    };
};
exports.default = catchAsync;
