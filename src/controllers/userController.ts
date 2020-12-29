import { getRepository } from "typeorm";
import { User } from "../models/user";

interface userSignUpData {
  username: string
  // password: string
  email: string
};

export async function createUser(data: userSignUpData) { 
  getRepository(User).create({
    username: data.username,
    email: data.email
  })
 };