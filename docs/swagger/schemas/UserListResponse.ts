import { ResponseSchema } from '../commands/Schema';
import { USER_LIST_RESPONSE } from '../helpers/UserList/structure';

export class UserListResponse extends ResponseSchema {
    constructor() {
        super();
        this.addAttribute('data', USER_LIST_RESPONSE);
    }
}
