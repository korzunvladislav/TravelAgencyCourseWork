/** @format */

import { Request, Response } from "express";
import { Reviews } from "../models/models";

class ReviewsCreate {
  async create(req: Request, res: Response) {
    try {
      const { userId, toursId, review } = req.body;
      const reviews = await Reviews.create({
        userId,
        toursId,
        review,
      });
      res.status(200).json(reviews);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allreviews = await Reviews.findAll();
      res.status(200).json(allreviews);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const onereviews = await Reviews.findAll({
        where: { toursId: id },
      });
      res.status(200).json(onereviews);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Reviews.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new ReviewsCreate();
