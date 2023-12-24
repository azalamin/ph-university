import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic semester is created successfully",
      data: result,
    });
  },
);

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterServices.getAllAcademicSemester();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic semesters retrieved successfully!.",
      data: result,
    });
  },
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { semesterId } = req.params;
    const result =
      await AcademicSemesterServices.getSingleAcademicSemester(semesterId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester found successfully!.",
      data: result,
    });
  },
);

const updateSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { semesterId } = req.params;
    const updatedData =
      await AcademicSemesterServices.updateSingleAcademicSemester(
        semesterId,
        req.body,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester updated successfully.",
      data: updatedData,
    });
  },
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
