import { ArgumentsHost, Catch } from '@nestjs/common';
import { InvalidRelationError } from '../errors/invalid-relation.error';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(InvalidRelationError)
export class InvalidRelationExceptionFilter extends BaseExceptionFilter {
  catch(exception: InvalidRelationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(422).json({
      statusCode: 422,
      message: exception.message,
    });
  }
}
