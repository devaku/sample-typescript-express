import { Request, Response, NextFunction } from 'express';
export async function debugGet(req: Request, res: Response) {
	try {
		res.json({
			status: 'success',
			message: 'This is the debug route',
		});
	} catch (error) {
		console.log(error);
	}
}
