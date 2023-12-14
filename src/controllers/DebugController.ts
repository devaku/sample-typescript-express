import { Request, Response, NextFunction } from 'express';
import IController from './IController';

import UserService from '../services/UserService';

class DebugController implements IController {
	private UserService: UserService;
	constructor(UserService: UserService) {
		this.UserService = UserService;
	}
	create(req: Request, res: Response): void {
		try {
			this.UserService.create();
			res.json({ status: 'VALID' });
		} catch (e) {
			res.json({ status: 'ERROR' });
		}
	}
	readOne(req: Request, res: Response): void {
		throw new Error('Method not implemented.');
	}
	readAll(req: Request, res: Response): void {
		throw new Error('Method not implemented.');
	}
	update(req: Request, res: Response): void {
		throw new Error('Method not implemented.');
	}
	delete(req: Request, res: Response): void {
		throw new Error('Method not implemented.');
	}
}

export default DebugController;
