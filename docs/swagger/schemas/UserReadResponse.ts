import { ResponseSchema } from '../commands/Schema';
import { USER_READ_SCHEMA } from '../helpers/UserRead/structure';

export class UserReadResponse extends ResponseSchema {
    constructor() {
        super();
        this.addAttribute('data', USER_READ_SCHEMA);
    }
}
