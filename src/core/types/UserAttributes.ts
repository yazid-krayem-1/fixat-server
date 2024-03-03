export interface UserAttributes {
  readonly UserID: number;
  readonly Username: string;
  readonly Email: string;
  readonly PasswordHash: string;
  readonly CreatedAt?: Date;
  readonly UpdatedAt?: Date;
}

export interface UpdateUserAttributes {
  readonly id: number;
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

// create a user
export type CreateUserRequest = Omit<UpdateUserAttributes, 'id'>;
