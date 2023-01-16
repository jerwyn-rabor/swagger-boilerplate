import { Schema } from '../commands/Schema';
import { Types } from '../commands/Types';

export class UserUpdateRequest extends Schema {
    constructor() {
        super();
        this.addAttribute('password', Types.STRING('Password of the user'));
    }
}
