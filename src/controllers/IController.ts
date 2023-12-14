import { Request, Response } from 'express';

interface IController {
	create(req: Request, res: Response): void;
	readOne(req: Request, res: Response): void;
	readAll(req: Request, res: Response): void;
	update(req: Request, res: Response): void;
	delete(req: Request, res: Response): void;
}

export default IController;
