import express from "express";

const route = express.Router();

route.post("/create-user", userController.createUser);

export const UserRoutes = route;
