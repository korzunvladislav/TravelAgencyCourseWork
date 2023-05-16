"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = exports.Reservations = exports.Tours = exports.Basket = exports.User = void 0;
var database_1 = __importDefault(require("../database/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var Tours = database_1.default.define("tours", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, unique: false, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    country: { type: sequelize_1.default.STRING },
    city: { type: sequelize_1.default.STRING },
    data: { type: sequelize_1.default.STRING, defaultValue: "Undefined" },
    price: { type: sequelize_1.default.INTEGER },
});
exports.Tours = Tours;
var Reservations = database_1.default.define("reservations", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    bookingdate: { type: sequelize_1.default.STRING },
    numberofpersons: { type: sequelize_1.default.INTEGER },
});
exports.Reservations = Reservations;
var Reviews = database_1.default.define("reviews", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    review: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.Reviews = Reviews;
Tours.hasMany(Reservations);
Reservations.belongsTo(Tours);
User.hasMany(Reservations);
Reservations.belongsTo(User);
User.hasMany(Reviews);
Reviews.belongsTo(User);
User.hasMany(Reviews);
Reviews.belongsTo(User);
Tours.hasOne(Basket);
Basket.belongsTo(Tours);
