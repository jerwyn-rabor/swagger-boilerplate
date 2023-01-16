import { Types } from '../../commands/Types';

export const USER_CREATE_SCHEMA = Types.OBJECT(
    {
        user_id: Types.STRING('Unique identifier of user'),
        email: Types.STRING('Email of the user'),
    },
    'User object',
);
