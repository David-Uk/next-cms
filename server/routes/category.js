
import express from "express";
import { create } from "../controllers/category";
import { isAdmin, requireSignin } from './../middleware/index';

const router = express.Router();

router.route('/category')
    .post(requireSignin, isAdmin, create);

export default router;