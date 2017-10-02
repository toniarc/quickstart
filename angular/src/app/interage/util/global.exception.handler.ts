import { ErrorHandler } from '@angular/core'

export class GlobalExcetionHandler implements ErrorHandler {
  handleError(error) {
    console.log('custom error handler', error);
  }
}

