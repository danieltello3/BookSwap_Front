export interface Response<T> {
  content: T;
  message: string;
  success: boolean;
}