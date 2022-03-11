import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

const usersRoute = Router();

usersRoute.get('/', async(req: Request, res: Response) => {
  const repo = getRepository(User);
  try {
    const users = await repo.find();
    return res.status(201).json(users);
  } catch (err) {
    res.status(400).send({error: `Error while loading data: ${err}`});
  }
});

export default usersRoute;