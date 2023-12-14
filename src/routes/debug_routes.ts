import express from 'express';
import _DebugController from '../controllers/DebugController';
import _UserService from '../services/UserService';

const router = express.Router();

// Instantiate
const UserService = new _UserService();
const DebugController = new _DebugController(UserService);

router.get('/debug', (req, res) => DebugController.create(req, res));
export default router;
