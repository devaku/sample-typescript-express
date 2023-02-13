import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import Controller from './controller';

class TestController implements Controller {
	create(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>,
		next: NextFunction
	): void {
		res.json({
			status: 'Hello',
		});
	}
	read(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>,
		next: NextFunction
	): void {
		try {
			throw new Error('THIS IS AN ERROR');
		} catch (error: any) {
			const { stack, message } = error;
			console.log(`Message: ${message}`);
			console.log(`Stack: ${stack}`);

			res.json({
				status: 'error',
				stack,
				message,
			});
		}
	}
	update(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>,
		next: NextFunction
	): void {
		throw new Error('Method not implemented.');
	}
	delete(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>,
		next: NextFunction
	): void {
		throw new Error('Method not implemented.');
	}
}

export default TestController;
