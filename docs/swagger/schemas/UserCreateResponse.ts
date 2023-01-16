import { ResponseSchema } from '../commands/Schema';
import { USER_CREATE_SCHEMA } from '../helpers/UserCreate/structure';

export class UserCreateResponse extends ResponseSchema {
    constructor() {
        super();
        this.addAttribute('data', USER_CREATE_SCHEMA);
    }
}
