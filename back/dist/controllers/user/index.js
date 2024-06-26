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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserControllerAsync = exports.registerUserControllerAsync = exports.getUserByIdControllerAsync = exports.getUsersControllerAsync = void 0;
var catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
var user_1 = require("../../services/user");
var getUsersController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, (0, user_1.getUsersService)()];
            case 1:
                users = _a.sent();
                if (users)
                    res.status(200).json(users);
                else
                    res.status(404).json({ message: "Users not found" });
                return [2];
        }
    });
}); };
var getUserByIdController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4, (0, user_1.getUserByIdService)(Number(id))];
            case 1:
                user = _a.sent();
                if (user)
                    res.status(200).json(user);
                else
                    res.status(404).json({ message: "User not found" });
                return [2];
        }
    });
}); };
var registerUserController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, registered;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body;
                return [4, (0, user_1.registerUserService)(user)];
            case 1:
                registered = _a.sent();
                if (registered)
                    res.status(201).json({ message: "User created" });
                return [2];
        }
    });
}); };
var loginUserController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var credentials, loged;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                credentials = req.body;
                return [4, (0, user_1.loginUserService)(credentials)];
            case 1:
                loged = _a.sent();
                if (loged)
                    res.status(201).json({ message: "User loged", loged: loged });
                else
                    res.status(404).json({ message: "Invalid credentials" });
                return [2];
        }
    });
}); };
exports.getUsersControllerAsync = (0, catchAsync_1.default)(getUsersController);
exports.getUserByIdControllerAsync = (0, catchAsync_1.default)(getUserByIdController);
exports.registerUserControllerAsync = (0, catchAsync_1.default)(registerUserController);
exports.loginUserControllerAsync = (0, catchAsync_1.default)(loginUserController);
