import { Types } from '../../commands/Types';

export const USER_UPDATE_SCHEMA = Types.OBJECT(
    {
        user_id: Types.STRING('Unique identifier of user'),
        email: Types.STRING('Email of the user'),
    },
    'User object',
);
