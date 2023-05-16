/** @format */

import { Request, Response } from "express";
import { Reservations } from "../models/models";

class ReservationsCreate {
  async create(req: Request, res: Response) {
    try {
      const { userId, toursId, bookingdate, numberofpersons } = req.body;
      const reservations = await Reservations.create({
        userId,
        toursId,
        bookingdate,
        numberofpersons,
      });
      res.status(200).json(reservations);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allreservations = await Reservations.findAll();
      res.status(200).json(allreservations);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const onereservations = await Reservations.findAll({
        where: { userId: id },
      });
      res.status(200).json(onereservations);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Reservations.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new ReservationsCreate();
