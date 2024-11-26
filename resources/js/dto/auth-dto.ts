export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterDTO = {
  name: string;
  surname: string;
  birthdate: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type ResetPasswordDTO = {
  token: string;
  password: string;
  password_confirmation: string;
  mail: boolean;
};
