import { CanActivate, ExecutionContext } from '@nestjs/common';
import { IRequest } from 'src/types';
import { UserSessionDto } from 'src/users/dtos/user.dto';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req: IRequest = context.switchToHttp().getRequest();

    return !!(req.session as UserSessionDto)?.userId;
  }
}
