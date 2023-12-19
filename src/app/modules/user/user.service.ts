import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  userData.password = password || config.default_password;

  // set student role
  userData.role = "student";

  // set manually generated id
  userData.id = "20230100001";

  const newUser = await User.create(userData);

  if (Object.keys(userData).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = Student.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
