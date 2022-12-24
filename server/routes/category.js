
import express from "express";
import { create } from "../controllers/category";
import { requireSignin } from './../middleware/index';

const router = express.Router();

router.route('/category')
    .post(requireSignin, create);

export default router;