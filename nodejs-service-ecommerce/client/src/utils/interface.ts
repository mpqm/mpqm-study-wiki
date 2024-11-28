interface Address {
  country?: string;
  city?: string;
  address1?: string;
  address2?: string;
  zipCode?: number;
  addressType?: string;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  phoneNumber?: number;
  addresses?: Address[];
  role: string;
  createdAt: Date;
  resetPasswordToken?: string;
  resetPasswordTime?: Date;
  getJwtToken(): string;
  comparePassword(enteredPassword: string): Promise<boolean>;
}

export interface SellerData{
  _id: string;
  name: string;
  email: string;
  password: string;
  shopName: string;
  phoneNumber?: string;
  description?: string;
  address: string
  zipCode: Number
  role: string
  resetPasswordToken?: string;
  resetPasswordTime?: Date;
  getJwtToken(): string;
  comparePassword(enteredPassword: string): Promise<boolean>;
}
export interface ProductData {
  id: number;
  category?: string[];
  name: string;
  description: string;
  image_Url: { public_id: string; url: string }[];
  shop: {
    name: string;
    shop_avatar: { public_id: string; url: string };
    ratings: number;
  };
  price?: number;
  discount_price: number;
  rating: number;
  total_sell: number;
  stock: number;
  reviews?: Review[];
}

export interface PromotionData {
  id: number;
  category?: string[];
  name: string;
  description: string;
  image_Url: { public_id: string; url: string }[];
  shop: {
    name: string;
    shop_avatar: { public_id: string; url: string };
    ratings: number;
  };
  price?: number;
  discount_price: number;
  rating: number;
  total_sell: number;
  stock: number;
  reviews?: Review[];
}

interface Review {
  user: {
    // 유저 객체 타입 정의
  };
  comment: string;
  rating: number;
}

export interface CategoryData {
  id: number;
  title: string;
  image_Url?: string;
  sub?: CategoryData[];
}

export interface NavigationData {
  id: number;
  title: string;
  url: string;
}

export interface FooterLinkData {
  name: string;
}

export interface CartData {
  name: string;
  description: string;
  price: number;
}
