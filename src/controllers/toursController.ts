/** @format */

import { Request, Response } from "express";
import { Tours } from "../models/models";

class ToursCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, description, country, city, data, price } = req.body;
      const tours = await Tours.create({
        name,
        description,
        country,
        city,
        data,
        price,
      });
      res.status(200).json(tours);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const alltours = await Tours.findAll();
      res.status(200).json(alltours);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const onetours = await Tours.findOne({
        where: { coachesId: id },
      });
      res.status(200).json(onetours);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Tours.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new ToursCreate();
