import { IUser } from '@/types/user.types';

export const userTransformer = (user: IUser) => ({ ...user, isLoggedIn: true });
