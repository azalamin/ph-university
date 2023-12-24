import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get("/", AcademicSemesterControllers.getAllAcademicSemester);

router.get("/:id", AcademicSemesterControllers.getSingleAcademicSemester);

router.patch("/:id", AcademicSemesterControllers.updateSingleAcademicSemester);

export const AcademicSemesterRoutes = router;
