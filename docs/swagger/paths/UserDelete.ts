import { HttpStatus, Method, Path, Types } from '../commands/Path';
import * as faker from 'faker';

const METHOD = Method.DELETE;
const PATH = 'user/{user_id}';
const TAG = 'AUTHENTICATED';
const DESCRIPTION = 'Delete user';

export class UserDelete extends Path {
    constructor() {
        super(METHOD, PATH, TAG, DESCRIPTION);

        this.addPath<string>('user_id', Types.STRING, faker.datatype.uuid(), 'Unique identifier of user');

        this.addResponse(HttpStatus.SUCCESS, 'User successfully deleted', {});

        this.addAuthorizedResponse(['authenticated']);

        this.addStandardResponse(HttpStatus.NOT_FOUND, 'User not found');
    }
}
