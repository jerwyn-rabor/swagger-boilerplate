import { UserListResponse } from './contract';
import * as faker from 'faker';

export class Generator {
    static response(): UserListResponse[] {
        return [
            {
                user_id: faker.datatype.uuid(),
                email: faker.internet.email(),
            },
            {
                user_id: faker.datatype.uuid(),
                email: faker.internet.email(),
            },
            {
                user_id: faker.datatype.uuid(),
                email: faker.internet.email(),
            },
            {
                user_id: faker.datatype.uuid(),
                email: faker.internet.email(),
            },
            {
                user_id: faker.datatype.uuid(),
                email: faker.internet.email(),
            },
        ];
    }
}
