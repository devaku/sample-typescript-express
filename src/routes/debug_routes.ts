import express, { Request, Response } from 'express';
import * as debug_controller from '../controllers/debug_controller';
const router = express.Router();
router.get('/debug', debug_controller.debugGet);
export default router;
