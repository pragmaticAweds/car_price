import {
  Injectable,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';

import { UsersService } from '../users.service';
import { UserSessionDto } from '../dtos/user.dto';
import { IRequest } from 'src/types';

// Extend Express Request interface to include currentUser

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}

  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request: IRequest = context.switchToHttp().getRequest();

    const { userId } = (request.session as UserSessionDto) || {};

    if (userId) {
      const user = await this.usersService.findOne(userId);
      request.currentUser = user;
    }

    return handler.handle(); // proceed to the next route
  }
}
