import { ResponseSchema } from '../commands/Schema';
import { USER_UPDATE_SCHEMA } from '../helpers/UserUpdate/structure';

export class UserUpdateResponse extends ResponseSchema {
    constructor() {
        super();
        this.addAttribute('data', USER_UPDATE_SCHEMA);
    }
}
