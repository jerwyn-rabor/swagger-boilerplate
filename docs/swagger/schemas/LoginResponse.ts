import { ResponseSchema } from '../commands/Schema';
import { LOGIN_RESPONSE } from '../helpers/Login/structure';

export class LoginResponse extends ResponseSchema {
    constructor() {
        super();
        this.addAttribute('data', LOGIN_RESPONSE);
    }
}
