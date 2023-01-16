import { Types } from '../../commands/Types';

export const LOGIN_RESPONSE = Types.OBJECT(
    {
        name: Types.STRING('Name of the user'),
        email: Types.STRING('Email of the user'),
        token: Types.STRING('Access token'),
    },
    'User object',
);
