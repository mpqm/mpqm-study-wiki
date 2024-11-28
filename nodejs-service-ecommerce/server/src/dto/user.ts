export interface UserSignupDTO {
    name: string;
    email: string;
    password: string;
}

export interface UserActivationDTO {
    activationToken: string;
}

export interface UserLoginDTO {
    email: string;
    password: string;
}