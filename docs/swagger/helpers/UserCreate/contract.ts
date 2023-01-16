export interface UserCreateRequest {
    email: string;
    password: string;
}

export interface UserCreateResponse {
    user_id: string;
    email: string;
}
