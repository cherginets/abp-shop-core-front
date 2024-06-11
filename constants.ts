export const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const IS_PROD = process.env.NODE_ENV === "production";
export const IS_DEV = process.env.NODE_ENV === "development";
export const DEBUG_ON = process.env.NEXT_PUBLIC_DEBUG === "on";

export const CHAR_DOT = "•";
export const CHAR_RUBLE = "₽";
