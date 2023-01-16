import { UserReadResponse } from './contract';
import * as faker from 'faker';

export class Generator {
    static response(): UserReadResponse {
        return {
            user_id: faker.datatype.uuid(),
            email: faker.internet.email(),
        };
    }
}
