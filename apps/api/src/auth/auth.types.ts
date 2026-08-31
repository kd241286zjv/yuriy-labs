export interface AuthenticatedUser {
  id: string;
  email: string;
}

export interface JwtPayload extends AuthenticatedUser {
  type: 'access' | 'refresh';
}
