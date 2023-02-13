import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT_BACKEND;

import debug_routes from './routes/debug_routes';
import test_routes from './routes/test_routes';

app.use(test_routes);
app.use(debug_routes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.json({
		status: 'success',
	});
});

app.listen(PORT, () => {
	console.log(`Express is listening at ${PORT}`);
});
