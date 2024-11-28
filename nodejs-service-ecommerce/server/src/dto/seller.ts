export interface SellerSignupDTO{
    name: string;
    email: string
    password: string;
    shopName: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
}

export interface SellerActivationDTO {
    activationToken: string;
}
export interface SellerLoginDTO {
    email: string;
    password: string;
}