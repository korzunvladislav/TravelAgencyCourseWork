/** @format */

import DataBase from "../database/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Tours = DataBase.define("tours", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false, allowNull: false },
  description: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  data: { type: DataTypes.STRING, defaultValue: "Undefined" },
  price: { type: DataTypes.INTEGER },
});

const Reservations = DataBase.define("reservations", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  bookingdate: { type: DataTypes.STRING },
  numberofpersons: { type: DataTypes.INTEGER },
});

const Reviews = DataBase.define("reviews", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  review: { type: DataTypes.STRING, allowNull: false },
});

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

export { User, Basket, Tours, Reservations, Reviews };
