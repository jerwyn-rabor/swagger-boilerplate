import { HttpStatus, Method, Path, Types } from '../commands/Path';
import { ListData } from '../helpers/General';
import { Generator } from '../helpers/UserList/generator';
import { UserListResponse } from '../helpers/UserList/contract';
import * as faker from 'faker';

const METHOD = Method.GET;
const PATH = 'users';
const TAG = 'ADMIN';
const DESCRIPTION = 'List of users';

type Response = ListData<UserListResponse>;

export class UserList extends Path {
    constructor() {
        super(METHOD, PATH, TAG, DESCRIPTION);

        this.addResponse<Response>(HttpStatus.SUCCESS, 'User successfully found', {
            data: Generator.response(),
        });

        this.addHeader('x-api-key', Types.STRING, true, faker.datatype.uuid(), 'API Key from server');

        this.addAuthorizedResponse(['admin']);
    }
}
