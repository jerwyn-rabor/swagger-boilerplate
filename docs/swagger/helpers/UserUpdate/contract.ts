export interface UserUpdateRequest {
    password: string;
}

export interface UserUpdateResponse {
    user_id: string;
    email: string;
}
