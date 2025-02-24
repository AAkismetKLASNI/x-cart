export interface IUser {
  id: string;
  email: string;
  name?: string;
  avatarPath: string;
  verificationToken: string;
  rights: UserRole[];
}

export interface IFormData extends Pick<IUser, 'email'> {
  password: string;
}

enum UserRole {}
