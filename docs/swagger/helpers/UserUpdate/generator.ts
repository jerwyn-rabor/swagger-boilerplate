import { UserUpdateRequest, UserUpdateResponse } from './contract';
import * as faker from 'faker';

export class Generator {
    static request(): UserUpdateRequest {
        return {
            password: faker.internet.password(),
        };
    }

    static response(): UserUpdateResponse {
        return {
            user_id: faker.datatype.uuid(),
            email: faker.internet.email(),
        };
    }
}
