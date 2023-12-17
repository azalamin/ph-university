import mongoose, { model } from "mongoose";
import { TLocalGuardian, TName, TStudent } from "./student.interface";

const nameSchema = new mongoose.Schema<TName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  middleName: String,
  lastName: String,
});

const localGuardianSchema = new mongoose.Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Guardian name is required"],
  },
  address: {
    type: String,
    required: [true, "Guardian address is required"],
  },
  contact: {
    type: String,
    required: [true, "Guardian contact is required"],
  },
});

const studentSchema = new mongoose.Schema<TStudent>({
  id: {
    type: String,
    required: [true, "Id is required"],
  },
  user: mongoose.Types.ObjectId,
  name: nameSchema,
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Please select your gender"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Please select your date of birth"],
  },
  email: {
    type: String,
    required: [true, "Enter a valid email"],
  },
  contactNo: {
    type: String,
    required: [true, "Enter your contact no:"],
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact is required"],
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  localGuardian: localGuardianSchema,
  profileImage: {
    type: String,
  },
  status: Boolean,
  academicDepartment: mongoose.Types.ObjectId,
  isDeleted: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const Student = model<TStudent>("Student", studentSchema);
