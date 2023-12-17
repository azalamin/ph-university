import { z } from "zod";
import { TStudent } from "./student.interface";

// Define Zod schemas
const nameValidationSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string(),
  lastName: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  contact: z.string().min(1),
});

const studentValidationSchema = z.object({
  id: z.string().min(1),
  user: z.string(),
  name: nameValidationSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  presentAddress: z.string().min(1),
  permanentAddress: z.string().min(1),
  localGuardian: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  status: z.boolean(),
  academicDepartment: z.string(),
  isDeleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Validate function
export const validateStudent = (data: TStudent) => {
  try {
    studentValidationSchema.parse(data);
    return true; // Data is valid
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Validation error:", error.errors);
    return false; // Data is invalid
  }
};
