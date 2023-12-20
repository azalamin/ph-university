/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { StudentServices } from "./student.service";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllStudents: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students are retrieved successfully!",
    data: result,
  });
});

const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student found successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Students deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const updates = req.body;

    const result = await StudentServices.updateSingleStudentFromDB(
      studentId,
      updates,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Students updated successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
  updateSingleStudent,
};
