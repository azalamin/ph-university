import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { studentValidations } from "../student/student.validation";
import { UserControllers } from "./user.controller";

const route = express.Router();

route.post(
  "/create-student",
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = route;
