import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller"; 
import { authRequired } from "../middlewares/validateToken";
import { validateSchema } from "../middlewares/validateSchema";
import { loginSchema, registerSchema } from "../validators/auth.schema";
//creamos las rutas para authenticar
const router = Router();

//rutas
router.post('/register',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile',authRequired, profile);

export default router;