export interface ICreateUser {
  name: string;
  email: string;
  image?: string | ArrayBuffer;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  imageURL?: string;
  createdAt: string;
  updatedAt: string;
}
