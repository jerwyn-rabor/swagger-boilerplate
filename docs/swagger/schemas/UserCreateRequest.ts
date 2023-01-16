import { Schema } from '../commands/Schema';
import { Types } from '../commands/Types';

export class UserCreateRequest extends Schema {
    constructor() {
        super();
        this.addAttribute('email', Types.STRING('Email of the user'));
        this.addAttribute('password', Types.STRING('Password of the user'));
    }
}
