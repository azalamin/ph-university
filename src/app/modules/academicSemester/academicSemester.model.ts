import { Schema, model } from "mongoose";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);

export default AcademicSemester;
