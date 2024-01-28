import { Request, Response } from 'express';
import { UserModel } from '../db/models/user.model';
import bycrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({
        message: 'Falta un campo',
      });
    }

    //encryptamos la password
    const passwordHash = await bycrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: passwordHash,
    });
    const createUser = await newUser.save();
    //creas el token despues de que el usuario sea creado
    const token = await createAccessToken({ id: createUser._id });
    //lo estableces en una cookie
    res.cookie('token', token);
    return res.status(200).send({
      message: 'Usuario registrado',
      user: {
        id: createUser._id,
        username: createUser.username,
        email: createUser.email,
        createdAt: createUser.createdAt,
        updatedAt: createUser.updatedAt,
      },
    });
  } catch (error) {
    return res.status(500).send({
      error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        message: 'Falta un parametro',
      });
    }
    const userFind = await UserModel.findOne({ email });
    if (!userFind) {
      return res.status(400).send('Usuario no registrado');
    }

    const isMatch = await bycrypt.compare(password, userFind.password);
    if (!isMatch) {
      return res.status(400).send('Invalid Password');
    }

    //creacion del token
    const token = await createAccessToken({ id: userFind.id });
    res.cookie('token', token);
    return res.send({
      id: userFind.id,
      username: userFind.username,
      email: userFind.email,
    });
  } catch (error) {
    return res.status(500).send({
      message: error,
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.cookie('token', '', {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

export const profile = async (req: Request, res: Response) => {
  const { id } = req.user;
  const userFound = await UserModel.findById(id);
  if (!userFound) {
    return res.status(400).send({
      message: 'User not found',
    });
  }

  return res.send({
    id: userFound.id,
    userName: userFound.username,
    email: userFound.email,
  });
  // return res.sendStatus(200);
};
