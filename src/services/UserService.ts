import { TransactionOrKnex } from 'objection';
import BaseService from './BaseService';
class UserService extends BaseService {
	constructor() {
		super();
	}

	readBySSO(trx: TransactionOrKnex): void {}
}

export default UserService;
