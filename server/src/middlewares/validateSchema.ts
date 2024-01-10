//valida el schema que llega a la request

import { NextFunction, Request, Response } from 'express';
import { Schema } from 'zod';
import { ZodError, fromZodError } from 'zod-validation-error';

export const validateSchema =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      const validationsError = fromZodError(err);
      return res.status(400).send({
        error: validationsError.details.map((details) => details.message),
      });
    }
  };
