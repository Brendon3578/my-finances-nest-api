import { ArgumentsHost, ExceptionFilter, Catch } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.code == 'P2025') {
      return response.status(404).json({
        statusCode: 404,
        message: 'Not found',
        details: `Record to delete does not exist. - ${exception.message}`,
      });
    }

    if (exception.code == 'P2003') {
      return response.status(409).json({
        statusCode: 409,
        message:
          'Cascade Delete is not supported: the request could not be completed due to a conflict with the current state of the resource',
        details: exception.message,
      });
    }

    return response.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
      details: exception.message,
    });
  }
}
