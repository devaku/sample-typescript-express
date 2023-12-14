import { TransactionOrKnex } from 'objection';
interface IService {
	create(trx: TransactionOrKnex): void;
	readAll(): void;
	readById(): void;
	update(): void;
	delete(): void;
}

export default IService;
