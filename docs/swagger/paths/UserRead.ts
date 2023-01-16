import { HttpStatus, Method, Path, Types } from '../commands/Path';
import { SingleData } from '../helpers/General';
import { Generator } from '../helpers/UserRead/generator';
import { UserReadResponse } from '../helpers/UserRead/contract';
import * as faker from 'faker';

const METHOD = Method.GET;
const PATH = 'user/{user_id}';
const TAG = 'AUTHENTICATED';
const DESCRIPTION = 'Get user';

type Response = SingleData<UserReadResponse>;

export class UserRead extends Path {
    constructor() {
        super(METHOD, PATH, TAG, DESCRIPTION);

        this.addPath<string>('user_id', Types.STRING, faker.datatype.uuid(), 'Unique identifier of user');

        this.addResponse<Response>(HttpStatus.SUCCESS, 'User successfully found', {
            data: Generator.response(),
        });

        this.addAuthorizedResponse(['authenticated']);

        this.addStandardResponse(HttpStatus.NOT_FOUND, 'User not found');
    }
}
