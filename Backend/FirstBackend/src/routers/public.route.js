import express from 'express';
import { ContactUs } from '../controllers/public.controller.js';
import routers from './auth.route.js';

const router = express.Router();

routers.post("/contactUs",ContactUs);

export default routers;