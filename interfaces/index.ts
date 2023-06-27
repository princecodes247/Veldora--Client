export interface IFAQ {
  question: string;
  answer: string;
}
export enum UserType {
  USER = "user",
  ADMIN = "admin",
}

export enum PaymentMethodType {
  BANK = "bank",
  CARD = "card",
  TRANSFER = "transfer",
}

export enum DeviceType {
  Android = "android",
  IPhone = "iphone",
  Web = "web",
}



export enum LoadingType {
  FULLSCREEN = "fullscreen",
  INLINE = "inline",
  TEXT = "text",
}

export interface IBucketData {
  _id: string;
  name: string;
  description: string;
  submissionsCount: number;
  views: {
    country: string;
    device: string;
    countryCode: string;
    isp: string;
    ip: string;
    platform: string;
  }[];
}

export interface IBucketDataWithStats extends IBucketData {
  stats: {
    countries: [];
    devices: [];
    submissionCount: 3;
    dailySubmissions: [];
  };
}

export interface ISubmissionData {
  _id: string;
  bucket: string;
  data: {
    [key: string]: any;
  };
}

