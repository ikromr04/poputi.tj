import { ID } from './index';

export type AuthUser = {
  id: ID;
  name: string;
  email: string;
  avatar?: string;
};
