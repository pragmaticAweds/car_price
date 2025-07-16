import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IRequest } from 'src/types';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const req: IRequest = context.switchToHttp().getRequest();

    return req.currentUser;
  },
);
