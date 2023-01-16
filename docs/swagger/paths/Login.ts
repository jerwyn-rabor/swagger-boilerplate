import { HttpStatus, Method, Path } from '../commands/Path';
import { SingleData } from '../helpers/General';
import { Generator } from '../helpers/Login/generator';
import { LoginRequest, LoginResponse } from '../helpers/Login/contract';

const METHOD = Method.POST;
const PATH = 'login';
const TAG = 'PUBLIC';
const DESCRIPTION = 'Validates the user credentials';

type Response = SingleData<LoginResponse>;

export class Login extends Path {
    constructor() {
        super(METHOD, PATH, TAG, DESCRIPTION);

        this.addBody<LoginRequest>(Generator.request());

        this.addResponse<Response>(HttpStatus.SUCCESS, 'User successfully login', {
            data: Generator.response(),
        });

        this.addParameterError({
            email: 'Email is required',
            password: 'Password is required',
        });
    }
}
