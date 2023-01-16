import { HttpStatus, Method, Path, Types } from '../commands/Path';
import { SingleData } from '../helpers/General';
import { Generator } from '../helpers/UserUpdate/generator';
import { UserUpdateRequest, UserUpdateResponse } from '../helpers/UserUpdate/contract';
import * as faker from 'faker';

const METHOD = Method.PUT;
const PATH = 'user/{user_id}';
const TAG = 'AUTHENTICATED';
const DESCRIPTION = 'Update user';

type Response = SingleData<UserUpdateResponse>;

export class UserUpdate extends Path {
    constructor() {
        super(METHOD, PATH, TAG, DESCRIPTION);

        this.addPath<string>('user_id', Types.STRING, faker.datatype.uuid(), 'Unique identifier of user');

        this.addBody<UserUpdateRequest>(Generator.request());

        this.addResponse<Response>(HttpStatus.SUCCESS, 'User successfully updated', {
            data: Generator.response(),
        });

        this.addParameterError({
            password: 'password is required',
        });

        this.addAuthorizedResponse(['authenticated']);

        this.addStandardResponse(HttpStatus.NOT_FOUND, 'User not found');
    }
}
