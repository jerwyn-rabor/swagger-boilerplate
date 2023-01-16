import { LoginRequest, LoginResponse } from './contract';
import * as faker from 'faker';

export class Generator {
    static request(): LoginRequest {
        return {
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
    }

    static response(): LoginResponse {
        return {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            token: faker.random.alphaNumeric(100),
        };
    }
}
