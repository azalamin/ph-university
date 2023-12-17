import mongoose from "mongoose";

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  name: string;
  address: string;
  contact: string;
};

export type TLocalGuardian = {
  name: string;
  address: string;
  contact: string;
};

export type TStudent = {
  id: string;
  user: mongoose.Types.ObjectId;
  name: TName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage: string;
  status: boolean;
  academicDepartment: mongoose.Types.ObjectId;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};
