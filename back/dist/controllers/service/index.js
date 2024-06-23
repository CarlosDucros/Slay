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
exports.patchServiceController = exports.putServiceController = exports.postServiceController = exports.getServiceByIdController = exports.getAllServicesController = void 0;
const getAllServicesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("get all services");
});
exports.getAllServicesController = getAllServicesController;
const getServiceByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.status(200).send(`this is get service by id, your id is: ${id}`);
});
exports.getServiceByIdController = getServiceByIdController;
const postServiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = req.body;
    res.status(201).json({ message: "This is post service", body: service });
});
exports.postServiceController = postServiceController;
const putServiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = req.body;
    res.status(201).json({ message: "This is put service", body: service });
});
exports.putServiceController = putServiceController;
const patchServiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = req.body;
    res.status(201).json({ message: "This is patch service", body: service });
});
exports.patchServiceController = patchServiceController;
