import { HttpStatus, Method, Path } from '../commands/Path';
import { SingleData } from '../helpers/General';
import { Generator } from '../helpers/UserCreate/generator';
import { UserCreateRequest, UserCreateResponse } from '../helpers/UserCreate/contract';

const METHOD = Method.POST;
const PATH = 'user';
const TAG = 'AUTHENTICATED';
const DESCRIPTION = 'Create user';

type Response = SingleData<UserCreateResponse>;

export class UserCreate extends Path {
    constructor() {
        super(METHOD, PATH, TAG, DESCRIPTION);

        this.addBody<UserCreateRequest>(Generator.request());

        this.addResponse<Response>(HttpStatus.SUCCESS, 'User successfully created', {
            data: Generator.response(),
        });

        this.addParameterError({
            email: 'email is required',
            password: 'password is required',
        });

        this.addAuthorizedResponse(['authenticated']);
    }
}
