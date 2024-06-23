"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchServiceService = exports.putServiceService = exports.postServiceService = exports.getServiceByIdService = exports.getServicesService = void 0;
const getServicesService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "this is get all services service";
});
exports.getServicesService = getServicesService;
const getServiceByIdService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "this get service by id service";
});
exports.getServiceByIdService = getServiceByIdService;
const postServiceService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "this is post service service";
});
exports.postServiceService = postServiceService;
const putServiceService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "this is put service service";
});
exports.putServiceService = putServiceService;
const patchServiceService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "this is patch service service";
});
exports.patchServiceService = patchServiceService;
