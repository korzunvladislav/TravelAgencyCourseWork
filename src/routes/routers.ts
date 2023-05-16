/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";
import ToursCreate from "../controllers/toursController";
import ReviewsCreate from "../controllers/reviewsController";
import ReservationsCreate from "../controllers/reservationsController";
import auth from "../middleware/authMiddleware";
import role from "../middleware/checkRoleMiddleware";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/check", auth, UserController.check);

router.post("/createTours", role, ToursCreate.create);
router.get("/getAllTours", ToursCreate.getAll);
router.get("/getAllTours", ToursCreate.getOne);
router.delete("/deleteTours", ToursCreate.delete);

router.post("/createReviews", role, ReviewsCreate.create);
router.get("/getAllReviews", ReviewsCreate.getAll);
router.get("/getAllReviews", ReviewsCreate.getOne);
router.delete("/deleteReviews", ReviewsCreate.delete);

router.post("/createReservations", role, ReservationsCreate.create);
router.get("/getAllReservations", ReservationsCreate.getAll);
router.get("/getAllReservations", ReservationsCreate.getOne);
router.delete("/deleteReservations", ReservationsCreate.delete);

export default router;
