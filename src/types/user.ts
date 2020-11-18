export enum UserStatus {
  Active = 'ACTIVE',
  InActive = 'IN_ACTIVE',
}

export interface User {
  id: string;
  email: string;
  avatar?: string;
  name?: string;
  phone?: string;
}
