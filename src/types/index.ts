import { Request } from 'express';
import { User } from 'src/users/users.entity';

export interface IRequest extends Request {
  currentUser?: User | null;
}
