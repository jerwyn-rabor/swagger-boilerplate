import { UserCreateRequest, UserCreateResponse } from './contract';
import * as faker from 'faker';

export class Generator {
    static request(): UserCreateRequest {
        return {
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
    }

    static response(): UserCreateResponse {
        return {
            user_id: faker.datatype.uuid(),
            email: faker.internet.email(),
        };
    }
}
