import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_TOKEN } from '../config';

declare global{
  namespace Express {
    interface Request {
      user: {id: string, iat: number, exp: number}
    }
  }
}

export const authRequired = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;
  
  if (!token) {
    return res.status(401).send({
      message: 'Not token, authorization denied',
    });
  }
  jwt.verify(token, SECRET_TOKEN, (err: any, user: any) => {
    if (err) {
      return res.status(403).send({
        message: 'Invalid Token',
      });
    }
    // console.log(user);
    
    req.user = user;
    next();
  });
};
