import express, { Request, Response } from 'express';
import TestController from '../controllers/test_controller';
const router = express.Router();

const testController = new TestController();
router.get('/test', testController.read);

export default router;
