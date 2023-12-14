import IService from './IService';
import { TransactionOrKnex } from 'objection';

class BaseService implements IService {
    create(trx: TransactionOrKnex): void {
        throw new Error('Method not implemented.');
    }
    readAll(): void {
        throw new Error('Method not implemented.');
    }
    readById(): void {
        throw new Error('Method not implemented.');
    }
    update(): void {
        throw new Error('Method not implemented.');
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }
}

export default BaseService;
