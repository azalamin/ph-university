import { AcademicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (AcademicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid semester code");
  }

  const result = await AcademicSemester.create(payload);

  return result;
};

const getAllAcademicSemester = async () => {
  const result = await AcademicSemester.find();

  return result;
};

const getSingleAcademicSemester = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });

  return result;
};

const updateSingleAcademicSemester = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    AcademicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid semester code");
  }
  const result = await AcademicSemester.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
